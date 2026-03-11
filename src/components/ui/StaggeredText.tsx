interface StaggeredTextProps {
  text: string;
  className?: string;
  baseDelay?: number;
}

export function StaggeredText({ text, className = "", baseDelay = 0.4 }: StaggeredTextProps) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split("").map((char, ci) => {
            const globalIndex = words.slice(0, wi).join(" ").length + (wi > 0 ? 1 : 0) + ci;
            return (
              <span
                key={ci}
                className="letter-animate inline-block"
                style={{
                  animationDelay: `${baseDelay + globalIndex * 0.04}s`,
                  color: "#F0F0F0",
                }}
                aria-hidden="true"
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
