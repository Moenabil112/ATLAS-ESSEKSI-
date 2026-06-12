interface AtlasMarkProps {
  className?: string;
}

/**
 * ATLAS ISSEKSI brand mark: copper mountain geometry with circuit nodes —
 * diamond peak with node eye, twin slopes, and circuit-terminal base lines.
 * Redrawn as vector from the official brand logo.
 */
export default function AtlasMark({ className = "h-10 w-10" }: AtlasMarkProps) {
  return (
    <svg viewBox="0 0 150 100" fill="none" className={className} aria-hidden="true">
      <g stroke="#D4924A" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        {/* Diamond peak with node eye */}
        <path d="M53 8 L75 30 L53 52 L31 30 Z" />
        <circle cx="53" cy="30" r="5" strokeWidth="5" />
        {/* Left slope to base with circuit terminal */}
        <path d="M38 45 L8 86 H24" />
        <circle cx="33" cy="86" r="5" strokeWidth="5" />
        {/* Inner-left slope with node */}
        <path d="M46 59 L37 71" />
        <circle cx="33" cy="78" r="5" strokeWidth="5" />
        {/* Middle triangle */}
        <path d="M60 62 L46 86 H74 Z" />
        {/* Right peak with stepped circuit line */}
        <path d="M80 60 L101 32 L134 86 H116" />
        <circle cx="107" cy="86" r="5" strokeWidth="5" />
        <path d="M101 50 V66" />
        <circle cx="101" cy="74" r="5" strokeWidth="5" />
      </g>
    </svg>
  );
}
