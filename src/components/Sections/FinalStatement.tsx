import Logo from "../Brand/Logo";
import { useTranslation } from "../../i18n/LanguageContext";

export default function FinalStatement() {
  const { t } = useTranslation();

  return (
    <section id="summary" className="px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Logo size="lg" className="justify-center" />
        <p className="eyebrow mt-8">{t.final.eyebrow}</p>
        <blockquote className="mt-6 font-subheading text-2xl italic leading-relaxed text-ash-white/90 sm:text-3xl">
          {t.final.statement}
        </blockquote>
        <div className="copper-rule mt-10 w-full max-w-md" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {t.final.actions.map((label, i) => (
            <button key={label} type="button" className={i === 0 ? "btn-copper" : "btn-ghost"}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
