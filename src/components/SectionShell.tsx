import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function SectionShell({
  id,
  title,
  subtitle,
  eyebrow,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="section-shell">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-rule" />
      {children}
    </section>
  );
}
