import { useState } from "react";
import type { ReactNode } from "react";

export interface AccordionItem {
  id: string;
  heading: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div
            key={item.id}
            className={`panel-stone transition-colors duration-200 ${
              open ? "border-forge-glow/45" : "hover:border-copper-fire/40"
            }`}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-heading text-xs font-semibold tracking-wide text-ash-white">
                {item.heading}
              </span>
              <span
                aria-hidden="true"
                className={`shrink-0 font-heading text-base text-forge-glow transition-transform duration-200 ${
                  open ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {open && (
              <div className="border-t border-copper-fire/20 px-5 py-4 font-body text-sm leading-relaxed text-ash-white/70">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
