interface InfoCardProps {
  index?: number;
  title: string;
  body: string;
}

export default function InfoCard({ index, title, body }: InfoCardProps) {
  return (
    <div className="panel group p-6 transition-colors duration-200 hover:border-forge-glow/45">
      {index !== undefined && (
        <span className="font-subheading text-2xl italic text-copper-fire/70">
          {String(index).padStart(2, "0")}
        </span>
      )}
      <h3 className="mt-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-ash-white">
        {title}
      </h3>
      <div className="mt-3 h-px w-8 bg-copper-fire/50 transition-all duration-300 group-hover:w-14 group-hover:bg-forge-glow/70" />
      <p className="mt-3 font-body text-sm leading-relaxed text-ash-white/70">{body}</p>
    </div>
  );
}
