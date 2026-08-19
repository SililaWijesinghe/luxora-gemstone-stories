import { useState } from "react";
import { ChevronUp, ChevronDown, Gem as GemIcon } from "lucide-react";
import { gems } from "./data";
import { Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";

export function FeaturedGem() {
  const [active, setActive] = useState(0);
  const gem = gems[active]!;

  const move = (dir: 1 | -1) =>
    setActive((i) => (i + dir + gems.length) % gems.length);

  return (
    <section id="collection" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-all duration-[1600ms]"
        style={{
          background: `radial-gradient(70% 55% at 60% 50%, color-mix(in oklab, ${gem.glow} 18%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)_auto] lg:gap-12 lg:py-32">
        <Reveal>
          <div className="max-w-sm">
            <p className="eyebrow flex items-center gap-3">
              <GemIcon className="h-3.5 w-3.5 text-accent" strokeWidth={1} />
              Featured Gem
            </p>
            <h2 className="display mt-8 text-[clamp(2.4rem,4.6vw,3.6rem)] text-foreground">
              <span key={gem.id} className="rise-in block">
                {gem.name[0]}
                <br />
                {gem.name[1]}
              </span>
            </h2>
            <p
              key={`${gem.id}-desc`}
              className="rise-in mt-8 text-sm leading-7 tracking-wide text-muted-foreground"
              style={{ animationDelay: "120ms" }}
            >
              {gem.description}
            </p>
            <div className="mt-12">
              <ArrowLink href="#explore">Discover this gem</ArrowLink>
            </div>
          </div>
        </Reveal>

        {/* Museum display */}
        <Reveal delay={150}>
          <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
            <div
              aria-hidden="true"
              className="absolute inset-[6%] rounded-full border border-border/70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[6%] rounded-full transition-all duration-[1400ms]"
              style={{
                background: `radial-gradient(circle at 50% 45%, color-mix(in oklab, ${gem.glow} 26%, transparent), transparent 62%)`,
              }}
            />
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="soft-pulse absolute h-px w-px rounded-full bg-accent/70"
                style={{
                  left: `${12 + ((i * 37) % 76)}%`,
                  top: `${18 + ((i * 53) % 64)}%`,
                  animationDelay: `${i * 420}ms`,
                }}
              />
            ))}
            <div className="float-slow absolute inset-[14%] grid place-items-center">
              {gem.video ? (
                <video
                  key={gem.video}
                  className="h-full w-full object-contain"
                  src={gem.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  key={gem.image}
                  src={gem.image}
                  alt={`${gem.name.join(" ")} gemstone`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="rise-in h-full w-full object-contain mix-blend-screen"
                />
              )}
            </div>
            {/* pedestal */}
            <div
              aria-hidden="true"
              className="absolute bottom-[6%] left-1/2 h-10 w-[46%] -translate-x-1/2 rounded-[50%] border border-border bg-surface-deep/70 blur-[1px]"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-[10%] left-1/2 h-6 w-[34%] -translate-x-1/2 rounded-[50%] opacity-70 transition-all duration-[1400ms]"
              style={{ background: `radial-gradient(circle, ${gem.glow}, transparent 70%)` }}
            />
          </div>
        </Reveal>

        {/* Selector */}
        <Reveal delay={280}>
          <div className="flex items-center justify-center gap-4 lg:flex-col">
            <button
              type="button"
              aria-label="Previous gem"
              onClick={() => move(-1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-500 hover:border-accent/60 hover:text-accent"
            >
              <ChevronUp className="h-3.5 w-3.5 lg:rotate-0" strokeWidth={1.2} />
            </button>
            <ul className="flex gap-3 lg:flex-col">
              {gems.map((g, i) => (
                <li key={g.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show ${g.name.join(" ")}`}
                    aria-current={i === active}
                    className={`grid h-14 w-14 place-items-center overflow-hidden rounded-sm border transition-all duration-700 ${
                      i === active
                        ? "border-accent/70 opacity-100"
                        : "border-border opacity-55 hover:opacity-90"
                    }`}
                    style={{ backgroundColor: "var(--surface)" }}
                  >
                    <img
                      src={g.image}
                      alt=""
                      width={640}
                      height={640}
                      loading="lazy"
                      className="h-full w-full scale-110 object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Next gem"
              onClick={() => move(1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-500 hover:border-accent/60 hover:text-accent"
            >
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.2} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
