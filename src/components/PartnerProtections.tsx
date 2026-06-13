import SectionShell from "./SectionShell";
import { useTranslation } from "../i18n/useTranslation";
import { partnerReceives, protectedAssets } from "../data/dealData";

export default function PartnerProtections() {
  const { t } = useTranslation();

  return (
    <SectionShell
      id="protections"
      title={t("protections.title")}
      subtitle={t("protections.subtitle")}
    >
      <div className="protection-grid">
        <div className="panel-card protection-col receives">
          <h3>{t("protections.partnerReceives")}</h3>
          <ul className="protection-list">
            {partnerReceives.map((item) => (
              <li key={item.id}>
                <span className="mark" aria-hidden="true">
                  +
                </span>
                {t(item.labelKey)}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-card protection-col protected">
          <h3>{t("protections.protected")}</h3>
          <ul className="protection-list">
            {protectedAssets.map((item) => (
              <li key={item.id}>
                <span className="mark" aria-hidden="true">
                  ✕
                </span>
                {t(item.labelKey)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
