"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, Star, Sparkles, Smartphone, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "ASTO-Shop (E-Commerce Web Application)",
      type: "Full-Stack Web App",
      desc: "ระบบร้านค้าออนไลน์แบบครบวงจร รองรับการเข้าสู่ระบบ, การเลือกซื้อสินค้าลงตะกร้าแบบ Real-time, ระบบคูปองส่วนลด และการชำระเงินจำลอง พร้อมแผงหลังบ้าน (Dashboard) สำหรับจัดการข้อมูลสต็อกสินค้า",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "MongoDB"],
      github: "https://github.com/ASTOHACKER",
      demo: "#",
      featured: true,
      icon: <Code2 className="text-indigo-500" size={24} />,
    },
    {
      title: "IT-Diagnostic Mobile (ระบบวิเคราะห์อาการเสียฮาร์ดแวร์)",
      type: "Mobile Application",
      desc: "แอปพลิเคชันบนมือถือที่พัฒนาเพื่อช่วยวิเคราะห์ ค้นหา และแก้ไขปัญหาฮาร์ดแวร์คอมพิวเตอร์และโน้ตบุ๊กเชิงลึก มีคลังความรู้การตรวจซ่อมและขั้นตอนบำรุงรักษาอุปกรณ์ไอทีแบบทีละขั้นตอน (Step-by-step)",
      tech: ["React Native", "Expo", "TypeScript", "SQLite"],
      github: "https://github.com/ASTOHACKER",
      demo: "#",
      featured: false,
      icon: <Smartphone className="text-emerald-500" size={24} />,
    },
    {
      title: "AI Code Buddy (ผู้ช่วยตรวจแก้บั๊กและจัดการ API)",
      type: "AI Utility App",
      desc: "เว็บแอปพลิเคชันที่นำ AI มาช่วยในการเขียนโค้ดและดีบั๊กบั๊กของระบบหลังบ้าน (เช่น ปัญหา Routing, URL Redirection หรือ API Integration) ช่วยลดเวลาในการค้นหาสาเหตุการผิดพลาดของระบบ",
      tech: ["Next.js", "TypeScript", "Gemini API", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/ASTOHACKER",
      demo: "#",
      featured: false,
      icon: <Sparkles className="text-purple-500" size={24} />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-zinc-950/20 print-container">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 text-xs font-semibold mb-3 no-print">
            <Star size={12} className="fill-current text-indigo-500 animate-pulse" />
            ผลงานสร้างสรรค์
          </div>
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-zinc-50 border-l-4 border-indigo-600 pl-4 inline-block">
            โปรเจกต์ที่โดดเด่น
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-light">
            เว็บแอปพลิเคชัน แอปมือถือ และระบบซอฟต์แวร์ที่พัฒนาจริง
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-3xl bg-white dark:bg-zinc-900 border transition-all duration-300 flex flex-col justify-between print-card ${
                project.featured
                  ? "border-indigo-500/30 dark:border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.1)] dark:shadow-[0_0_30px_rgba(99,102,241,0.06)] hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                  : "border-slate-200/60 dark:border-zinc-800/80 shadow-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] hover:border-indigo-500/20"
              }`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-850">
                    {project.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                    {project.type}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-800 dark:text-zinc-150 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Footer details */}
              <div className="space-y-4 mt-6">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-slate-50 text-slate-500 dark:bg-zinc-800/40 dark:text-zinc-400 text-[10px] font-medium rounded border border-slate-100 dark:border-zinc-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-zinc-800/50 no-print">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 font-semibold transition-colors"
                  >
                    <FolderGit2 size={14} />
                    ดูโค้ดบน GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold transition-colors"
                  >
                    เดโมตัวอย่าง
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
