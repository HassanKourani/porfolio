export function HireBadge() {
  return (
    <div className="hire-badge-pulse inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card border border-accent-cyan/30 text-sm text-accent-cyan">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
      </span>
      Available for hire
    </div>
  );
}
