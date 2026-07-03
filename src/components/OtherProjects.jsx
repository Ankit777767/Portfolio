import { motion } from "motion/react";
import { otherProjects } from "../data/projects";

export default function OtherProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-4xl tracking-wide text-marquee">
        More Projects
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {otherProjects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border border-ash-dim/25 p-6 transition-colors hover:border-marquee/50"
          >
            <h3 className="font-display text-2xl tracking-wide text-spotlight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-marquee">{project.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-ash">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-ash-dim/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-ash"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
