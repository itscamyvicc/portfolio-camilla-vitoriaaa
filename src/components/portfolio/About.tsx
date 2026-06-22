// About section — Confidant Profile.
import { SectionTitle } from "./Sectiontitle";

export function About() {
  return (
    <section id="about" className="border-b-2 border-primary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Sobre Mim">
          Quem sou eu?
        </SectionTitle>

        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div className="p5-card p-6">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-display uppercase tracking-widest text-primary">
                  Nome
                </dt>
                <dd className="text-lg font-semibold">Camilla Vitoria Silva</dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-primary">
                  Função
                </dt>
                <dd>Desenvolvedora de Sistemas</dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-primary">
                  Status
                </dt>
                <dd>Ativa</dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-primary">
                  Especialidade
                </dt>
                <dd>Desenvolvimento Web e Back-end</dd>
              </div>
            </dl>
          </div>

          <div className="p5-card p-8 text-base leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Sou apaixonada por transformar ideias em interfaces funcionais e
              experiências memoráveis. Acabo de terminar meus estudos em{" "}
              <span className="font-semibold text-foreground">
                Análise e Desenvolvimento de Sistemas
              </span>
              , e continuo mergulhando no universo do desenvolvimento web full-stack.
            </p>
            <p>
              Acredito que um bom código precisa ser claro,
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