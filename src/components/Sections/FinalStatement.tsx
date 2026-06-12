import AtlasMark from "../Brand/AtlasMark";
import { finalStatement } from "../../data/transactionData";

const finalActions = ["Prepare LOI", "Open Data Room", "Generate Meeting Pack"];

export default function FinalStatement() {
  return (
    <section id="summary" className="px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <AtlasMark className="mx-auto h-14 w-14" />
        <p className="eyebrow mt-8">Executive Position</p>
        <blockquote className="mt-6 font-subheading text-2xl italic leading-relaxed text-ash-white/90 sm:text-3xl">
          “{finalStatement}”
        </blockquote>
        <div className="copper-rule mx-auto mt-10 max-w-md" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {finalActions.map((label, i) => (
            <button key={label} type="button" className={i === 0 ? "btn-copper" : "btn-ghost"}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
