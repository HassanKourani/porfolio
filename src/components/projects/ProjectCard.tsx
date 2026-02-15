import { useTiltEffect } from "../../hooks/useTiltEffect";
import { GitHubIcon, ExternalLinkIcon } from "../ui/Icons";
import { ScrollReveal } from "../ui/ScrollReveal";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const typeBadgeColors: Record<Project["type"], string> = {
  Freelance: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
  Personal: "bg-accent-purple/10 text-accent-purple border-accent-purple/30",
  Academic: "bg-accent-pink/10 text-accent-pink border-accent-pink/30",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, tilt, isHovering, handlers } = useTiltEffect(10);

  return (
    <ScrollReveal delay={index * 100}>
      <div
        ref={ref}
        {...handlers}
        className="relative rounded-xl bg-bg-card border border-border-subtle overflow-hidden transition-all duration-300 h-full"
        style={{
          perspective: "1000px",
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: isHovering
            ? "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(0,212,255,0.1)"
            : "none",
          transition: isHovering
            ? "box-shadow 0.3s ease"
            : "transform 0.5s ease, box-shadow 0.3s ease",
          borderColor: isHovering ? "rgba(0,212,255,0.2)" : undefined,
        }}
      >
        {/* Cursor glow on card */}
        {isHovering && (
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(0,212,255,0.3), transparent 50%)`,
            }}
          />
        )}

        {/* Gradient header */}
        <div className="h-2 bg-gradient-accent" />

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-text-primary">
              {project.title}
            </h3>
            <span
              className={`text-xs px-2.5 py-1 rounded-full border shrink-0 ${typeBadgeColors[project.type]}`}
            >
              {project.type}
            </span>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-text-muted border border-border-subtle"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors"
              >
                <GitHubIcon size={16} />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors"
              >
                <ExternalLinkIcon size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
