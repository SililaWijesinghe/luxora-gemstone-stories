import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/luxora/Navbar";
import { Hero } from "@/components/luxora/Hero";
import { BrandValues } from "@/components/luxora/BrandValues";
import { FeaturedGem } from "@/components/luxora/FeaturedGem";
import { GemJourney } from "@/components/luxora/GemJourney";
import { BrandStatement } from "@/components/luxora/BrandStatement";
import { JournalFeature } from "@/components/luxora/JournalFeature";
import { Footer } from "@/components/luxora/Footer";

const title = "LUXORA — Rare Gemstones, Ethically Sourced";
const description =
  "A digital maison of rare gemstones. Discover sapphires, Paraíba tourmaline and imperial topaz, ethically sourced and masterfully cut.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <BrandValues />
        <FeaturedGem />
        <GemJourney />
        <BrandStatement />
        <JournalFeature />
      </main>
      <Footer />
    </div>
  );
}
