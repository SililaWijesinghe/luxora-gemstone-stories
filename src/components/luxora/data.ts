import gemSapphire from "@/assets/gem-sapphire.jpg";
import gemCyan from "@/assets/gem-cyan.jpg";
import gemPink from "@/assets/gem-pink.jpg";
import gemAmber from "@/assets/gem-amber.jpg";
import journey1 from "@/assets/journey-1.jpg";
import journey2 from "@/assets/journey-2.jpg";
import journey3 from "@/assets/journey-3.jpg";
import journey4 from "@/assets/journey-4.jpg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "Explore", href: "#explore" },
  { label: "Story", href: "#story" },
  { label: "Journal", href: "#journal" },
];

export const brandValues = [
  {
    index: "01",
    icon: "gem" as const,
    title: ["Exceptional", "Quality"],
    body: "Handpicked gems, certified for purity and brilliance.",
  },
  {
    index: "02",
    icon: "leaf" as const,
    title: ["Ethical &", "Sustainable"],
    body: "Responsibly sourced with respect for people and planet.",
  },
  {
    index: "03",
    icon: "heart" as const,
    title: ["Timeless", "Design"],
    body: "Blending heritage craftsmanship with modern elegance.",
  },
  {
    index: "04",
    icon: "shield" as const,
    title: ["Trust &", "Transparency"],
    body: "Complete transparency from origin to your hands.",
  },
];

export type Gem = {
  id: string;
  name: [string, string];
  description: string;
  image: string;
  /** Optional video source — drop a URL here and the showcase plays it instead. */
  video?: string;
  glow: string;
  swatch: string;
};

export const gems: Gem[] = [
  {
    id: "twilight-sapphire",
    name: ["Twilight", "Sapphire"],
    description:
      "A rare fusion of deep ocean mystique and celestial violet. One of a kind. Like you.",
    image: gemSapphire,
    glow: "oklch(0.55 0.22 268)",
    swatch: "#2B44C9",
  },
  {
    id: "lagoon-paraiba",
    name: ["Lagoon", "Paraíba"],
    description:
      "Electric Caribbean light captured in crystal. Luminous, rare, unmistakably alive.",
    image: gemCyan,
    glow: "oklch(0.72 0.15 196)",
    swatch: "#19C6D6",
  },
  {
    id: "rose-padparadscha",
    name: ["Rose", "Padparadscha"],
    description:
      "The colour of a sunset lotus. Warm, tender, and impossibly scarce in nature.",
    image: gemPink,
    glow: "oklch(0.7 0.16 18)",
    swatch: "#E0708A",
  },
  {
    id: "imperial-topaz",
    name: ["Imperial", "Topaz"],
    description:
      "Molten amber light held still. A stone of quiet authority and old-world warmth.",
    image: gemAmber,
    glow: "oklch(0.75 0.16 65)",
    swatch: "#D9902F",
  },
];

export const journeySteps = [
  {
    index: "01",
    title: ["Natural", "Origin"],
    body: "Formed deep within the Earth over millions of years.",
    image: journey1,
  },
  {
    index: "02",
    title: ["Carefully", "Selected"],
    body: "Expert gemologists handpick only the finest stones.",
    image: journey2,
  },
  {
    index: "03",
    title: ["Masterfully", "Crafted"],
    body: "Precision cutting brings out the gem's true brilliance.",
    image: journey3,
  },
  {
    index: "04",
    title: ["Yours", "Forever"],
    body: "Delivered with trust to be treasured for generations.",
    image: journey4,
  },
];

export const footerColumns = [
  {
    title: "Collection",
    links: ["All Gems", "Rings", "Necklaces", "Earrings", "Custom Creations"],
  },
  {
    title: "Company",
    links: ["Our Story", "Ethics", "Craftsmanship", "Sustainability", "Contact"],
  },
  {
    title: "Support",
    links: ["FAQ", "Shipping", "Returns", "Care Guide", "Size Guide"],
  },
];
