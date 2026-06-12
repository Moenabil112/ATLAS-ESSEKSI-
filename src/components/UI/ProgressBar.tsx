import { useInView } from "../../hooks/useInView";

interface ProgressBarProps {
  label: string;
  percent: number;
  amount: string;
}

export default function ProgressBar({ label, percent, amount }: ProgressBarProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-body text-sm text-ash-white/85">{label}</span>
        <span className="shrink-0 font-heading text-xs font-semibold text-forge-glow">
          {percent}% <span className="text-ash-white/55">· {amount}</span>
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-verde-tech/35">
        <div
          className="h-full rounded-full bg-gradient-to-r from-copper-fire to-forge-glow transition-[width] duration-1000 ease-out"
          style={{ width: inView ? `${percent}%` : "0%" }}
        />
      </div>
    </div>
  );
}
