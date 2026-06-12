import Section from "../Layout/Section";
import Timeline from "../UI/Timeline";
import { useTranslation } from "../../i18n/LanguageContext";

export default function MeetingPath() {
  const { t } = useTranslation();
  const { eyebrow, title, intro, steps } = t.process;

  return (
    <Section id="process" eyebrow={eyebrow} title={title} intro={intro}>
      <Timeline steps={steps} />
    </Section>
  );
}
