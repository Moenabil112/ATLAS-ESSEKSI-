import Section from "../Layout/Section";
import ProgressBar from "../UI/ProgressBar";
import { useOfFunds } from "../../data/transactionData";

export default function UseOfFunds() {
  return (
    <Section
      id="use-of-funds"
      eyebrow="Section 04"
      title="Use of Funds"
      intro="The USD 3.6M contribution is ring-fenced for the current Isseksi expansion phase."
    >
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="panel space-y-6 p-6 sm:p-8">
          {useOfFunds.map((item) => (
            <ProgressBar
              key={item.category}
              label={item.category}
              percent={item.allocation}
              amount={item.amount}
            />
          ))}
        </div>

        <div className="panel-stone overflow-hidden self-start">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-copper-fire/25">
                <th className="px-5 py-3.5 font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-forge-glow">
                  Category
                </th>
                <th className="px-5 py-3.5 text-right font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-forge-glow">
                  %
                </th>
                <th className="px-5 py-3.5 text-right font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-forge-glow">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {useOfFunds.map((item) => (
                <tr key={item.category} className="border-b border-ash-white/8 last:border-b-0">
                  <td className="px-5 py-3 font-body text-xs text-ash-white/80">{item.category}</td>
                  <td className="px-5 py-3 text-right font-heading text-xs font-semibold text-ash-white/70">
                    {item.allocation}%
                  </td>
                  <td className="px-5 py-3 text-right font-body text-xs text-forge-glow">
                    {item.amount}
                  </td>
                </tr>
              ))}
              <tr className="bg-verde-tech/20">
                <td className="px-5 py-3 font-heading text-xs font-bold uppercase tracking-wide text-ash-white">
                  Total
                </td>
                <td className="px-5 py-3 text-right font-heading text-xs font-bold text-ash-white">
                  100%
                </td>
                <td className="px-5 py-3 text-right font-heading text-xs font-bold text-forge-glow">
                  USD 3.6M
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
