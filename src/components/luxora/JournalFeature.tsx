import journalImage from "@/assets/journal.jpg";
import { Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";

export function JournalFeature() {
  return (
    <section id="journal" className="bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:py-32">
        <Reveal>
          <article className="group grid grid-cols-1 overflow-hidden rounded-sm border border-border bg-surface transition-colors duration-700 hover:border-accent/30 lg:grid-cols-2">
            <div className="order-2 flex flex-col justify-center gap-8 p-10 lg:order-1 lg:p-16">
              <p className="eyebrow">Journal</p>
              <h2 className="display text-[clamp(2rem,3.8vw,3rem)] text-foreground">
                The Art of
                <br />
                Timeless Beauty
              </h2>
              <p className="max-w-sm text-sm leading-7 tracking-wide text-muted-foreground">
                Discover stories of gems, craftsmanship, and the passion behind every
                creation.
              </p>
              <ArrowLink href="#journal">Read the journal</ArrowLink>
            </div>
            <div className="relative order-1 min-h-[18rem] overflow-hidden lg:order-2">
              <img
                src={journalImage}
                alt="A jeweller inspecting a violet gemstone with tweezers"
                width={1408}
                height={912}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.02]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, var(--surface), color-mix(in oklab, var(--surface) 30%, transparent) 45%, transparent)",
                }}
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
