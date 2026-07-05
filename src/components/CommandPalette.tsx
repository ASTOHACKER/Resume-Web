"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Keyboard, Sparkles, Moon, Sun, Volume2, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface CommandItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. Listen for global Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 2. Custom listener for navbar click triggers
  useEffect(() => {
    const handleOpenTrigger = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-command-palette", handleOpenTrigger);
    return () => window.removeEventListener("open-command-palette", handleOpenTrigger);
  }, []);

  // 3. Focus input on open
  useEffect(() => {
    if (isOpen) {
      // Brief delay to allow rendering
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll to account for navbar height
      const yOffset = -50;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = [
    {
      id: "about",
      category: "Navigation",
      title: "Jump to About",
      subtitle: "ประวัติส่วนตัวและความเป็นมา",
      shortcut: "G + A",
      icon: <ArrowRight size={14} />,
      action: () => scrollToSection("about"),
    },
    {
      id: "projects",
      category: "Navigation",
      title: "Jump to Projects",
      subtitle: "ผลงานการเขียนโค้ดและพัฒนาเว็บ",
      shortcut: "G + P",
      icon: <ArrowRight size={14} />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "education",
      category: "Navigation",
      title: "Jump to Education",
      subtitle: "ประวัติและลำดับการศึกษา",
      shortcut: "G + E",
      icon: <ArrowRight size={14} />,
      action: () => scrollToSection("education"),
    },
    {
      id: "experience",
      category: "Navigation",
      title: "Jump to Experience",
      subtitle: "ประสบการณ์ทำงานจริงและการฝึกงาน",
      shortcut: "G + X",
      icon: <ArrowRight size={14} />,
      action: () => scrollToSection("experience"),
    },
    {
      id: "skills",
      category: "Navigation",
      title: "Jump to Skills",
      subtitle: "ทักษะความรู้ทางเทคนิคและภาษา",
      shortcut: "G + S",
      icon: <ArrowRight size={14} />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "ai-assistant",
      category: "Navigation",
      title: "Jump to AI Assistant",
      subtitle: "พูดคุยถามข้อมูลกับผู้ช่วยอัจฉริยะ",
      shortcut: "G + C",
      icon: <Sparkles size={14} />,
      action: () => scrollToSection("ai-assistant"),
    },
    {
      id: "contact",
      category: "Navigation",
      title: "Jump to Contact",
      subtitle: "ช่องทางการติดต่อด่วนและโซเชียล",
      shortcut: "G + O",
      icon: <ArrowRight size={14} />,
      action: () => scrollToSection("contact"),
    },
    {
      id: "theme",
      category: "System",
      title: "Toggle Theme",
      subtitle: `สลับสีพื้นหลังหน้าเว็บ (ปัจจุบัน: ${theme === "light" ? "Light Mode" : "Dark Mode"})`,
      shortcut: "T",
      icon: theme === "light" ? <Moon size={14} /> : <Sun size={14} />,
      action: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      id: "soundtrack",
      category: "System",
      title: "Toggle Soundtrack",
      subtitle: "เปิด/ปิด เพลงประกอบแบ็คกราวด์",
      shortcut: "M",
      icon: <Volume2 size={14} />,
      action: () => {
        // Dispatch custom global event to toggle soundtrack inside AudioArchive.tsx
        window.dispatchEvent(new CustomEvent("toggle-soundtrack"));
        setIsOpen(false);
      },
    },
    {
      id: "clear",
      category: "System",
      title: "Clear Console",
      subtitle: "ล้างประวัติการรันใน Interactive Terminal",
      shortcut: "C",
      icon: <Keyboard size={14} />,
      action: () => {
        window.dispatchEvent(new CustomEvent("clear-terminal"));
        setIsOpen(false);
      },
    },
  ];

  // Filter commands based on search
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation inside list
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs no-print">
      <div 
        ref={containerRef}
        className="w-full max-w-lg bg-background border border-zinc-200 dark:border-zinc-800 rounded-none shadow-2xl flex flex-col max-h-[450px] overflow-hidden"
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <Search size={16} className="text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent border-none outline-none text-xs font-mono text-foreground placeholder-zinc-400"
          />
          <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono">
            [ESC to Close]
          </span>
        </div>

        {/* Commands List */}
        <div className="flex-1 overflow-y-auto py-2 divide-y divide-zinc-100 dark:divide-zinc-900 scrollbar-none">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors rounded-none cursor-pointer ${
                    isSelected 
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" 
                      : "text-zinc-600 dark:text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-zinc-400 ${isSelected ? "text-primary dark:text-primary-hover" : ""}`}>
                      {cmd.icon}
                    </span>
                    <div>
                      <div className="text-xs font-semibold tracking-tight">{cmd.title}</div>
                      <div className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-0.5">{cmd.subtitle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] tracking-wider uppercase bg-zinc-200/50 dark:bg-zinc-800/80 text-zinc-500 px-1.5 py-0.5 font-mono">
                      {cmd.category}
                    </span>
                    {cmd.shortcut && (
                      <kbd className="text-[9px] font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-900/50 px-1 border border-zinc-200 dark:border-zinc-800">
                        {cmd.shortcut}
                      </kbd>
                    )}
                  </div>
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs font-mono text-zinc-400">
              No matching archive records found.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
          <span>Use ↑↓ to navigate</span>
          <span>Press Enter to select</span>
        </div>
      </div>
    </div>
  );
}
