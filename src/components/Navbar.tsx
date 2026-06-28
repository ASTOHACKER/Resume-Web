"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Code } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = useMemo(() => [
    { name: "เกี่ยวกับฉัน", href: "#about" },
    { name: "โปรเจกต์", href: "#projects" },
    { name: "การศึกษา", href: "#education" },
    { name: "ประสบการณ์", href: "#experience" },
    { name: "ทักษะ", href: "#skills" },
    { name: "ผู้ช่วย AI", href: "#ai-assistant" },
    { name: "ติดต่อ", href: "#contact" },
  ], []);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300 no-print"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 border-2 border-foreground flex items-center justify-center rotate-0 transition-transform duration-300">
              <span className="font-display font-black text-lg">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tighter text-foreground">
                NARUDOM
              </span>
              <span className="text-[9px] font-medium tracking-[0.2em] uppercase opacity-70">
                Studio
              </span>
            </div>
          </div>

          {/* Desktop Nav Links - Centered & Minimal */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-widest font-medium text-foreground hover:opacity-50 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Utilities */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-200/10 mt-2 py-4 px-4 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
