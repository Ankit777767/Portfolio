import { motion } from "motion/react";
import { profile } from "../data/profile";

// Small gold bulbs that chase around the marquee frame, each on its own
// animation delay so they read as "traveling" rather than blinking in sync.
function BulbRow({ count = 12, className = "" }) {
  return (
    <div className={`flex justify-between ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-marquee animate-bulb-chase"
          style={{ animationDelay: `${(i % 6) * 0.18}s` }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const fullName = `${profile.firstName} ${profile.lastName}`.trim();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Ambient spotlight sweep */}
      <div
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[140%] w-[60%] -translate-x-1/2 animate-spotlight rounded-full bg-marquee/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-3xl"
      >
        {/* Marquee frame */}
        <div className="border border-marquee/40 px-6 py-8 sm:px-10 sm:py-10">
          <BulbRow count={14} className="mb-6" />

          <p className="text-center font-script text-xs uppercase tracking-[0.35em] text-marquee">
            Now Showing
          </p>

          <h1 className="mt-3 text-center font-display text-6xl leading-none tracking-wide text-spotlight sm:text-8xl">
            {fullName || profile.firstName}
          </h1>

          <p className="mt-4 text-center text-sm uppercase tracking-[0.25em] text-ash sm:text-base">
            {profile.role}
          </p>

          <BulbRow count={14} className="mt-6" />
        </div>

        <p className="mt-6 text-center font-script text-sm uppercase tracking-[0.15em] text-ash-dim">
          {profile.slugline}
        </p>

        <p className="mx-auto mt-3 max-w-lg text-balance text-center text-base text-ash sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="rounded-sm bg-marquee px-6 py-3 font-script text-xs uppercase tracking-[0.2em] text-void transition-transform hover:scale-[1.03]"
          >
            View Projects
          </a>
          <a
            href={profile.resumeUrl}
            className="rounded-sm border border-ash-dim px-6 py-3 font-script text-xs uppercase tracking-[0.2em] text-spotlight transition-colors hover:border-marquee hover:text-marquee"
          >
            Download Résumé
          </a>
        </div>
      </motion.div>
    </section>
  );
}
