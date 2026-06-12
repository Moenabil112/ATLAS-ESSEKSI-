import AtlasMark from "./AtlasMark";
import { useTranslation } from "../../i18n/LanguageContext";

interface LogoProps {
  /** "sm" for header/footer, "lg" for the hero lockup */
  size?: "sm" | "lg";
  showSubtitle?: boolean;
  className?: string;
}

/**
 * ATLAS ISSEKSI logo lockup: abstract copper mark + Latin wordmark.
 * The wordmark stays in Latin script in all languages (brand name).
 */
export default function Logo({ size = "sm", showSubtitle = true, className = "" }: LogoProps) {
  const { t } = useTranslation();
  const large = size === "lg";

  return (
    <div
      role="img"
      aria-label={t.logoAlt}
      className={`flex items-center ${large ? "gap-4" : "gap-3"} ${className}`}
    >
      <AtlasMark className={large ? "h-14 w-14 sm:h-16 sm:w-16" : "h-8 w-8"} />
      <div dir="ltr" className="text-start">
        <span
          className={`brand-latin block whitespace-nowrap font-heading font-bold text-ash-white ${
            large
              ? "text-lg tracking-[0.3em] sm:text-xl"
              : "text-xs tracking-[0.22em]"
          }`}
        >
          ATLAS ISSEKSI
        </span>
        {showSubtitle && (
          <span
            className={`brand-latin block whitespace-nowrap font-heading font-semibold text-copper-fire ${
              large
                ? "mt-1 text-[10px] tracking-[0.42em]"
                : "mt-0.5 text-[8px] tracking-[0.34em]"
            }`}
          >
            COPPER ECOSYSTEM
          </span>
        )}
      </div>
    </div>
  );
}
