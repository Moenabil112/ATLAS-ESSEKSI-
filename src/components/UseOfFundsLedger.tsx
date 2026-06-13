import SectionShell from "./SectionShell";
import { useTranslation } from "../i18n/useTranslation";
import { useOfFunds } from "../data/dealData";

export default function UseOfFundsLedger() {
  const { t } = useTranslation();

  return (
    <SectionShell
      id="use-of-funds"
      title={t("funds.title")}
      subtitle={t("funds.subtitle")}
    >
      <div className="table-wrap">
        <table className="deal-table">
          <thead>
            <tr>
              <th>{t("funds.category")}</th>
              <th className="num">{t("funds.amount")}</th>
              <th className="num">{t("funds.allocation")}</th>
              <th>{t("funds.relatedTranche")}</th>
              <th>{t("funds.purpose")}</th>
            </tr>
          </thead>
          <tbody>
            {useOfFunds.map((item) => (
              <tr key={item.id}>
                <td className="field-label">{t(item.categoryKey)}</td>
                <td className="num deal-value">{item.amount}</td>
                <td className="num">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      justifyContent: "flex-end",
                    }}
                  >
                    <div className="alloc-track">
                      <div
                        className="alloc-fill"
                        style={{ width: `${item.allocation}%` }}
                      />
                    </div>
                    <span className="deal-value">{item.allocationLabel}</span>
                  </div>
                </td>
                <td className="deal-value">{item.relatedTranche}</td>
                <td>{t(item.purposeKey)}</td>
              </tr>
            ))}
            <tr style={{ background: "rgba(46,74,62,0.2)" }}>
              <td className="field-label">{t("common.controlled")}</td>
              <td className="num field-label deal-value">USD 3.6M</td>
              <td className="num field-label deal-value">100%</td>
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
