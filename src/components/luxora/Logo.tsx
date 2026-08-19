export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M12 1.5 14.4 9.6 22.5 12l-8.1 2.4L12 22.5 9.6 14.4 1.5 12l8.1-2.4Z" />
      </svg>
      <span className="font-sans text-sm uppercase tracking-[0.42em] text-foreground">
        Luxora
      </span>
    </span>
  );
}
