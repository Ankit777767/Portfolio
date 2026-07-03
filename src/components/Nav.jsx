import { useEffect, useState } from "react";
import { Film } from "lucide-react";
import { profile } from "../data/profile";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#cast", label: "Cast" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-void/85 backdrop-blur-md border-b border-ash-dim/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2 text-spotlight">
          <Film size={18} className="text-marquee" strokeWidth={1.75} />
          <span className="font-display text-lg tracking-widest">
            {profile.firstName.toUpperCase()}
          </span>
        </a>

        <ul className="hidden gap-8 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-script text-xs uppercase tracking-[0.2em] text-ash transition-colors hover:text-marquee"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          className="rounded-sm border border-marquee/60 px-4 py-1.5 font-script text-xs uppercase tracking-[0.2em] text-marquee transition-colors hover:bg-marquee hover:text-void"
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}
