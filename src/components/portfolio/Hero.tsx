// Hero section — Phantom Thief Dossier intro card.
export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b-2 border-primary"
    >
      {/* Diagonal red accent strips */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-30deg, transparent 0 60px, oklch(0.55 0.24 27 / 0.15) 60px 62px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 -skew-x-12 bg-primary/10"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center gap-6 px-4 py-20">
        <span className="p5-tag w-fit">Top Secret · 01</span>

        <h1 className="p5-title text-4xl sm:text-5xl md:text-7xl">
          Phantom Thief Dossier
        </h1>

        <div className="flex flex-col gap-1">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            Codename
          </span>
          <p className="font-display text-6xl font-black leading-none tracking-tight text-foreground sm:text-7xl md:text-8xl">
            CAMILA
          </p>
        </div>

        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Estudante de{" "}
          <span className="font-semibold text-foreground">
            Análise e Desenvolvimento de Sistemas
          </span>
          . Roubando bugs, deixando código limpo. Bem-vindo ao meu metaverso
          digital.
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a href="#projects" className="p5-btn">
            <span>View Mission Log →</span>
          </a>
          <a
            href="#contact"
            className="p5-skew border-2 border-foreground px-6 py-3 font-display font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Calling Card
          </a>
        </div>
      </div>
    </section>
  );
}