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
    <section id="projects" className="py-20 print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-12 border-b border-slate-200 pb-4">
          Selected Works // GitHub Archive
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {projects.map((project, i) => (
            <div key={i} className="bg-background p-8 hover:bg-slate-50 transition-colors">
              <span className="text-[10px] uppercase tracking-tighter text-slate-400">{project.type}</span>
              <h3 className="text-xl font-medium mt-2 mb-4">{project.title}</h3>
              <p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">{project.desc}</p>
              
              <div className="flex gap-4">
                <a href={project.github} target="_blank" className="text-xs border-b border-slate-800 pb-0.5 hover:text-blue-600">VIEW REPO</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
