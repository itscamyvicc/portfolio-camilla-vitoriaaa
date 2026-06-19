// Contact section — Calling Card.
import { SectionTitle } from "./Sectiontitle";

const contacts = [
  {
    label: "GitHub",
    handle: "@camila",
    href: "https://github.com",
  },
  {
    label: "LinkedIn",
    handle: "/in/camila",
    href: "https://linkedin.com",
  },
  {
    label: "Email",
    handle: "camila@example.com",
    href: "mailto:camila@example.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Take Your Heart">Calling Card</SectionTitle>

        <div className="p5-card relative p-8 sm:p-12">
          <p className="max-w-2xl font-display text-xl font-bold uppercase leading-tight tracking-wide sm:text-2xl">
            "Para quem busca uma desenvolvedora dedicada — eu, Camila, irei
            roubar seus bugs e devolver seu projeto com o coração no lugar.
            Aguardem-me."
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-2 border-primary bg-background p-4 transition-all hover:-translate-y-1 hover:bg-primary"
                >
                  <span className="block font-display text-xs uppercase tracking-[0.25em] text-primary group-hover:text-primary-foreground">
                    {c.label}
                  </span>
                  <span className="mt-1 block truncate font-display text-lg font-bold text-foreground group-hover:text-primary-foreground">
                    {c.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-right font-display text-sm uppercase tracking-[0.3em] text-primary">
            — Phantom Thieves
          </p>
        </div>
      </div>
    </section>
  );
}