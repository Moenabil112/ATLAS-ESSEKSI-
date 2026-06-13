import { useTranslation } from "../i18n/useTranslation";

type PdfViewerModalProps = {
  isOpen: boolean;
  pdfUrl?: string | null;
  title?: string;
  onClose: () => void;
};

export default function PdfViewerModal({
  isOpen,
  pdfUrl,
  title,
  onClose
}: PdfViewerModalProps) {
  const { t } = useTranslation();

  if (!isOpen || !pdfUrl) return null;

  return (
    <div className="pdf-modal-backdrop" role="dialog" aria-modal="true">
      <div className="pdf-modal">
        <div className="pdf-modal-header">
          <div>
            <span className="access-pill">{t("evidence.controlledAccess")}</span>
            <h3>{title || t("evidence.viewPdf")}</h3>
          </div>

          <button
            type="button"
            className="ghost-action"
            onClick={onClose}
          >
            {t("evidence.closePdf")}
          </button>
        </div>

        <div className="pdf-frame-wrap">
          <iframe
            src={pdfUrl}
            title={title || t("evidence.viewPdf")}
            className="pdf-frame"
          />
        </div>

        <div className="pdf-modal-footer">
          <a
            className="secondary-action"
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t("evidence.openPdfNewTab")}
          </a>
        </div>
      </div>
    </div>
  );
}
