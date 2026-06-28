"use client";

import React from "react";

interface Project {
  title: string;
  type: string;
  desc: string;
  github: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "JOBDEE",
      type: "Next.js / Supabase",
      desc: "แพลตฟอร์มหางานยุคใหม่ที่เน้นความเร็วและ SSR พัฒนาด้วยมาตรฐาน Supabase",
      github: "https://github.com/ASTOHACKER/JOBDEE",
    },
    {
      title: "Manga Translator",
      type: "Python / AI",
      desc: "เครื่องมือแปลมังงะอัตโนมัติ ใช้ EasyOCR ร่วมกับ OpenCV ทำ Inpainting ลบคำเดิม",
      github: "https://github.com/ASTOHACKER/manga-transalate-th",
    },
    {
      title: "SymbolToImages",
      type: "Python Utility",
      desc: "โปรแกรมประมวลผลคำสั่งเชิงเทคนิคเพื่อแปลงรหัสเป็นพิกเซลกราฟิก",
      github: "https://github.com/ASTOHACKER/SymbolToImages",
    },
  ];

  return (
    <section id="projects" className="section-spacing print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 mb-20 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          Selected Works // Editorial Archive
        </h2>
        
        <div className="space-y-12">
          {projects.map((project, i) => (
            <div key={i} className="group border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-t-0 print-card">
              <div className="grid md:grid-cols-[100px,1fr] gap-8">
                {/* Indexing */}
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600 font-medium">
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-medium tracking-tight text-foreground">
                      {project.title} 
                      <span className="text-zinc-400 dark:text-zinc-600 font-light">— {project.type}</span>
                    </h3>
                  </div>
                  
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl">
                    {project.desc}
                  </p>

                  <div className="flex gap-8 uppercase text-[10px] tracking-[0.2em] font-bold">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      className="text-zinc-900 dark:text-zinc-100 border-b border-zinc-800 dark:border-zinc-200 hover:opacity-60 transition-opacity"
                    >
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
