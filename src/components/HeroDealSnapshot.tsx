import { useTranslation } from "../i18n/useTranslation";
import { scrollToSection } from "../lib/scrollToSection";

const metrics = [
  { value: "USD 3.6M", labelKey: "summary.capital" },
  { value: "10%", labelKey: "summary.stake" },
  { value: "3", labelKey: "summary.payments" },
  { value: "90%", labelKey: "summary.sponsorRetained" },
];

const ctas = [
  { labelKey: "cta.viewCapitalPath", target: "tranches", primary: true },
  { labelKey: "cta.reviewProtections", target: "protections" },
  { labelKey: "cta.openEvidenceMap", target: "evidence-map" },
  { labelKey: "cta.documentCenter", target: "documents" },
];

const focusKeys = [
  "meetingMode.focus.capital",
  "meetingMode.focus.stake",
  "meetingMode.focus.tranches",
  "meetingMode.focus.retained",
  "meetingMode.focus.license",
  "meetingMode.focus.technology",
  "meetingMode.focus.control",
];

export default function HeroDealSnapshot() {
  const { t } = useTranslation();

  return (
    <section id="snapshot" className="section-shell">
      <p className="hero-kicker">{t("hero.kicker")}</p>
      <h1 className="hero-title">{t("hero.title")}</h1>
      <p className="hero-amount deal-value">{t("hero.amountLine")}</p>
      <p className="hero-structure">{t("hero.structureLine")}</p>
      <p className="hero-statement">{t("hero.statement")}</p>

      <div className="hero-ctas">
        {ctas.map((cta) => (
          <button
            key={cta.target}
            type="button"
            className={`btn ${cta.primary ? "btn-copper" : "btn-ghost"}`}
            onClick={() => scrollToSection(cta.target)}
          >
            {t(cta.labelKey)}
          </button>
        ))}
      </div>

      <div className="metric-grid" style={{ marginTop: 24 }}>
        {metrics.map((m) => (
          <div className="metric-card" key={m.labelKey}>
            <div className="metric-value deal-value">{m.value}</div>
            <div className="metric-label">{t(m.labelKey)}</div>
          </div>
        ))}
      </div>

      {/* Surfaced in Meeting Mode (CSS-controlled) for screen-sharing focus */}
      <div className="meeting-focus-bar" aria-hidden="false">
        {focusKeys.map((k) => (
          <span className="meeting-focus-chip" key={k}>
            {t(k)}
          </span>
        ))}
      </div>
    </section>
  );
}
