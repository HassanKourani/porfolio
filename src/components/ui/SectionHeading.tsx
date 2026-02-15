import { GradientText } from "./GradientText";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <GradientText>{title}</GradientText>
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={100}>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal variant="line" delay={200}>
        <div className="w-20 h-0.5 bg-gradient-accent mx-auto mt-4 rounded-full" />
      </ScrollReveal>
    </div>
  );
}
