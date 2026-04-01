import { LANGUAGES } from "@/lib/constants";

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  const items = LANGUAGES.map(
    (l) => `${l.flag}  ${l.name}`
  ).join("   \u25C6   ");

  const content = `${items}   \u25C6   ${items}   \u25C6   `;

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={reverse ? "animate-ticker-reverse" : "animate-ticker"}
        style={{ width: "max-content" }}
      >
        <span className="inline-block font-display text-sm sm:text-base text-white/70 tracking-wide">
          {content}
        </span>
      </div>
    </div>
  );
}

export default function LanguageMarquee() {
  return (
    <section className="relative bg-navy-800 py-5 -my-3 z-10" style={{ transform: "rotate(-2deg) scaleX(1.05)" }}>
      <div className="flex flex-col gap-2.5">
        <TickerRow />
        <TickerRow reverse />
      </div>
    </section>
  );
}
