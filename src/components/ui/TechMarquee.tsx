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
          borderTop: "1px solid #1e1e2e",
          borderBottom: "1px solid #1e1e2e",
          background: "rgba(18,18,26,0.3)",
          backdropFilter: "blur(8px)",
          padding: "1.5rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animationName: "marquee-scroll",
            animationDuration: "30s",
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
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#a1a1aa",
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              <span style={{ color: "rgba(0,212,255,0.5)", marginRight: "0.75rem" }}>
                &#x2022;
              </span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
