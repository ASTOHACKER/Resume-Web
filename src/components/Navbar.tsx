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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? "py-3 glass-panel shadow-lg"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-105">
              <Code size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-zinc-50">
                NARUDOM
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-indigo-500 uppercase">
                Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                }`}
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
