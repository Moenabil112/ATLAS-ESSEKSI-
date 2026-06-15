import { useTranslation } from "../i18n/useTranslation";

/**
 * Official ATLAS ISSEKSI horizontal logo (dark variant), used in the header.
 * The lockup (mark + wordmark + COPPER ECOSYSTEM) is the supplied brand asset
 * served from /public; its dark-earth background matches the header so it
 * blends seamlessly. The brand name stays Latin in all languages.
 */
export default function Logo() {
  const { t } = useTranslation();

  return (
    <a href="#snapshot" className="logo-lockup" aria-label={t("header.logoAlt")}>
      <img
        src="/brand/atlas-isseksi-header.svg"
        alt={t("header.logoAlt")}
        className="logo-img"
      />
    </a>
  );
}
