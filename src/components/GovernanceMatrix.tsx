import SectionShell from "./SectionShell";
import { useTranslation } from "../i18n/useTranslation";
import { governanceRows } from "../data/dealData";

export default function GovernanceMatrix() {
  const { t } = useTranslation();

  return (
    <SectionShell
      id="governance"
      title={t("governance.title")}
      subtitle={t("governance.subtitle")}
    >
      <div className="table-wrap">
        <table className="deal-table">
          <thead>
            <tr>
              <th>{t("governance.area")}</th>
              <th>{t("governance.partner")}</th>
              <th>{t("governance.sponsor")}</th>
              <th>{t("governance.status")}</th>
            </tr>
          </thead>
          <tbody>
            {governanceRows.map((row) => {
              const protectedRow =
                row.id === "license" || row.id === "technology";
              return (
                <tr key={row.id} className={protectedRow ? "row-protected" : ""}>
                  <td className="field-label">{t(row.areaKey)}</td>
                  <td>{t(row.partnerKey)}</td>
                  <td>{t(row.sponsorKey)}</td>
                  <td className={protectedRow ? "status-protected" : ""}>
                    {t(row.statusKey)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
