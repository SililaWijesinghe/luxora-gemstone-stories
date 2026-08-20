import { useState } from "react";
import { ArrowRight, Instagram, Twitter, Youtube } from "lucide-react";
import { footerColumns } from "./data";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer id="journal-footer" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <Reveal className="grid gap-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A digital maison of rare gemstones — sourced with conscience, cut with
              devotion, kept for generations.
            </p>

            <form
              className="mt-10 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setSent(true);
                setEmail("");
              }}
            >
              <label
                htmlFor="newsletter"
                className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground"
              >
                Private viewings & new arrivals
              </label>
              <div className="mt-4 flex items-center gap-3 border-b border-border pb-3 transition-colors duration-500 focus-within:border-accent">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSent(false);
                  }}
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-sm tracking-wide text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent/40 text-accent transition-all duration-500 hover:border-accent hover:bg-accent/10"
                >
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.2} />
                </button>
              </div>
              <p
                aria-live="polite"
                className="mt-3 h-4 text-[0.62rem] uppercase tracking-[0.28em] text-accent"
              >
                {sent ? "Welcome to the maison." : ""}
              </p>
            </form>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground">
                  {col.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#collection"
                        className="text-sm tracking-wide text-muted-foreground transition-colors duration-500 hover:text-accent"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
            © {new Date().getFullYear()} LUXORA Maison. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="text-muted-foreground transition-colors duration-500 hover:text-accent"
              >
                <Icon className="h-4 w-4" strokeWidth={1.2} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
            <a href="#home" className="transition-colors duration-500 hover:text-accent">
              Privacy
            </a>
            <a href="#home" className="transition-colors duration-500 hover:text-accent">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
