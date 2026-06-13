import Logo from "./Logo";
import { useTranslation } from "../i18n/useTranslation";
import type { Language } from "../i18n/translations";
import { scrollToSection } from "../lib/scrollToSection";

type HeaderProps = {
  meetingMode: boolean;
  onToggleMeetingMode: () => void;
};

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
];

export default function Header({ meetingMode, onToggleMeetingMode }: HeaderProps) {
  const { t, language, setLanguage } = useTranslation();

  return (
    <header className="top-deal-bar">
      <Logo />

      <div className="header-titles">
        <div className="header-title">{t("deal.title")}</div>
        <div className="header-subtitle">{t("deal.subtitle")}</div>
      </div>

      <div className="header-actions">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => scrollToSection("documents")}
        >
          {t("header.documentRoom")}
        </button>

        <button
          type="button"
          className={`btn btn-toggle ${meetingMode ? "on" : ""}`}
          aria-pressed={meetingMode}
          onClick={onToggleMeetingMode}
        >
          <span className="dot" aria-hidden="true" />
          {t("header.meetingMode")}
        </button>

        <div className="lang-switch" role="group" aria-label={t("header.language")}>
          {languages.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              lang={code}
              aria-pressed={language === code}
              className={language === code ? "active" : ""}
              onClick={() => setLanguage(code)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
