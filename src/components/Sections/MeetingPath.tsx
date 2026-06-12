import Section from "../Layout/Section";
import Timeline from "../UI/Timeline";
import { processSteps } from "../../data/transactionData";

export default function MeetingPath() {
  return (
    <Section
      id="process"
      eyebrow="Section 08"
      title="Meeting Path"
      intro="A controlled, sequential process from first contact to Tranche 1 closing."
    >
      <Timeline steps={processSteps} />
    </Section>
  );
}
