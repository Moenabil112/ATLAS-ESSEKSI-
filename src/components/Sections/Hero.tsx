import Logo from "../Brand/Logo";
import StatCard from "../UI/StatCard";
import { useTranslation } from "../../i18n/LanguageContext";

export default function Hero() {
  const { t, dir } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-32 sm:px-10 md:pt-40">
      {/* Geometric copper line motif */}
      <svg
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.16] ${
          dir === "rtl" ? "-scale-x-100" : ""
        }`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 600"
        fill="none"
      >
        <path d="M-50 520 L260 300 L420 420 L640 180 L900 460 L1250 240" stroke="#B87333" strokeWidth="1.4" />
        <path d="M-50 580 L300 380 L480 480 L720 260 L980 520 L1250 340" stroke="#2E4A3E" strokeWidth="1.2" />
        <circle cx="640" cy="180" r="5" stroke="#D4924A" strokeWidth="1.4" />
        <circle cx="260" cy="300" r="4" fill="#B87333" />
        <circle cx="900" cy="460" r="4" fill="#B87333" />
        <path d="M640 185 V260" stroke="#B87333" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-6xl">
        <Logo size="lg" />
        <p className="eyebrow mt-8">{t.hero.eyebrow}</p>
        <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ash-white sm:text-5xl">
          {t.hero.title}
          <span className="mt-2 block text-xl font-bold text-forge-glow sm:text-3xl">
            {t.hero.subtitle}
          </span>
        </h1>
        <p className="mt-5 font-subheading text-xl italic text-ash-white/80 sm:text-2xl">
          {t.hero.tagline}
        </p>
        <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-ash-white/75">
          {t.hero.text}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.hero.actions.map((action, i) => (
            <a
              key={action.href}
              href={action.href}
              className={i === 0 ? "btn-copper" : "btn-ghost"}
            >
              {action.label}
            </a>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.hero.stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
