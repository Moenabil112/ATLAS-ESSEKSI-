import Section from "../Layout/Section";
import InfoCard from "../UI/InfoCard";
import { useTranslation } from "../../i18n/LanguageContext";

export default function WhyLayerExists() {
  const { t } = useTranslation();
  const { eyebrow, title, intro, cards } = t.why;

  return (
    <Section id="rationale" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <InfoCard key={card.title} index={i + 1} title={card.title} body={card.body} />
        ))}
      </div>
    </Section>
  );
}
