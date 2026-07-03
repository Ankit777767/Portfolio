// The site's signature motif: every major section is a "frame" on a reel,
// so the divider between sections literally looks like film stock —
// sprocket holes plus an act number. Structure = content here, not decoration.

function Sprockets() {
  const holes = Array.from({ length: 24 });
  return (
    <div className="flex justify-between px-2">
      {holes.map((_, i) => (
        <span
          key={i}
          className="h-2 w-1.5 rounded-[1px] bg-ash-dim/40"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function FilmStripDivider({ act, title }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-2" aria-hidden="true">
      <Sprockets />
      <div className="flex items-center gap-4 py-3">
        <span className="font-display text-2xl tracking-wider text-marquee">
          {act}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-ash-dim/60 to-transparent" />
        <span className="font-script text-xs uppercase tracking-[0.3em] text-ash">
          {title}
        </span>
      </div>
      <Sprockets />
    </div>
  );
}
