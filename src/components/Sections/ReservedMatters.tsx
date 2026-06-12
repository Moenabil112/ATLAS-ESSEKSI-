import Section from "../Layout/Section";
import Accordion from "../UI/Accordion";
import { useTranslation } from "../../i18n/LanguageContext";

export default function ReservedMatters() {
  const { t } = useTranslation();
  const { eyebrow, title, intro, items: matters } = t.reserved;

  const items = matters.map((matter, i) => ({
    id: `reserved-${i}`,
    heading: (
      <>
        <span className="me-3 font-subheading text-base italic text-copper-fire/80">
          {String(i + 1).padStart(2, "0")}
        </span>
        {matter.title}
      </>
    ),
    content: matter.note,
  }));

  return (
    <Section id="reserved" eyebrow={eyebrow} title={title} intro={intro}>
      <Accordion items={items} />
    </Section>
  );
}
