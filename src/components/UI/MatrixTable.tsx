import type { GovernanceRow } from "../../data/transactionData";

interface MatrixTableProps {
  rows: GovernanceRow[];
}

export default function MatrixTable({ rows }: MatrixTableProps) {
  return (
    <div className="panel overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-copper-fire/25">
            <th className="px-5 py-4 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-forge-glow">
              Governance Area
            </th>
            <th className="px-5 py-4 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-forge-glow">
              Financial Partner
            </th>
            <th className="px-5 py-4 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-forge-glow">
              ProjectCo / Sponsor
            </th>
            <th className="px-5 py-4 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-forge-glow">
              Protected Status
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.area}
              className={`border-b border-ash-white/8 last:border-b-0 ${
                row.protectedRow ? "bg-atlas-stone/15" : ""
              }`}
            >
              <td className="px-5 py-4 font-heading text-xs font-semibold tracking-wide text-ash-white">
                {row.area}
              </td>
              <td className="px-5 py-4 font-body text-sm text-ash-white/75">{row.partner}</td>
              <td className="px-5 py-4 font-body text-sm text-ash-white/75">{row.sponsor}</td>
              <td className="px-5 py-4">
                <span
                  className={`font-body text-sm ${
                    row.protectedRow ? "font-medium text-forge-glow" : "text-ash-white/65"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
