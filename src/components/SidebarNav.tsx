import { useEffect, useState } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { scrollToSection } from "../lib/scrollToSection";

const navItems = [
  { id: "snapshot", labelKey: "nav.snapshot" },
  { id: "capital-structure", labelKey: "nav.capitalStructure" },
  { id: "tranches", labelKey: "nav.tranches" },
  { id: "use-of-funds", labelKey: "nav.useOfFunds" },
  { id: "protections", labelKey: "nav.protections" },
  { id: "governance", labelKey: "nav.governance" },
  { id: "evidence-map", labelKey: "nav.evidenceMap" },
  { id: "documents", labelKey: "nav.documents" },
  { id: "next-step", labelKey: "nav.nextStep" },
];

export default function SidebarNav() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState("snapshot");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sidebar-nav" aria-label={t("deal.subtitle")}>
      <p className="nav-eyebrow">{t("summary.title")}</p>
      {navItems.map(({ id, labelKey }) => (
        <button
          key={id}
          type="button"
          className={activeId === id ? "active" : ""}
          onClick={() => scrollToSection(id)}
        >
          {t(labelKey)}
        </button>
      ))}
    </nav>
  );
}
