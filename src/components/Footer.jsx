import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ash-dim/20 px-6 py-8 text-center">
      <p className="font-script text-[11px] uppercase tracking-[0.2em] text-ash-dim">
        © {year} {profile.firstName} {profile.lastName} · Built with React,
        Tailwind CSS &amp; Motion
      </p>
    </footer>
  );
}
