import Section from "../Layout/Section";
import Accordion from "../UI/Accordion";
import { reservedMatters } from "../../data/transactionData";

export default function ReservedMatters() {
  const items = reservedMatters.map((matter, i) => ({
    id: `reserved-${i}`,
    heading: (
      <>
        <span className="mr-3 font-subheading text-base italic text-copper-fire/80">
          {String(i + 1).padStart(2, "0")}
        </span>
        {matter.title}
      </>
    ),
    content: matter.note,
  }));

  return (
    <Section
      id="reserved"
      eyebrow="Section 07"
      title="Reserved Matters"
      intro="Material deviations requiring partner notification or approval, as finalized in the shareholder agreement."
    >
      <Accordion items={items} />
    </Section>
  );
}
