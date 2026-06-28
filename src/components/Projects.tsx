"use client";

import React from "react";
import Marginalia from "./Marginalia";
import { FolderGit2, Cpu, Database, Code2 } from "lucide-react";

interface Project {
  title: string;
  type: string;
  desc: string;
  github: string;
  core: string;
  data: string;
  icon: React.ReactNode;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "JOBDEE",
      type: "Job Board",
      desc: "แพลตฟอร์มหางานที่ออกแบบมาเพื่อการค้นหาที่รวดเร็วและแม่นยำ ด้วยโครงสร้าง SSR ที่มีประสิทธิภาพสูง",
      github: "https://github.com/ASTOHACKER/JOBDEE",
      core: "Next.js 16",
      data: "Supabase SSR",
      icon: <FolderGit2 size={12} />,
    },
    {
      title: "Manga Translator",
      type: "AI Automation",
      desc: "ระบบแปลมังงะอัตโนมัติด้วย AI ประมวลผลภาพและข้อความแบบ Workflow พร้อมรองรับภาษาไทย",
      github: "https://github.com/ASTOHACKER/manga-transalate-th",
      core: "Python",
      data: "OpenAI API",
      icon: <Cpu size={12} />,
    },
    {
      title: "ElysiaTest",
      type: "Backend Lab",
      desc: "การสำรวจประสิทธิภาพของ ElysiaJS Framework สำหรับการสร้าง Backend ที่มีความหน่วงต่ำ",
      github: "https://github.com/ASTOHACKER/ElysiaTest",
      core: "ElysiaJS",
      data: "None",
      icon: <Database size={12} />,
    },
    {
      title: "FOODNEXTS",
      type: "Service Platform",
      desc: "โปรเจกต์จัดการร้านอาหารที่เน้น UX/UI ที่ทันสมัยและระบบจัดการข้อมูลที่มีประสิทธิภาพ",
      github: "#",
      core: "TypeScript",
      data: "Supabase",
      icon: <Code2 size={12} />,
    },
    {
      title: "My App",
      type: "Internal Tools",
      desc: "โปรเจกต์ส่วนตัวที่กำลังพัฒนาเพื่อทดลองฟีเจอร์ใหม่ๆ ในการจัดการ Application state",
      github: "#",
      core: "TypeScript",
      data: "Pending",
      icon: <Code2 size={12} />,
    },
  ];

  return (
    <section id="projects" className="section-spacing-xl print-container relative">
      <Marginalia text="// selected works" />
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 mb-20 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          Selected Works // Editorial Archive
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, i) => (
            <div key={i} className="group border-t border-zinc-200 dark:border-zinc-800 pt-8 first:border-t-0 print-card">
              <div className="space-y-6">
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600 font-medium mb-4 flex items-center gap-2">
                  {String(i + 1).padStart(2, '0')}
                  {project.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-medium tracking-tighter text-foreground">
                    {project.title} 
                    <span className="text-zinc-400 dark:text-zinc-600 font-light ml-2">— {project.type}</span>
                  </h3>
                </div>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal h-20">
                  {project.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 dark:border-zinc-900 pt-4 mt-4">
                  <div className="text-[9px] uppercase tracking-wider text-zinc-400">Core</div>
                  <div className="text-[9px] font-mono text-zinc-900 dark:text-zinc-100 text-right">{project.core}</div>
                  <div className="text-[9px] uppercase tracking-wider text-zinc-400">Data</div>
                  <div className="text-[9px] font-mono text-zinc-900 dark:text-zinc-100 text-right">{project.data}</div>
                </div>

                <div className="pt-2">
                  <a href={project.github} className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-zinc-900 dark:border-zinc-100 pb-0.5 hover:opacity-60 transition-opacity">
                    GitHub [1]
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
