import Section from "../Layout/Section";
import ProgressBar from "../UI/ProgressBar";
import { useTranslation } from "../../i18n/LanguageContext";

export default function UseOfFunds() {
  const { t } = useTranslation();
  const { eyebrow, title, intro, headers, items, totalLabel, totalAmount } = t.useOfFunds;

  return (
    <Section id="use-of-funds" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="panel space-y-6 p-6 sm:p-8">
          {items.map((item) => (
            <ProgressBar
              key={item.category}
              label={item.category}
              percent={item.allocation}
              amount={item.amount}
            />
          ))}
        </div>

        <div className="panel-stone overflow-hidden self-start">
          <table className="w-full border-collapse text-start">
            <thead>
              <tr className="border-b border-copper-fire/25">
                <th className="px-5 py-3.5 text-start font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-forge-glow">
                  {headers.category}
                </th>
                <th className="px-5 py-3.5 text-end font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-forge-glow">
                  {headers.percent}
                </th>
                <th className="px-5 py-3.5 text-end font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-forge-glow">
                  {headers.amount}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.category} className="border-b border-ash-white/8 last:border-b-0">
                  <td className="px-5 py-3 text-start font-body text-xs text-ash-white/80">
                    {item.category}
                  </td>
                  <td className="px-5 py-3 text-end font-heading text-xs font-semibold text-ash-white/70">
                    {item.allocation}%
                  </td>
                  <td className="px-5 py-3 text-end font-body text-xs text-forge-glow">
                    {item.amount}
                  </td>
                </tr>
              ))}
              <tr className="bg-verde-tech/20">
                <td className="px-5 py-3 text-start font-heading text-xs font-bold uppercase tracking-wide text-ash-white">
                  {totalLabel}
                </td>
                <td className="px-5 py-3 text-end font-heading text-xs font-bold text-ash-white">
                  100%
                </td>
                <td className="px-5 py-3 text-end font-heading text-xs font-bold text-forge-glow">
                  {totalAmount}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
