import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import type { Experience } from "../../data/experience";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <div className="relative flex gap-8 pl-4 md:pl-8">
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-[25px] top-8 z-10">
        <ScrollReveal variant="scale" delay={200}>
          <div
            className="w-3 h-3 rounded-full bg-accent"
            style={{
              boxShadow: "0 0 12px rgba(191,255,0,0.4), 0 0 4px rgba(191,255,0,0.8)",
            }}
          />
        </ScrollReveal>
      </div>

      {/* Card */}
      <ScrollReveal delay={index * 80} className="w-full ml-6 md:ml-8">
        <motion.div
          className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent/15 transition-all duration-300 card-glow"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                {experience.role}
              </h3>
              <p className="text-accent font-medium text-sm">
                {experience.company}
              </p>
            </div>
            <span className="shrink-0 text-xs font-mono px-3 py-1 rounded-lg bg-accent/5 text-accent/70 border border-accent/10">
              {experience.type}
            </span>
          </div>

          <p className="text-text-muted text-sm font-mono mb-4">
            {experience.startDate} — {experience.endDate} &middot;{" "}
            {experience.location}
          </p>

          <ul className="space-y-2 mb-5">
            {experience.description.map((item, i) => (
              <li
                key={i}
                className="text-text-secondary text-sm flex gap-3 leading-relaxed"
              >
                <span className="text-accent/50 mt-1.5 shrink-0 text-[8px]">&#9632;</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/3 text-text-muted border border-border-subtle/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </ScrollReveal>
    </div>
  );
}
