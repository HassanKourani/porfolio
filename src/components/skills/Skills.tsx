import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { skillCategories, type Skill } from "../../data/skills";
import { categoryIcons } from "../ui/Icons";

const levelColors: Record<Skill["level"], string> = {
  expert: "border-accent-cyan text-accent-cyan bg-accent-cyan/10",
  advanced: "border-accent-purple text-accent-purple bg-accent-purple/10",
  intermediate: "border-accent-pink text-accent-pink bg-accent-pink/10",
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Tools and technologies I work with"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIdx) => {
          const IconComponent = categoryIcons[category.icon];
          return (
            <ScrollReveal key={category.name} delay={catIdx * 100}>
              <div className="p-6 rounded-xl bg-bg-card border border-border-subtle hover:border-border-glow transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  {IconComponent && (
                    <IconComponent className="text-accent-cyan" size={22} />
                  )}
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border animate-float ${levelColors[skill.level]}`}
                      style={{
                        animationDelay: `${skillIdx * 0.3}s`,
                        animationDuration: `${3 + (skillIdx % 3) * 0.5}s`,
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={500}>
        <div className="flex justify-center gap-6 mt-10 text-xs text-text-muted">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent-cyan/30 border border-accent-cyan" />
            Expert
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent-purple/30 border border-accent-purple" />
            Advanced
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent-pink/30 border border-accent-pink" />
            Intermediate
          </span>
        </div>
      </ScrollReveal>
    </Section>
  );
}
