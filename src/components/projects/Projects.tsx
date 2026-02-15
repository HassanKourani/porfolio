import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Some of the things I've built"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
