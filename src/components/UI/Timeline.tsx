import type { ProcessStep } from "../../data/transactionData";

interface TimelineProps {
  steps: ProcessStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div>
      {/* Desktop: horizontal flow */}
      <ol className="hidden md:grid md:grid-cols-7">
        {steps.map((item, i) => (
          <li key={item.step} className="relative flex flex-col items-center px-2 text-center">
            <div className="flex w-full items-center">
              <div className={`h-px flex-1 ${i === 0 ? "bg-transparent" : "bg-copper-fire/40"}`} />
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-copper-fire/60 bg-deep-earth font-heading text-xs font-bold text-forge-glow">
                {i + 1}
              </span>
              <div
                className={`h-px flex-1 ${i === steps.length - 1 ? "bg-transparent" : "bg-copper-fire/40"}`}
              />
            </div>
            <h3 className="mt-4 font-heading text-[11px] font-bold uppercase tracking-[0.1em] text-ash-white">
              {item.step}
            </h3>
            <p className="mt-2 font-body text-xs leading-relaxed text-ash-white/60">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>

      {/* Mobile: vertical rail */}
      <ol className="md:hidden">
        {steps.map((item, i) => (
          <li key={item.step} className="relative flex gap-4 pb-8 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-copper-fire/60 bg-deep-earth font-heading text-xs font-bold text-forge-glow">
                {i + 1}
              </span>
              {i < steps.length - 1 && <div className="mt-1 w-px flex-1 bg-copper-fire/40" />}
            </div>
            <div className="pt-1.5">
              <h3 className="font-heading text-xs font-bold uppercase tracking-[0.1em] text-ash-white">
                {item.step}
              </h3>
              <p className="mt-1 font-body text-sm text-ash-white/60">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
