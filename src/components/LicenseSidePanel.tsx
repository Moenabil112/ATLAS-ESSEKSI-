import { useTranslation } from "../i18n/useTranslation";
import type { LicenseFeature } from "../data/licenseMetadata";

type LicenseSidePanelProps = {
  selectedFeature: LicenseFeature | null;
  onOpenPdf: (pdfUrl: string) => void;
};

function Field({
  label,
  value
}: {
  label: string;
  value?: string | number | null;
}) {
  if (value === undefined || value === null || value === "") return null;

  return (
    <div className="license-field">
      <span className="license-field-label">{label}</span>
      <span className="license-field-value">{value}</span>
    </div>
  );
}

export default function LicenseSidePanel({
  selectedFeature,
  onOpenPdf
}: LicenseSidePanelProps) {
  const { t } = useTranslation();

  if (!selectedFeature) {
    return (
      <aside className="license-side-panel empty">
        <p>{t("evidence.selectPrompt")}</p>
      </aside>
    );
  }

  const properties = selectedFeature.properties;
  const validity =
    properties.validFrom && properties.validTo
      ? `${properties.validFrom} → ${properties.validTo}`
      : undefined;

  return (
    <aside className="license-side-panel">
      <div className="license-panel-header">
        <span className="access-pill">{t("evidence.controlledAccess")}</span>
        <h3>{properties.siteName}</h3>
        <p>{properties.licenseId}</p>
      </div>

      <div className="license-field-list">
        <Field label={t("license.licenseId")} value={properties.licenseId} />
        <Field label={t("license.siteName")} value={properties.siteName} />
        <Field label={t("license.licenseType")} value={properties.licenseType} />
        <Field label={t("license.parentPermit")} value={properties.parentPermit} />
        <Field label={t("license.role")} value={properties.role} />
        <Field label={t("license.status")} value={properties.status} />
        <Field
          label={t("license.area")}
          value={
            properties.areaKm2
              ? `${properties.areaKm2} km²`
              : undefined
          }
        />
        <Field label={t("license.validity")} value={validity} />
        <Field label={t("license.company")} value={properties.company} />
        <Field label={t("license.accessLevel")} value={properties.accessLevel} />
      </div>

      {properties.notes && (
        <p className="license-note">{properties.notes}</p>
      )}

      {properties.pdfUrl && (
        <button
          type="button"
          className="primary-action"
          onClick={() => onOpenPdf(properties.pdfUrl as string)}
        >
          {t("evidence.viewPdf")}
        </button>
      )}
    </aside>
  );
}
