// About section — Confidant Profile.
import { SectionTitle } from "./sectiontitle";

export function About() {
  return (
    <section id="about" className="border-b-2 border-primary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Arcana · The Magician">
          Confidant Profile
        </SectionTitle>

        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div className="p5-card p-6">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-display uppercase tracking-widest text-primary">
                  Name
                </dt>
                <dd className="text-lg font-semibold">Camila</dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-primary">
                  Role
                </dt>
                <dd>Estudante de ADS</dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-primary">
                  Status
                </dt>
                <dd>Ativa · Disponível para missões</dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-primary">
                  Specialty
                </dt>
                <dd>Web Development & Backend</dd>
              </div>
            </dl>
          </div>

          <div className="p5-card p-8 text-base leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Sou apaixonada por transformar ideias em interfaces funcionais e
              experiências memoráveis. Atualmente estudo{" "}
              <span className="font-semibold text-foreground">
                Análise e Desenvolvimento de Sistemas
              </span>
              , mergulhando no universo do desenvolvimento web full-stack.
            </p>
            <p>
              Acredito que código bom é como um bom plano de assalto: claro,
              eficiente e elegante. Quando não estou programando, estou
              estudando novas tecnologias e jogando RPGs que inspiram meu
              próximo projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}