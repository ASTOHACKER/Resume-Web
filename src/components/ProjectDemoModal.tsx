"use client";

import React, { useState } from "react";
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
          className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 dark:border-zinc-800 flex items-start justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                {project.type}
              </span>
              <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-50 mt-1.5 leading-snug">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-950/20 px-6">
            <button
              onClick={() => setActiveTab("screens")}
              className={`flex items-center gap-1.5 py-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === "screens"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-300"
              } mr-6`}
            >
              <Layout size={14} />
              จำลองหน้าทำงาน (Mock Screens)
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`flex items-center gap-1.5 py-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === "features"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-300"
              } mr-6`}
            >
              <CheckCircle2 size={14} />
              ฟีเจอร์เด่น (Key Features)
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-1.5 py-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === "architecture"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-300"
              }`}
            >
              <Layers size={14} />
              สถาปัตยกรรมระบบ
            </button>
          </div>

          {/* Modal Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Tab 1: Screens */}
            {activeTab === "screens" && (
              <div className="space-y-4">
                <p className="text-xs text-slate-500 dark:text-zinc-400 font-light">
                  *ข้อมูลจำลองและรายละเอียดโมดูลหลักสำหรับการใช้งานระบบ
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {project.demoDetails.screens.map((screen, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/50 dark:border-zinc-800/80 shadow-sm"
                    >
                      <h4 className="text-sm font-bold text-slate-800 dark:text-zinc-200 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 flex items-center justify-center text-xs">
                          {idx + 1}
                        </span>
                        {screen.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-500 dark:text-zinc-400 font-light leading-relaxed pl-7">
                        {screen.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Features */}
            {activeTab === "features" && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-800 dark:text-zinc-200">
                  คุณสมบัติและขีดความสามารถหลักของระบบ:
                </h4>
                <ul className="space-y-3 pl-1">
                  {project.demoDetails.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-400">
                      <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 mt-0.5">
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
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#09090b] text-[#38bdf8] border border-zinc-800 font-mono text-xs shadow-inner leading-relaxed">
                  <div className="flex items-center gap-1.5 text-zinc-500 border-b border-zinc-800 pb-2 mb-3">
                    <Server size={12} />
                    <span>system_architecture_map.txt</span>
                  </div>
                  <pre className="whitespace-pre-wrap text-zinc-300">
                    {project.demoDetails.architecture}
                  </pre>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs text-slate-400 dark:text-zinc-500 font-bold block w-full mb-1">
                    เทคโนโลยีที่เลือกใช้:
                  </span>
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 bg-slate-50 text-slate-500 dark:bg-zinc-800/40 dark:text-zinc-400 text-[10px] font-bold rounded border border-slate-100 dark:border-zinc-850"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between bg-slate-50/50 dark:bg-zinc-950/20">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-350 dark:border-zinc-700 hover:border-slate-400 dark:hover:border-zinc-500 text-slate-700 dark:text-zinc-400 text-xs font-semibold rounded-xl transition-colors"
            >
              ปิดหน้าต่าง
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition-all shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20"
            >
              <FolderGit2 size={14} />
              ดูโค้ดบน GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
