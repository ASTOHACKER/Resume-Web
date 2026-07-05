"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FolderGit2, Sparkles, Server, CheckCircle2, Layout, Layers } from "lucide-react";

interface ProjectDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    type: string;
    desc: string;
    tech: string[];
    github: string;
    demoDetails: {
      screens: { name: string; desc: string }[];
      architecture: string;
      features: string[];
    };
  } | null;
}

export default function ProjectDemoModal({ isOpen, onClose, project }: ProjectDemoModalProps) {
  const [activeTab, setActiveTab] = useState<"screens" | "features" | "architecture">("screens");



  // Handle ESC key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 no-print">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xs"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          className="relative w-full max-w-2xl bg-background border border-zinc-200 dark:border-zinc-800 rounded-none shadow-none overflow-hidden z-10 flex flex-col max-h-[85vh] font-sans"
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-start justify-between">
            <div>
              <span className="px-2 py-0.5 border border-zinc-300 dark:border-zinc-700 text-[9px] font-mono uppercase tracking-widest text-zinc-500">
                {project.type}
              </span>
              <h3 className="text-xl font-medium tracking-tighter text-foreground mt-2 leading-none">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:opacity-50 text-foreground transition-opacity cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/20 px-6 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab("screens")}
              className={`flex items-center gap-1.5 py-3 text-[10px] font-mono uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
                activeTab === "screens"
                  ? "border-primary text-primary dark:text-primary-hover font-bold"
                  : "border-transparent text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              } mr-6`}
            >
              <Layout size={12} />
              {"Mock Screens"}
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`flex items-center gap-1.5 py-3 text-[10px] font-mono uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
                activeTab === "features"
                  ? "border-primary text-primary dark:text-primary-hover font-bold"
                  : "border-transparent text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              } mr-6`}
            >
              <CheckCircle2 size={12} />
              {"Features"}
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-1.5 py-3 text-[10px] font-mono uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
                activeTab === "architecture"
                  ? "border-primary text-primary dark:text-primary-hover font-bold"
                  : "border-transparent text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <Layers size={12} />
              {"Architecture"}
            </button>
          </div>

          {/* Modal Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none">
            {/* Tab 1: Screens */}
            {activeTab === "screens" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
                  {"// mock screens & modules layout"}
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {project.demoDetails.screens.map((screen, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
                    >
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-400">
                          {String(idx + 1).padStart(2, "0")}.
                        </span>
                        {screen.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed pl-6">
                        {screen.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Features */}
            {activeTab === "features" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
                  {"// primary system features"}
                </p>
                <ul className="space-y-4 pl-1">
                  {project.demoDetails.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-zinc-700 dark:text-zinc-350">
                      <div className="text-primary mt-0.5">
                        <Sparkles size={12} />
                      </div>
                      <span className="font-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab 3: Architecture */}
            {activeTab === "architecture" && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
                  {"// system_architecture_map.txt"}
                </p>
                <div className="p-5 bg-zinc-950 text-emerald-400 border border-zinc-900 font-mono text-[10px] leading-relaxed overflow-x-auto">
                  <div className="flex items-center gap-1.5 text-zinc-600 border-b border-zinc-900 pb-2 mb-3">
                    <Server size={12} />
                    <span>system_architecture_map.txt</span>
                  </div>
                  <pre className="whitespace-pre">
                    {project.demoDetails.architecture}
                  </pre>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block w-full mb-2">
                    {"// selected technology stack"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-1 bg-zinc-100 text-zinc-600 dark:bg-zinc-800/40 dark:text-zinc-400 text-[10px] font-mono border border-zinc-200 dark:border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-950/20">
            <button
              onClick={onClose}
              className="px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-400 text-[10px] font-mono uppercase tracking-widest transition-colors cursor-pointer rounded-none bg-transparent"
            >
              {"Close"}
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-[10px] font-mono uppercase tracking-widest transition-colors cursor-pointer border border-transparent rounded-none"
            >
              <FolderGit2 size={12} />
              {"View GitHub"}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
