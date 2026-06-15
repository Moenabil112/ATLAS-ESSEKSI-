import { useState } from "react";
import SectionShell from "./SectionShell";
import PdfViewerModal from "./PdfViewerModal";
import { useTranslation } from "../i18n/useTranslation";
import { documentFamilies } from "../data/documentsData";

export default function DocumentCenter() {
  const { t } = useTranslation();
  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null);

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
                  <span className="doc-access">
                    {doc.internal ? t("documents.internalNote") : t(doc.accessKey)}
                  </span>
                  {doc.pdfUrl && !doc.internal && (
                    <div className="doc-actions">
                      <button
                        type="button"
                        className="doc-preview"
                        onClick={() =>
                          setPreview({ url: doc.pdfUrl as string, title: t(doc.titleKey) })
                        }
                      >
                        {t("documents.preview")}
                      </button>
                      {doc.docxUrl && (
                        <a
                          className="doc-download"
                          href={doc.docxUrl}
                          download
                          aria-label={`${t("documents.download")} — ${t(doc.titleKey)}`}
                        >
                          {t("documents.download")}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

      <PdfViewerModal
        isOpen={Boolean(preview)}
        pdfUrl={preview?.url}
        title={preview?.title}
        onClose={() => setPreview(null)}
      />
    </SectionShell>
  );
}
