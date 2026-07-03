import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import SocialBadge from "./SocialBadge";

export default function Contact() {
  const socialLinks = Object.entries(profile.social).filter(([, url]) => url);

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-script text-xs uppercase tracking-[0.3em] text-marquee">
          Roll Credits
        </p>
        <h2 className="mt-3 font-display text-5xl tracking-wide text-spotlight sm:text-6xl">
          Let's Talk
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-ash">
          Open to Software Engineering and Data Science roles, and always up
          for a conversation about a good film.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-marquee px-8 py-3 font-script text-xs uppercase tracking-[0.2em] text-void transition-transform hover:scale-[1.03]"
        >
          <Mail size={16} /> {profile.email}
        </a>

        {socialLinks.length > 0 && (
          <div className="mt-8 flex justify-center gap-4">
            {socialLinks.map(([key, url]) => (
              <a key={key} href={url} aria-label={key} className="group">
                <SocialBadge platform={key} />
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
