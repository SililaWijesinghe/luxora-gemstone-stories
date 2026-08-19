import { journeySteps } from "./data";
import { Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";

export function GemJourney() {
  return (
    <section id="explore" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-24 md:px-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] lg:py-32">
        <Reveal>
          <div className="max-w-sm">
            <p className="eyebrow">The Journey of a Gem</p>
            <h2 className="display mt-8 text-[clamp(2.2rem,4.4vw,3.4rem)] text-foreground">
              From Earth
              <br />
              to Eternity
            </h2>
            <p className="mt-8 text-sm leading-7 tracking-wide text-muted-foreground">
              Every gem journeys through time, nature, and human passion to become a
              timeless treasure.
            </p>
            <div className="mt-12">
              <ArrowLink href="#story">Explore the journey</ArrowLink>
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hairline absolute left-[9%] right-[9%] top-14 hidden h-px lg:block"
          />
          <div
            aria-hidden="true"
            className="hairline absolute bottom-10 left-7 top-10 hidden w-px lg:hidden sm:block"
            style={{ backgroundImage: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--accent) 40%, transparent), transparent)" }}
          />
          <ol className="relative grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-4 lg:gap-6">
            {journeySteps.map((step, i) => (
              <Reveal as="li" key={step.index} delay={i * 160}>
                <div className="flex items-start gap-6 lg:flex-col lg:items-center lg:text-center">
                  <span className="relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-full border border-border">
                    <img
                      src={step.image}
                      alt={step.title.join(" ")}
                      width={640}
                      height={640}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-105"
                    />
                  </span>
                  <div className="lg:mt-6">
                    <span className="text-[0.58rem] tracking-[0.3em] text-muted-foreground/70">
                      {step.index}
                    </span>
                    <h3 className="mt-3 text-[0.68rem] uppercase leading-5 tracking-[0.26em] text-foreground/90">
                      {step.title[0]}
                      <br className="hidden lg:block" />{" "}
                      {step.title[1]}
                    </h3>
                    <p className="mt-4 max-w-[15rem] text-xs leading-6 tracking-wide text-muted-foreground lg:mx-auto">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
