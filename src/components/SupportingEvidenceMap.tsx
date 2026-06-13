import SectionShell from "./SectionShell";
import EvidenceMap from "./EvidenceMap";
import { useTranslation } from "../i18n/useTranslation";

export default function SupportingEvidenceMap() {
  const { t } = useTranslation();

  return (
    <SectionShell
      id="evidence-map"
      title={t("evidence.title")}
      subtitle={t("evidence.subtitle")}
    >
      <EvidenceMap />
    </SectionShell>
  );
}
