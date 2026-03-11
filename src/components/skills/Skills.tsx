import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { skillCategories, type Skill } from "../../data/skills";
import { categoryIcons } from "../ui/Icons";

const levelStyles: Record<Skill["level"], { bg: string; text: string; border: string }> = {
  expert: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30" },
  advanced: { bg: "bg-white/5", text: "text-text-primary", border: "border-border-subtle" },
  intermediate: { bg: "bg-white/3", text: "text-text-secondary", border: "border-border-subtle/50" },
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills"
        subtitle="Tools and technologies I work with"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, catIdx) => {
          const IconComponent = categoryIcons[category.icon];
          return (
            <ScrollReveal key={category.name} delay={catIdx * 80}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent/15 transition-all duration-300 h-full card-glow group">
                <div className="flex items-center gap-3 mb-5">
                  {IconComponent && (
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <IconComponent size={18} />
                    </div>
                  )}
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => {
                    const style = levelStyles[skill.level];
                    return (
                      <motion.span
                        key={skill.name}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${style.bg} ${style.text} ${style.border} cursor-default`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIdx * 0.08 + skillIdx * 0.04,
                          duration: 0.3,
                        }}
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgba(191,255,0,0.3)",
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={400}>
        <div className="flex justify-start gap-8 mt-10 text-xs text-text-muted font-mono">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-accent/30 border border-accent/50" />
            Expert
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-white/5 border border-border-subtle" />
            Advanced
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-white/3 border border-border-subtle/50" />
            Intermediate
          </span>
        </div>
      </ScrollReveal>
    </Section>
  );
}
