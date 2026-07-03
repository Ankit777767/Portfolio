import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../data/projects";

function StackTag({ children }) {
  return (
    <span className="rounded-sm border border-ash-dim/40 px-2.5 py-1 text-[11px] uppercase tracking-wide text-ash">
      {children}
    </span>
  );
}

function ProjectLinks({ links }) {
  if (!links?.demo && !links?.github) return null;
  return (
    <div className="mt-6 flex gap-4">
      {links.demo && (
        <a
          href={links.demo}
          className="inline-flex items-center gap-1.5 font-script text-xs uppercase tracking-[0.15em] text-marquee hover:underline"
        >
          Live Demo <ArrowUpRight size={14} />
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          className="inline-flex items-center gap-1.5 font-script text-xs uppercase tracking-[0.15em] text-ash hover:text-spotlight"
        >
          Source <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative border border-ash-dim/25 bg-charcoal p-8 sm:p-10"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-4xl tracking-wide text-spotlight">
          {project.title}
        </h3>
        <span className="font-script text-xs uppercase tracking-[0.2em] text-marquee-dim">
          {project.year}
        </span>
      </div>

      <p className="mt-2 text-base text-marquee">{project.tagline}</p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ash">
        {project.description}
      </p>

      {/* Research papers get their own sub-list; regular projects skip this */}
      {project.papers && (
        <ul className="mt-6 space-y-4 border-t border-ash-dim/20 pt-6">
          {project.papers.map((paper) => (
            <li key={paper.title} className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-spotlight">
                  {paper.title}
                </span>
                <span
                  className={`rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-wide ${
                    paper.venue.startsWith("Published")
                      ? "bg-marquee/15 text-marquee"
                      : "bg-velvet/25 text-spotlight/80"
                  }`}
                >
                  {paper.venue}
                </span>
              </div>
              <p className="text-sm text-ash">{paper.subtitle}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <StackTag key={tech}>{tech}</StackTag>
        ))}
      </div>

      <ProjectLinks links={project.links} />
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-4xl tracking-wide text-marquee">
        Featured Work
      </h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <FeaturedCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
