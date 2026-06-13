import SectionShell from "./SectionShell";
import { useTranslation } from "../i18n/useTranslation";
import { documentFamilies } from "../data/documentsData";

export default function DocumentCenter() {
  const { t } = useTranslation();

  return (
    <SectionShell
      id="documents"
      title={t("documents.title")}
      subtitle={t("documents.subtitle")}
    >
      {documentFamilies.map((family) => (
        <div className="doc-family" key={family.id}>
          <h3 className="doc-family-title">{t(family.titleKey)}</h3>
          <div className="doc-grid">
            {family.documents.map((doc) => (
              <article className="doc-card" key={doc.id}>
                <div className="doc-card-head">
                  <h4 className="doc-title">{t(doc.titleKey)}</h4>
                  <span className="doc-status">{t(doc.statusKey)}</span>
                </div>
                <p className="doc-purpose">{t(doc.purposeKey)}</p>
                <div className="doc-meta">
                  <span className="doc-access">{t(doc.accessKey)}</span>
                  <button type="button" className="doc-preview">
                    {t("documents.preview")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </SectionShell>
  );
}
