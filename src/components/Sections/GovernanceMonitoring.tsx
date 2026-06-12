import Section from "../Layout/Section";
import MatrixTable from "../UI/MatrixTable";
import { governanceRows } from "../../data/transactionData";

export default function GovernanceMonitoring() {
  return (
    <Section
      id="governance"
      eyebrow="Section 06"
      title="Governance & Monitoring"
      intro="Quarterly monitoring rights with clearly bounded partner visibility."
    >
      <MatrixTable rows={governanceRows} />
      <p className="mt-6 max-w-3xl font-body text-sm text-ash-white/60">
        The partner has the right to review, ask questions, and request clarification through
        the quarterly cycle. Day-to-day operational control remains with ProjectCo and the
        sponsor at all times.
      </p>
    </Section>
  );
}
