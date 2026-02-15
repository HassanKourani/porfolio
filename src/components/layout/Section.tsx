interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 md:px-8 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
