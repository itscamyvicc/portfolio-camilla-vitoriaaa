import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Navbar } from "@/components/portfolio/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t-2 border-primary py-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} Camilla Vitoria Silva — Gonna Take Your Heart.
      </footer>
    </main>
  );
}