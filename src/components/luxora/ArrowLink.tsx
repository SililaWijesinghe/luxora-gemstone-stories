import { ArrowRight } from "lucide-react";

export function ArrowLink({
  children,
  href = "#",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.28em] text-accent transition-colors duration-500 hover:text-accent-soft focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:origin-left group-hover:scale-x-100" />
      </span>
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-accent/40 transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10">
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
