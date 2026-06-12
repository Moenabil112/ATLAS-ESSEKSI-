import Section from "../Layout/Section";
import { partnerReceives, protectedItems } from "../../data/transactionData";

export default function SponsorProtection() {
  return (
    <Section
      id="protection"
      eyebrow="Section 05"
      title="Protected Architecture"
      intro="The financial partner receives ProjectCo economics — not protected strategic assets."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="panel p-6 sm:p-8">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-forge-glow">
            Partner Receives
          </h3>
          <div className="copper-rule mt-4" />
          <ul className="mt-6 space-y-3.5">
            {partnerReceives.map((item) => (
              <li key={item} className="flex gap-3 font-body text-sm text-ash-white/85">
                <span aria-hidden="true" className="mt-[7px] h-1 w-3 shrink-0 bg-forge-glow/70" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-stone p-6 sm:p-8">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ash-white/85">
            Protected / Not Transferred
          </h3>
          <div className="copper-rule mt-4" />
          <ul className="mt-6 space-y-3.5">
            {protectedItems.map((item) => (
              <li key={item} className="flex gap-3 font-body text-sm text-ash-white/75">
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 font-heading text-xs text-copper-fire"
                >
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 max-w-3xl font-subheading text-lg italic text-ash-white/65">
        Atlas Mining's license position, Akanil / HYRION technology, geological and strategic
        data, operating control, the sponsor position, and the future capital strategy remain
        outside the transaction perimeter.
      </p>
    </Section>
  );
}
