import { useState } from "react";
import Section from "../Layout/Section";
import { tranches } from "../../data/transactionData";

export default function TranchePlan() {
  const [active, setActive] = useState(0);
  const tranche = tranches[active];

  return (
    <Section
      id="tranches"
      eyebrow="Section 03"
      title="Three-Tranche Capital Plan"
      intro="USD 3.6M deployed through a staged, condition-based payment protocol with progressive equity recognition."
    >
      {/* Stepper */}
      <div className="flex items-center" role="tablist" aria-label="Tranche selection">
        {tranches.map((t, i) => (
          <div key={t.name} className="flex flex-1 items-center last:flex-none">
            <button
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full border font-heading text-sm font-bold transition-colors duration-200 ${
                  active === i
                    ? "border-forge-glow bg-copper-fire/25 text-forge-glow"
                    : "border-copper-fire/40 text-ash-white/60 group-hover:border-copper-fire/70 group-hover:text-ash-white"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`font-heading text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  active === i ? "text-forge-glow" : "text-ash-white/55"
                }`}
              >
                {t.name}
              </span>
            </button>
            {i < tranches.length - 1 && (
              <div className="mx-3 mb-6 h-px flex-1 bg-copper-fire/35" />
            )}
          </div>
        ))}
      </div>

      {/* Detail panel */}
      <div role="tabpanel" className="panel mt-8 p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="font-heading text-xl font-bold text-ash-white">
            {tranche.name} — <span className="text-forge-glow">{tranche.amount}</span>
          </h3>
          <p className="font-subheading text-lg italic text-ash-white/75">
            Equity recognized: {tranche.equity}
            <span className="text-ash-white/50"> · Cumulative {tranche.cumulativeEquity}</span>
          </p>
        </div>
        <div className="copper-rule mt-5" />
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-copper-fire">
              Purpose
            </h4>
            <ul className="mt-4 space-y-2.5">
              {tranche.purpose.map((item) => (
                <li key={item} className="flex gap-3 font-body text-sm text-ash-white/80">
                  <span aria-hidden="true" className="mt-[7px] h-1 w-3 shrink-0 bg-forge-glow/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-copper-fire">
              Release Conditions
            </h4>
            <ul className="mt-4 space-y-2.5">
              {tranche.releaseConditions.map((item) => (
                <li key={item} className="flex gap-3 font-body text-sm text-ash-white/80">
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 font-heading text-xs text-forge-glow"
                  >
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center font-subheading text-xl italic text-ash-white/85">
        Total: <span className="not-italic font-heading text-lg font-bold text-forge-glow">USD 3.6M</span>{" "}
        → <span className="not-italic font-heading text-lg font-bold text-forge-glow">10%</span>{" "}
        recognized after full payment
      </p>
    </Section>
  );
}
