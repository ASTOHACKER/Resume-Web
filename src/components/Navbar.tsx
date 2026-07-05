"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          ? "bg-background/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center border-l border-t border-foreground">
              <span className="font-display font-black text-lg -mt-1 -ml-1">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-widest text-foreground uppercase">
                Narudom
              </span>
            </div>
          </div>

          {/* Desktop Nav Links - Centered & Minimal */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-widest font-medium transition-all ${
                    isActive
                      ? "text-primary dark:text-primary font-bold border-b border-primary dark:border-primary pb-0.5"
                      : "text-foreground hover:opacity-50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Utilities */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              className="px-2.5 py-1 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-[9px] font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Open command palette"
            >
              <span>Search</span>
              <kbd className="text-[8px] bg-zinc-100 dark:bg-zinc-900/50 px-1 border border-zinc-200 dark:border-zinc-800">Ctrl+K</kbd>
            </button>

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
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Open search"
            >
              <Search size={18} />
            </button>
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

      {/* Mobile Menu with Framer Motion slide-down */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden glass-panel border-t border-slate-200/10 mt-2 py-4 px-4 space-y-3 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-xs font-mono uppercase tracking-widest transition-all ${
                    isActive
                      ? "text-primary dark:text-primary font-bold pl-2 border-l border-primary"
                      : "text-slate-700 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
