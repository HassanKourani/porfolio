import { motion } from "framer-motion";
import { useTiltEffect } from "../../hooks/useTiltEffect";
import { GitHubIcon, ExternalLinkIcon } from "../ui/Icons";
import { ScrollReveal } from "../ui/ScrollReveal";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const typeBadgeColors: Record<Project["type"], string> = {
  Freelance: "bg-accent/10 text-accent border-accent/20",
  Personal: "bg-white/5 text-text-secondary border-border-subtle",
  Academic: "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/20",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, tilt, isHovering, handlers } = useTiltEffect(8);

  return (
    <ScrollReveal delay={index * 80}>
      <div
        ref={ref}
        {...handlers}
        className="relative rounded-2xl bg-bg-card border border-border-subtle overflow-hidden transition-all duration-300 h-full"
        style={{
          perspective: "1000px",
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: isHovering
            ? "0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(191,255,0,0.05)"
            : "none",
          transition: isHovering
            ? "box-shadow 0.3s ease"
            : "transform 0.5s ease, box-shadow 0.3s ease",
          borderColor: isHovering ? "rgba(191,255,0,0.15)" : undefined,
        }}
      >
        {/* Cursor glow on card */}
        {isHovering && (
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(191,255,0,0.15), transparent 50%)`,
            }}
          />
        )}

        {/* Accent top bar */}
        <div className="h-1 bg-accent/40" />

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-heading text-lg font-bold text-text-primary">
              {project.title}
            </h3>
            <span
              className={`text-xs font-mono px-2.5 py-1 rounded-lg border shrink-0 ${typeBadgeColors[project.type]}`}
            >
              {project.type}
            </span>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/3 text-text-muted border border-border-subtle/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-border-subtle">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors cursor-pointer"
              >
                <GitHubIcon size={15} />
                <span className="font-mono text-xs">Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors cursor-pointer"
              >
                <ExternalLinkIcon size={15} />
                <span className="font-mono text-xs">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
