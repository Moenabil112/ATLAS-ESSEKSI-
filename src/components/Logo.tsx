import { useTranslation } from "../i18n/useTranslation";

/**
 * ATLAS ISSEKSI brand lockup, traced from the official logo:
 * a copper diamond + ring over twin mountain peaks with circuit nodes,
 * the white ATLAS ISSEKSI wordmark, and the COPPER ECOSYSTEM subtitle.
 * The wordmark stays Latin in all languages (brand name); alt text is localized.
 */
export default function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  const { t } = useTranslation();

  return (
    <div className="logo-lockup" role="img" aria-label={t("header.logoAlt")}>
      <svg
        viewBox="0 0 144 104"
        height="40"
        width="55"
        fill="none"
        aria-hidden="true"
        className="logo-mark"
      >
        <defs>
          <linearGradient id="atlas-copper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D4924A" />
            <stop offset="1" stopColor="#B87333" />
          </linearGradient>
        </defs>
        <g
          stroke="url(#atlas-copper)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Top diamond with inner diamond and center ring */}
          <path d="M72 6 L98 32 L72 58 L46 32 Z" />
          <path d="M72 18 L86 32 L72 46 L58 32 Z" />
          <circle cx="72" cy="32" r="5.5" strokeWidth="4.5" />

          {/* Twin mountain peaks (sloped outer edges, near-vertical inner edges) */}
          <path d="M60 42 L18 94 L60 94 Z" />
          <path d="M84 42 L126 94 L84 94 Z" />

          {/* Center peak */}
          <path d="M72 60 L58 94 L86 94 Z" />

          {/* Left circuit traces + nodes */}
          <path d="M47 66 L36 82" />
          <circle cx="32" cy="88" r="4" strokeWidth="4.5" />
          <path d="M44 88 L38 94" />
          <circle cx="33" cy="98" r="4" strokeWidth="4.5" />

          {/* Right circuit trace + node */}
          <path d="M101 80 L116 92" />
          <circle cx="122" cy="96" r="4" strokeWidth="4.5" />
        </g>
      </svg>

      {withWordmark && (
        <div dir="ltr">
          <div className="logo-word">ATLAS ISSEKSI</div>
          <div className="logo-sub">COPPER ECOSYSTEM</div>
        </div>
      )}
    </div>
  );
}
