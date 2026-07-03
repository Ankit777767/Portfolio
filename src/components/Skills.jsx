import { motion } from "motion/react";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-4xl tracking-wide text-marquee">
        Skills
      </h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <h3 className="font-script text-xs uppercase tracking-[0.25em] text-marquee-dim">
              {group.label}
            </h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ash">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
