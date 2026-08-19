import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { navItems } from "./data";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-6 md:px-10">
        <a href="#home" aria-label="LUXORA home" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group relative inline-block py-1 text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            className="text-muted-foreground transition-colors duration-500 hover:text-accent"
          >
            <Search className="h-4 w-4" strokeWidth={1.2} />
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-all duration-500 hover:border-accent/60 hover:text-accent"
          >
            {open ? (
              <X className="h-4 w-4" strokeWidth={1.2} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.2} />
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border bg-background/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-6 py-5 md:px-10">
            <Search className="h-4 w-4 text-accent" strokeWidth={1.2} />
            <input
              autoFocus
              type="search"
              placeholder="Search gems, collections, stories"
              aria-label="Search the maison"
              className="w-full bg-transparent text-sm tracking-wide text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>
      )}

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-700 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Menu" className="mx-auto max-w-[1440px] px-6 py-8 md:px-10">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display block text-3xl text-foreground/90 transition-colors duration-500 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
