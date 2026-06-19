// Skills section — Persona Abilities cards.
import { SectionTitle } from "./Sectiontitle";

const skills = [
  { name: "HTML", level: "MAX" },
  { name: "CSS", level: "MAX" },
  { name: "JavaScript", level: "99" },
  { name: "PHP", level: "85" },
  { name: "Laravel", level: "80" },
  { name: "MySQL", level: "88" },
  { name: "Git", level: "92" },
  { name: "Next.js", level: "78" },
];

export function Skills() {
  return (
    <section id="skills" className="border-b-2 border-primary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Skill Tree">Persona Abilities</SectionTitle>

        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s, i) => (
            <li key={s.name} className="p5-card p-5">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xs uppercase tracking-widest text-primary">
                  No. {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xs font-bold text-muted-foreground">
                  Lv.{s.level}
                </span>
              </div>
              <p className="mt-3 font-display text-2xl font-black tracking-wide text-foreground">
                {s.name}
              </p>
              <div className="mt-3 h-1.5 w-full bg-secondary">
                <div
                  className="h-full bg-primary"
                  style={{
                    width:
                      s.level === "MAX"
                        ? "100%"
                        : `${Math.min(parseInt(s.level, 10), 100)}%`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}