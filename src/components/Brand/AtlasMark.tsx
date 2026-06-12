interface AtlasMarkProps {
  className?: string;
}

/**
 * Abstract line mark inspired by the brand board:
 * Atlas mountain ridge over circuit nodes in copper geometry.
 */
export default function AtlasMark({ className = "h-10 w-10" }: AtlasMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Mountain ridge */}
      <path
        d="M6 40 L20 18 L28 30 L38 12 L52 36"
        stroke="#B87333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 40 L22 28 L27 36"
        stroke="#D4924A"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Circuit base line */}
      <path
        d="M6 48 H26 M34 48 H58"
        stroke="#B87333"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Circuit nodes */}
      <circle cx="30" cy="48" r="2.4" stroke="#D4924A" strokeWidth="1.4" />
      <circle cx="38" cy="12" r="2.2" stroke="#D4924A" strokeWidth="1.4" />
      <circle cx="52" cy="36" r="2" fill="#B87333" />
      <circle cx="6" cy="48" r="1.6" fill="#B87333" />
      <circle cx="58" cy="48" r="1.6" fill="#B87333" />
      {/* Vertical circuit drop */}
      <path d="M52 38 V46" stroke="#B87333" strokeWidth="1.2" />
    </svg>
  );
}
