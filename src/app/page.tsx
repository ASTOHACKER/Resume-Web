import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AIChatbot from "@/components/AIChatbot";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import NpxInstall from "@/components/NpxInstall";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Skills />
      <AIChatbot />
      <Terminal />
      <Contact />
      <NpxInstall />
    </main>
  );
}
