import Section from "../Layout/Section";
import { snapshotRows } from "../../data/transactionData";

export default function TransactionSnapshot() {
  return (
    <Section
      id="structure"
      eyebrow="Section 01"
      title="Transaction Snapshot"
      intro="The closed capital architecture, stated in transaction terms."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {snapshotRows.map((row) => (
          <div
            key={row.field}
            className="panel px-5 py-4 transition-colors duration-200 hover:border-forge-glow/40"
          >
            <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-copper-fire">
              {row.field}
            </p>
            <p className="mt-2 font-body text-sm font-medium text-ash-white/90">{row.value}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
