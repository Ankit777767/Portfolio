import { motion } from "motion/react";
import { lead, supporting } from "../data/influences";

export default function Influences() {
  return (
    <section id="cast" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-4xl tracking-wide text-marquee">
        Cast &amp; Influences
      </h2>
      <p className="mt-2 max-w-xl text-sm text-ash">
        The performances and filmmakers that shaped how I think about craft —
        on screen and in code.
      </p>

      {/* Lead billing */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mt-8 border border-marquee/30 bg-charcoal p-8"
      >
        <p className="font-script text-xs uppercase tracking-[0.3em] text-marquee">
          Lead
        </p>
        <h3 className="mt-2 font-display text-4xl tracking-wide text-spotlight">
          {lead.name}
        </h3>
        <p className="text-sm text-ash">{lead.role}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-spotlight/90">
          {lead.note}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {lead.works.map((w) => (
            <span
              key={w}
              className="rounded-sm border border-ash-dim/40 px-2.5 py-1 text-[11px] text-ash"
            >
              {w}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Supporting cast */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {supporting.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border border-ash-dim/25 p-5"
          >
            <p className="font-script text-[10px] uppercase tracking-[0.25em] text-ash-dim">
              Supporting
            </p>
            <h4 className="mt-1 font-display text-2xl tracking-wide text-spotlight">
              {person.name}
            </h4>
            <p className="text-xs uppercase tracking-wide text-marquee-dim">
              {person.role}
            </p>
            <p className="mt-3 text-sm text-ash">{person.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
