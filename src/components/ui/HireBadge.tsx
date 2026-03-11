export function HireBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/20 text-sm font-mono text-accent">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      Open to work
    </div>
  );
}
