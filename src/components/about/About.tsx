import { useRef, useEffect, useState } from "react";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { personal } from "../../data/personal";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About Me"
        subtitle="A quick overview of who I am and what I do"
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <ScrollReveal variant="left">
          <p className="text-text-secondary leading-relaxed text-lg">
            {personal.bio}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4">
          {personal.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="p-6 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/30 hover:-translate-y-1 transition-all duration-300 text-center glow-border">
                <div className="text-3xl font-bold text-gradient mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
