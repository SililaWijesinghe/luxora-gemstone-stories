import { useState } from "react";
import { Play, ArrowRight, X } from "lucide-react";
import heroVideo from "@/assets/heroBgVideo.mp4.asset.json";

export function Hero() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section id="home" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Layer 1 — overall midnight wash */}
      <div className="absolute inset-0 bg-background/45" aria-hidden="true" />
      {/* Layer 2 — left reading gradient */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in oklab, var(--background) 92%, transparent) 0%, color-mix(in oklab, var(--background) 62%, transparent) 38%, transparent 70%)",
        }}
      />
      {/* Layer 3 — vignette + bottom fade */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 45%, transparent 40%, color-mix(in oklab, var(--background) 85%, transparent) 100%), linear-gradient(to bottom, color-mix(in oklab, var(--background) 70%, transparent), transparent 28%, transparent 72%, var(--background))",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 md:px-10">
        <div className="max-w-xl">
          <p className="eyebrow rise-in" style={{ animationDelay: "200ms" }}>
            Timeless Gemstones
          </p>
          <h1
            className="display rise-in mt-8 text-[clamp(2.8rem,7.5vw,5.4rem)] text-foreground"
            style={{ animationDelay: "380ms" }}
          >
            Nature&rsquo;s
            <br />
            most precious
            <br />
            <em className="font-normal italic">light.</em>
          </h1>
          <p
            className="rise-in mt-8 max-w-sm text-sm leading-relaxed tracking-wide text-muted-foreground"
            style={{ animationDelay: "620ms" }}
          >
            Every gem holds a story.
            <br />
            Yours begins here.
          </p>
          <div className="rise-in mt-12" style={{ animationDelay: "820ms" }}>
            <a
              href="#collection"
              className="group inline-flex items-center gap-4 text-[0.66rem] uppercase tracking-[0.3em] text-accent transition-colors duration-500 hover:text-accent-soft"
            >
              <span className="relative">
                Explore the collection
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/40 transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Story indicator */}
      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
        <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">01</span>
        <span className="relative h-28 w-px bg-border">
          <span className="soft-pulse absolute left-1/2 top-2/3 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" />
        </span>
        <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">04</span>
      </div>

      <button
        type="button"
        onClick={() => setStoryOpen(true)}
        className="group absolute bottom-32 right-8 z-10 hidden items-center gap-4 md:flex"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full border border-border transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10">
          <Play className="h-3.5 w-3.5 text-foreground" strokeWidth={1.2} />
        </span>
        <span className="text-left text-[0.6rem] uppercase leading-4 tracking-[0.28em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
          Play
          <br />
          Story
        </span>
      </button>

      <a
        href="#values"
        className="absolute inset-x-0 bottom-10 z-10 mx-auto flex w-fit flex-col items-center gap-3 text-muted-foreground transition-colors duration-500 hover:text-foreground"
      >
        <span className="soft-pulse grid h-8 w-5 place-items-start rounded-full border border-border pt-1.5">
          <span className="mx-auto h-1.5 w-px bg-accent" />
        </span>
        <span className="text-[0.55rem] uppercase tracking-[0.32em]">Scroll to discover</span>
      </a>

      {storyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="LUXORA story film"
          className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close story"
            onClick={() => setStoryOpen(false)}
            className="absolute right-8 top-8 grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors duration-500 hover:border-accent hover:text-accent"
          >
            <X className="h-4 w-4" strokeWidth={1.2} />
          </button>
          <video
            className="max-h-[80vh] w-full max-w-4xl rounded-sm border border-border object-cover"
            src={heroVideo.url}
            autoPlay
            loop
            controls
            playsInline
          />
        </div>
      )}
    </section>
  );
}
