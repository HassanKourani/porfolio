interface StaggeredTextProps {
  text: string;
  className?: string;
  baseDelay?: number;
}

export function StaggeredText({ text, className = "", baseDelay = 0.4 }: StaggeredTextProps) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter-animate"
          style={{ animationDelay: `${baseDelay + i * 0.04}s` }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
