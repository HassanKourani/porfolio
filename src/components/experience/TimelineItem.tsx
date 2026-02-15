import { ScrollReveal } from "../ui/ScrollReveal";
import type { Experience } from "../../data/experience";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex md:items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
        <ScrollReveal variant="scale" delay={200}>
          <div
            className="w-4 h-4 rounded-full border-2"
            style={{
              borderColor: experience.accentColor,
              backgroundColor: `${experience.accentColor}33`,
              boxShadow: `0 0 12px ${experience.accentColor}40`,
            }}
          />
        </ScrollReveal>
      </div>

      {/* Spacer for layout */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />

      {/* Card */}
      <ScrollReveal
        variant={isLeft ? "left" : "right"}
        delay={100}
        className="ml-8 md:ml-0 w-full md:w-[calc(50%-2rem)]"
      >
        <div className="p-6 rounded-xl bg-bg-card border border-border-subtle hover:border-border-glow transition-all duration-300">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                {experience.role}
              </h3>
              <p
                className="font-medium"
                style={{ color: experience.accentColor }}
              >
                {experience.company}
              </p>
            </div>
            <span className="shrink-0 text-xs px-2.5 py-1 rounded-full border border-border-subtle text-text-muted">
              {experience.type}
            </span>
          </div>

          <p className="text-text-muted text-sm mb-4">
            {experience.startDate} — {experience.endDate} &middot;{" "}
            {experience.location}
          </p>

          <ul className="space-y-2 mb-4">
            {experience.description.map((item, i) => (
              <li
                key={i}
                className="text-text-secondary text-sm flex gap-2"
              >
                <span className="text-accent-cyan mt-1 shrink-0">&#8250;</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-white/5 text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
