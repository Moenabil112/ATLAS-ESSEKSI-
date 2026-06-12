import { useEffect, useState } from "react";
import Logo from "../Brand/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../../i18n/LanguageContext";

export default function Header() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    t.header.nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [t]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-copper-fire/20 bg-deep-earth/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-10">
        <a href="#top" aria-label={t.logoAlt}>
          <Logo size="sm" />
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-1 lg:flex">
          {t.header.nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap rounded px-3 py-2 font-heading text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                activeId === id
                  ? "text-forge-glow"
                  : "text-ash-white/60 hover:text-ash-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden whitespace-nowrap font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-copper-fire/80 2xl:block">
            {t.header.confidential}
          </span>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
