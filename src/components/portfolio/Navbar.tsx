"use client";

// Top navigation bar with anchor links to each section.
import { useState } from "react";

const links = [
  { href: "#hero", label: "Dossier" },
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Abilities" },
  { href: "#projects", label: "Missions" },
  { href: "#contact", label: "Calling Card" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-primary bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#hero" className="p5-skew">
          <span className="font-display text-2xl font-black tracking-wider text-primary">
            CAMILA<span className="text-foreground">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block p5-skew px-3 py-1.5 font-display text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          className="md:hidden p5-skew border-2 border-primary px-3 py-1 font-display text-sm font-bold text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-primary/40 bg-background px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block p5-skew px-3 py-2 font-display text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}