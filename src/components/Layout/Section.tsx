import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="px-6 py-16 sm:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-ash-white sm:text-3xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-3 max-w-3xl font-subheading text-lg italic text-ash-white/70 sm:text-xl">
            {intro}
          </p>
        )}
        <div className="copper-rule mt-6" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
