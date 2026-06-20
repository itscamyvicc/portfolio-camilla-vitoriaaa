// Projects section — Mission Log.
import { SectionTitle } from "./Sectiontitle";

const missions = [
  {
    code: "Missão-001",
    name: "PetCare",
    description:
      "Aplicação web para gerenciamento de tarefas com autenticação e categorias, construída em Laravel + MySQL.",
    tags: ["PHP", "Laravel", "MySQL"],
  },
  {
    code: "Missão-002",
    name: "Meu Portfólio - Edição P5R",
    description:
      "Site institucional responsivo com design moderno, animações sutis e CMS leve para atualização de conteúdo.",
    tags: ["Next.js", "React", "CSS"],
  },
  {
    code: "Missão-003",
    name: "Controle de Validade Documental",
    description:
      "Trabalho de conclusão de curso para controle de validade documental, utilizando HTML e CSS para design e layout do projeto.",
    tags: ["JavaScript", "HTML", "Firebase", "CSS", ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-b-2 border-primary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Operations">Log de Missões</SectionTitle>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {missions.map((m) => (
            <article key={m.code} className="p5-card flex flex-col p-6">
              <header className="mb-4 flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-primary">
                  {m.code}
                </span>
                <span className="p5-tag">Completo</span>
              </header>

              <h3 className="font-display text-2xl font-black uppercase leading-tight">
                {m.name}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {m.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-primary/60 px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}