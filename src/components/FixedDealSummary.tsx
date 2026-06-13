import { useTranslation } from "../i18n/useTranslation";
import { fixedDealSummary } from "../data/dealData";
import { scrollToSection } from "../lib/scrollToSection";

const accentKeys = new Set(["capital", "stake", "sponsorRetained"]);

export default function FixedDealSummary() {
  const { t } = useTranslation();

  return (
    <aside className="fixed-deal-summary" aria-label={t("summary.title")}>
      <p className="summary-title">{t("summary.title")}</p>

      <div className="summary-grid">
        {fixedDealSummary.map((item) => (
          <div className="summary-row" key={item.key}>
            <span className="summary-label">{t(item.labelKey)}</span>
            <span
              className={`summary-val deal-value ${accentKeys.has(item.key) ? "accent" : ""}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-copper summary-map-btn"
        onClick={() => scrollToSection("evidence-map")}
      >
        {t("summary.viewLicenseMap")}
      </button>
    </aside>
  );
}
