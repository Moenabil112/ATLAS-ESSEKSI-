import { Fragment, useState } from "react";
import SectionShell from "./SectionShell";
import { useTranslation } from "../i18n/useTranslation";
import { tranches } from "../data/dealData";

export default function TrancheCapitalPath() {
  const { t } = useTranslation();
  const [openTranche, setOpenTranche] = useState<string | null>("tranche1");

  return (
    <SectionShell
      id="tranches"
      title={t("tranches.title")}
      subtitle={t("tranches.subtitle")}
    >
      <div className="tranche-grid">
        {tranches.map((tranche, i) => {
          const open = openTranche === tranche.id;
          return (
            <Fragment key={tranche.id}>
              <div
                role="button"
                tabIndex={0}
                aria-expanded={open}
                className={`tranche-card ${open ? "open" : ""}`}
                onClick={() => setOpenTranche(open ? null : tranche.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenTranche(open ? null : tranche.id);
                  }
                }}
              >
                <div className="tranche-head">
                  <span className="tranche-name">{t(tranche.titleKey)}</span>
                  <span className="tranche-equity deal-value">{tranche.equity}</span>
                </div>
                <div className="tranche-amount deal-value">{tranche.amount}</div>
                <div className="tranche-label">{t(tranche.labelKey)}</div>

                {open && (
                  <div className="tranche-detail">
                    <span className="detail-label">{t("funds.purpose")}</span>
                    {t(tranche.purposeKey)}
                    <div style={{ height: 10 }} />
                    <span className="detail-label">{t("tranches.viewConditions")}</span>
                    {t(tranche.conditionsKey)}
                  </div>
                )}

                <button
                  type="button"
                  className="tranche-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenTranche(open ? null : tranche.id);
                  }}
                >
                  {open ? t("tranches.hideConditions") : t("tranches.viewConditions")}
                </button>
              </div>

              {i < tranches.length - 1 && (
                <div className="tranche-connector" aria-hidden="true">
                  →
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      <div className="total-banner deal-value">{t("tranches.totalBanner")}</div>
    </SectionShell>
  );
}
