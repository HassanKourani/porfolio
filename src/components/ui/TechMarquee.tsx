const TECHS = [
  "React", "TypeScript", "JavaScript", "Tailwind CSS", "NestJS", "Node.js",
  "Redux", "Ant Design", "Cypress", "Jest", "RTL", "Firebase", "Supabase",
  "PostgreSQL", "Golang", "Git", "CI/CD", "HTML5", "CSS3", "Shadcn/UI",
];

export function TechMarquee() {
  const items = [...TECHS, ...TECHS];

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          borderTop: "1px solid #1E1E28",
          borderBottom: "1px solid #1E1E28",
          background: "rgba(17,17,22,0.5)",
          backdropFilter: "blur(8px)",
          padding: "1.25rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animationName: "marquee-scroll",
            animationDuration: "35s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {items.map((tech, i) => (
            <span
              key={i}
              style={{
                padding: "0 1.5rem",
                fontSize: "0.85rem",
                fontFamily: "'Space Mono', monospace",
                fontWeight: 400,
                color: "#6B7280",
                whiteSpace: "nowrap",
                userSelect: "none",
                letterSpacing: "0.02em",
              }}
            >
              <span style={{ color: "rgba(191,255,0,0.4)", marginRight: "0.75rem" }}>
                /
              </span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
