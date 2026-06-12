import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";

interface StatCardProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function StatCard({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
}: StatCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const current = useCountUp(value, inView);

  return (
    <div ref={ref} className="panel px-5 py-6 text-center">
      <p className="font-heading text-2xl font-bold text-forge-glow sm:text-3xl">
        {prefix}
        {current.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-2 font-body text-xs uppercase tracking-[0.18em] text-ash-white/65">
        {label}
      </p>
    </div>
  );
}
