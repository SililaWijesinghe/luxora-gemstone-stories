import { Reveal } from "./Reveal";

export function BrandStatement() {
  return (
    <section id="story" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 50%, color-mix(in oklab, var(--royal) 30%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-6 py-32 text-center md:px-10 lg:py-44">
        <Reveal>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-auto h-5 w-5 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
          >
            <path d="M12 2 20 9l-8 13L4 9Z" />
            <path d="M4 9h16M12 2 8.5 9 12 22M12 2l3.5 7L12 22" />
          </svg>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,4rem)] text-foreground">
            Not just a gem.
            <br />
            <em className="font-normal italic">A legacy.</em>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
