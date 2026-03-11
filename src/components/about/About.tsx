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
        title="About"
        subtitle="A quick overview of who I am"
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Bio - takes 3 cols */}
        <ScrollReveal className="lg:col-span-3">
          <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle h-full">
            <p className="text-text-secondary leading-relaxed text-lg">
              {personal.bio}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border-subtle" />
              <span className="font-mono text-xs text-accent/60">
                Based in {personal.location.split("(")[0].trim()}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats bento - takes 2 cols */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {personal.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent/20 transition-all duration-300 text-center card-glow cursor-default group">
                <div className="font-heading text-4xl font-black text-accent mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-muted text-sm font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
