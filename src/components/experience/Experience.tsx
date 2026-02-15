import { useRef, useState, useEffect } from "react";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { TimelineItem } from "./TimelineItem";
import { experiences } from "../../data/experience";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.8;
      const end = windowH * 0.2;
      const total = rect.height + start - end;
      const scrolled = start - rect.top;
      setProgress(Math.min(Math.max(scrolled / total, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey so far"
      />

      <div ref={containerRef} className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border-subtle">
          <div
            className="absolute inset-x-0 top-0 bg-gradient-to-b from-accent-cyan to-accent-purple origin-top transition-transform duration-100"
            style={{ height: "100%", transform: `scaleY(${progress})` }}
          />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
