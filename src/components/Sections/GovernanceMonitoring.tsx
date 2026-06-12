import Section from "../Layout/Section";
import MatrixTable from "../UI/MatrixTable";
import { useTranslation } from "../../i18n/LanguageContext";

export default function GovernanceMonitoring() {
  const { t } = useTranslation();
  const { eyebrow, title, intro, headers, rows, footnote } = t.governance;

  return (
    <Section id="governance" eyebrow={eyebrow} title={title} intro={intro}>
      <MatrixTable headers={headers} rows={rows} />
      <p className="mt-6 max-w-3xl font-body text-sm text-ash-white/60">{footnote}</p>
    </Section>
  );
}
