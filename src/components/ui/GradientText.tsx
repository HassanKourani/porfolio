interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        color: "#BFFF00",
        textShadow: "0 0 30px rgba(191,255,0,0.2)",
      }}
    >
      {children}
    </span>
  );
}
