import Navbar from "@/components/Navbar";
import FadeInView from "@/components/FadeInView";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AIChatbot from "@/components/AIChatbot";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import SpotlightBg from "@/components/SpotlightBg";
import FloatingActions from "@/components/FloatingActions";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Spotlight mouse cursor background effect */}
      <SpotlightBg />

      {/* Floating Speed Dial actions */}
      <FloatingActions />

      {/* Navigation */}
      <Navbar />

      {/* Main Resume Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-spacing print-container">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />

        {/* Projects Showcase - Editorial Layout */}
        <Projects />

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-16">
          <Education />
          <Experience />
        </div>

        {/* Skills */}
        <Skills />

        {/* Interactive Sections (Hidden on Print) */}
        <div className="no-print space-y-16">
            <AIChatbot />
            <Terminal />
        </div>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200/50 dark:border-zinc-800/50 bg-slate-50 dark:bg-zinc-950/20 text-center no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-zinc-500 space-y-2">
          <p>© {new Date().getFullYear()} Narudom O-kart. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Build with <Heart size={10} className="text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

