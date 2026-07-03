import { motion } from "motion/react";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-[1fr_2fr] sm:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl tracking-wide text-marquee">
            About
          </h2>
          <p className="mt-2 font-script text-xs uppercase tracking-[0.2em] text-ash">
            {profile.location}
          </p>

          <div className="mt-6 border-l-2 border-velvet pl-4">
            <p className="text-sm font-medium text-spotlight">
              {profile.education.school}
            </p>
            <p className="mt-1 text-sm text-ash">{profile.education.degree}</p>
            <p className="mt-1 text-sm text-ash-dim">
              {profile.education.years} · {profile.education.detail}
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-lg leading-relaxed text-ash whitespace-pre-line"
        >
          {profile.bio}
        </motion.p>
      </div>
    </section>
  );
}
