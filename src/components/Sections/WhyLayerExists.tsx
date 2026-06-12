import Section from "../Layout/Section";
import InfoCard from "../UI/InfoCard";
import { whyCards } from "../../data/transactionData";

export default function WhyLayerExists() {
  return (
    <Section
      id="rationale"
      eyebrow="Section 02"
      title="Why This Layer Exists"
      intro="The strategic logic behind a limited minority financial partner entry."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyCards.map((card, i) => (
          <InfoCard key={card.title} index={i + 1} title={card.title} body={card.body} />
        ))}
      </div>
    </Section>
  );
}
