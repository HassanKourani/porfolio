import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-12 bg-accent/30" />
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            {title}
          </span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={100}>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
