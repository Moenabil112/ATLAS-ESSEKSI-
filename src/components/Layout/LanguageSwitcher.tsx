import { useTranslation } from "../../i18n/LanguageContext";
import type { Language } from "../../i18n/translations";

const options: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center overflow-hidden rounded border border-copper-fire/40"
    >
      {options.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`brand-latin px-2.5 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 ${
            lang === code
              ? "bg-copper-fire/30 text-forge-glow"
              : "text-ash-white/55 hover:bg-copper-fire/12 hover:text-ash-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
