import { useTranslation } from "../i18n/useTranslation";

/**
 * ATLAS ISSEKSI brand lockup: copper mountain geometry with circuit nodes
 * plus the wordmark and COPPER ECOSYSTEM subtitle. The wordmark stays Latin
 * in all languages (brand name); alt text is localized.
 */
export default function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  const { t } = useTranslation();

  return (
    <div className="logo-lockup" role="img" aria-label={t("header.logoAlt")}>
      <svg viewBox="0 0 150 100" width="34" height="34" fill="none" aria-hidden="true">
        <g
          stroke="#D4924A"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M53 8 L75 30 L53 52 L31 30 Z" />
          <circle cx="53" cy="30" r="5" strokeWidth="5" />
          <path d="M38 45 L8 86 H24" />
          <circle cx="33" cy="86" r="5" strokeWidth="5" />
          <path d="M46 59 L37 71" />
          <circle cx="33" cy="78" r="5" strokeWidth="5" />
          <path d="M60 62 L46 86 H74 Z" />
          <path d="M80 60 L101 32 L134 86 H116" />
          <circle cx="107" cy="86" r="5" strokeWidth="5" />
          <path d="M101 50 V66" />
          <circle cx="101" cy="74" r="5" strokeWidth="5" />
        </g>
      </svg>
      {withWordmark && (
        <div dir="ltr">
          <div className="logo-word">
            ATLAS <span className="isseksi">ISSEKSI</span>
          </div>
          <div className="logo-sub">COPPER ECOSYSTEM</div>
        </div>
      )}
    </div>
  );
}
