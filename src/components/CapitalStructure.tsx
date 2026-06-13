import SectionShell from "./SectionShell";
import { useTranslation } from "../i18n/useTranslation";
import { capitalStructureRows, valuationRows } from "../data/dealData";

export default function CapitalStructure() {
  const { t } = useTranslation();

  return (
    <SectionShell
      id="capital-structure"
      title={t("capital.title")}
      subtitle={t("capital.subtitle")}
    >
      <div className="two-col">
        <div className="table-wrap">
          <table className="deal-table">
            <tbody>
              {capitalStructureRows.map((row) => (
                <tr key={row.key}>
                  <td className="field-label">{t(row.labelKey)}</td>
                  <td className="deal-value">
                    {row.value ?? (row.valueKey ? t(row.valueKey) : "")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div className="table-wrap">
            <table className="deal-table">
              <thead>
                <tr>
                  <th colSpan={2}>{t("valuation.title")}</th>
                </tr>
              </thead>
              <tbody>
                {valuationRows.map((row) => (
                  <tr key={row.key}>
                    <td className="field-label">{t(row.labelKey)}</td>
                    <td className="num deal-value">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span className="ref-label">{t("capital.referenceLabel")}</span>
          <p className="note-text">{t("valuation.note")}</p>
          <p className="note-text">{t("capital.whyProjectCo")}</p>
        </div>
      </div>
    </SectionShell>
  );
}
