import Section from "../Layout/Section";
import { useTranslation } from "../../i18n/LanguageContext";

export default function SponsorProtection() {
  const { t } = useTranslation();
  const { eyebrow, title, intro, receivesTitle, protectedTitle, receives, protectedItems, footnote } =
    t.protection;

  return (
    <Section id="protection" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="panel p-6 sm:p-8">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-forge-glow">
            {receivesTitle}
          </h3>
          <div className="copper-rule mt-4" />
          <ul className="mt-6 space-y-3.5">
            {receives.map((item) => (
              <li key={item} className="flex gap-3 font-body text-sm text-ash-white/85">
                <span aria-hidden="true" className="mt-[7px] h-1 w-3 shrink-0 bg-forge-glow/70" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-stone p-6 sm:p-8">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ash-white/85">
            {protectedTitle}
          </h3>
          <div className="copper-rule mt-4" />
          <ul className="mt-6 space-y-3.5">
            {protectedItems.map((item) => (
              <li key={item} className="flex gap-3 font-body text-sm text-ash-white/75">
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 font-heading text-xs text-copper-fire"
                >
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 max-w-3xl font-subheading text-lg italic text-ash-white/65">{footnote}</p>
    </Section>
  );
}
