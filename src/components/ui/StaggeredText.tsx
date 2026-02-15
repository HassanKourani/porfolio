interface StaggeredTextProps {
  text: string;
  className?: string;
  baseDelay?: number;
  gradient?: boolean;
}

const gradientStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export function StaggeredText({ text, className = "", baseDelay = 0.4, gradient }: StaggeredTextProps) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter-animate"
          style={{
            animationDelay: `${baseDelay + i * 0.04}s`,
            ...(gradient ? gradientStyle : {}),
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
