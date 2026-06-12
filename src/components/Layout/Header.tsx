import { useEffect, useState } from "react";
import AtlasMark from "../Brand/AtlasMark";
import { navItems } from "../../data/transactionData";

export default function Header() {
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
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-copper-fire/20 bg-deep-earth/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 sm:px-10">
        <a href="#top" className="flex items-center gap-3">
          <AtlasMark className="h-8 w-8" />
          <span className="font-heading text-xs font-bold tracking-[0.22em] text-ash-white">
            ATLAS <span className="text-forge-glow">·</span> ISSEKSI PROJECTCO
          </span>
        </a>
        <nav
          aria-label="Section navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map(({ id, label }) => (
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
        <span className="hidden font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-copper-fire/80 lg:block">
          Confidential — Controlled Distribution
        </span>
      </div>
    </header>
  );
}
