// lucide-react dropped brand/logo icons, and hand-copying logo paths from
// memory risks getting them wrong anyway — so social links get a small
// circular monogram badge instead. It also just fits the marquee-bulb
// motif better than a borrowed logo would.
const LABELS = {
  github: "GH",
  linkedin: "in",
  twitter: "X",
  letterboxd: "LB",
};

export default function SocialBadge({ platform, className = "" }) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-ash-dim text-[11px] font-semibold tracking-tight text-ash transition-colors group-hover:border-marquee group-hover:text-marquee ${className}`}
    >
      {LABELS[platform] ?? "?"}
    </span>
  );
}
