import { Gem, Leaf, Heart, ShieldCheck } from "lucide-react";
import { brandValues } from "./data";
import { Reveal } from "./Reveal";

const icons = { gem: Gem, leaf: Leaf, heart: Heart, shield: ShieldCheck };

export function BrandValues() {
  return (
    <section id="values" className="relative border-y border-border bg-surface">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-px px-6 py-20 sm:grid-cols-2 md:px-10 lg:grid-cols-4 lg:py-24">
        {brandValues.map((value, i) => {
          const Icon = icons[value.icon];
          return (
            <Reveal key={value.index} delay={i * 120}>
              <div className="group relative h-full px-2 py-8 text-center transition-transform duration-700 ease-out hover:-translate-y-1 sm:px-8 lg:border-l lg:border-border lg:first:border-l-0">
                <span className="text-[0.58rem] tracking-[0.3em] text-muted-foreground/60">
                  {value.index}
                </span>
                <Icon
                  className="mx-auto mt-5 h-6 w-6 text-muted-foreground transition-colors duration-700 group-hover:text-accent"
                  strokeWidth={0.9}
                />
                <h3 className="mt-6 text-[0.68rem] uppercase leading-5 tracking-[0.26em] text-foreground/85 transition-colors duration-700 group-hover:text-foreground">
                  {value.title[0]}
                  <br />
                  {value.title[1]}
                </h3>
                <p className="mx-auto mt-4 max-w-[15rem] text-xs leading-6 tracking-wide text-muted-foreground">
                  {value.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
