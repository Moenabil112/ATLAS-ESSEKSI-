import Section from "../Layout/Section";
import { documents } from "../../data/transactionData";
import type { DocumentStatus } from "../../data/transactionData";

const statusStyles: Record<DocumentStatus, string> = {
  "To Prepare": "border-ash-white/25 text-ash-white/60",
  Draft: "border-forge-glow/50 text-forge-glow",
  Controlled: "border-verde-tech text-ash-white/85 bg-verde-tech/35",
};

export default function DocumentCenter() {
  return (
    <Section
      id="documents"
      eyebrow="Section 09"
      title="Controlled Document Center"
      intro="The transaction documentation set. Distribution is controlled and permission-based."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <div
            key={doc.title}
            className="panel flex flex-col p-5 transition-colors duration-200 hover:border-forge-glow/45"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-heading text-xs font-bold uppercase tracking-[0.1em] text-ash-white">
                {doc.title}
              </h3>
              <span
                className={`shrink-0 rounded-sm border px-2 py-0.5 font-heading text-[9px] font-semibold uppercase tracking-[0.14em] ${statusStyles[doc.status]}`}
              >
                {doc.status}
              </span>
            </div>
            <p className="mt-3 flex-1 font-body text-xs leading-relaxed text-ash-white/65">
              {doc.purpose}
            </p>
            <button
              type="button"
              className="mt-4 self-start font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-copper-fire transition-colors duration-200 hover:text-forge-glow"
            >
              Preview →
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}
