import { quotes } from "../data/quotes";

function QuoteItem({ line, film, year }) {
  return (
    <span className="mx-8 inline-flex items-baseline gap-3 whitespace-nowrap">
      <span className="font-script text-sm text-spotlight sm:text-base">
        “{line}”
      </span>
      <span className="text-xs uppercase tracking-[0.2em] text-marquee-dim">
        — {film}, {year}
      </span>
    </span>
  );
}

export default function QuoteMarquee() {
  // Duplicate the list so the CSS animation (translateX -50%) loops seamlessly.
  const loop = [...quotes, ...quotes];

  return (
    <div className="relative overflow-hidden border-y border-ash-dim/20 bg-charcoal py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-charcoal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-charcoal to-transparent" />
      <div className="flex w-max animate-marquee">
        {loop.map((q, i) => (
          <QuoteItem key={i} {...q} />
        ))}
      </div>
    </div>
  );
}
