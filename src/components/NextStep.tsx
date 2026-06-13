import SectionShell from "./SectionShell";
import { useTranslation } from "../i18n/useTranslation";
import { nextSteps } from "../data/dealData";

export default function NextStep() {
  const { t } = useTranslation();

  return (
    <SectionShell
      id="next-step"
      title={t("next.title")}
      subtitle={t("next.subtitle")}
    >
      <ol className="timeline">
        {nextSteps.map((step, i) => (
          <li className="timeline-step" key={step.id}>
            <span className="timeline-node deal-value">{i + 1}</span>
            <span className="timeline-label">{t(step.labelKey)}</span>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
