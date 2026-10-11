"use client";

import React, { useState } from "react";
import Marginalia from "./Marginalia";
import ProjectDemoModal from "./ProjectDemoModal";
import { FolderGit2, Cpu, Database, Code2 } from "lucide-react";

interface Project {
  title: string;
  type: string;
  desc: string;
  github: string;
  core: string;
  data: string;
  icon: React.ReactNode;
  tech: string[];
  demoDetails: {
    screens: { name: string; desc: string }[];
    architecture: string;
    features: string[];
  };
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "JOBDEE",
      type: "Job Board",
      desc: "แพลตฟอร์มหางานที่ออกแบบมาเพื่อการค้นหาที่รวดเร็วและแม่นยำ ด้วยโครงสร้าง SSR ที่มีประสิทธิภาพสูง",
      github: "https://github.com/ASTOHACKER/JOBDEE",
      core: "Next.js 16",
      data: "Supabase SSR",
      icon: <FolderGit2 size={12} />,
      tech: ["Next.js 16", "React 19", "Supabase SSR", "TypeScript", "Tailwind CSS v4"],
      demoDetails: {
        screens: [
          { name: "Job Search Portal", desc: "หน้ารายการค้นหาและฟิลเตอร์กรองประเภทงานด้วย SSR ความเร็วสูง" },
          { name: "Employer Dashboard", desc: "แผงควบคุมหลักสำหรับนายจ้าง เพื่อจัดการสถานะการประกาศรับสมัครและการรับสมัครเข้าทำงาน" }
        ],
        features: [
          "Fast Search & Infinite Scroll: ค้นหางานด้วยความเร็วสูงและเลื่อนหน้าได้ไร้รอยต่อ",
          "Supabase SSR Sync: ซิงก์ข้อมูลผู้ใช้และเซสชันการเข้าสู่ระบบแบบเรียลไทม์",
          "Tailwind v4 Layout structure: ออกแบบระบบกริดและหน้าจอที่ยืดหยุ่น"
        ],
        architecture: `JOBDEE/
├── src/
│   ├── app/           # App Router Routes
│   │   ├── jobs/      # Job Listing Page
│   │   └── employer/  # Dashboard Page
│   ├── components/    # Shared Design Modules
│   └── lib/           # Supabase SSR Clients`
      }
    },
    {
      title: "Manga Translator",
      type: "AI Automation",
      desc: "ระบบแปลมังงะอัตโนมัติด้วย AI ประมวลผลภาพและข้อความแบบ Workflow พร้อมรองรับภาษาไทย",
      github: "https://github.com/ASTOHACKER/manga-transalate-th",
      core: "Python",
      data: "OpenAI API",
      icon: <Cpu size={12} />,
      tech: ["Python", "OpenAI API", "OpenCV", "Pillow", "Tesseract"],
      demoDetails: {
        screens: [
          { name: "Workflow Console", desc: "หน้าต่างแสดงความคืบหน้าการทำงานของระบบแปลและพาสเซสขั้นตอนการสลับภาษา" },
          { name: "Canvas Preview", desc: "แผงเปรียบเทียบรูปภาพมังงะต้นฉบับกับฉบับภาษาไทยที่เปลี่ยนข้อความด้วย AI" }
        ],
        features: [
          "Optical Character Recognition (OCR): ตรวจจับกล่องคำพูดภาษาญี่ปุ่นด้วยโมเดลวิเคราะห์ภาพ",
          "GPT-4o Localization: แปลบริบททางวัฒนธรรมและบทสนทนาให้ลื่นไหลเป็นธรรมชาติ",
          "Automated Redrawing: ลบคลีนตัวอักษรเดิมและวาดพื้นหลังชดเชยอัตโนมัติ"
        ],
        architecture: `manga-translator/
├── modules/
│   ├── ocr.py          # Character Detection
│   ├── translator.py   # OpenAI Translation Engine
│   └── renderer.py     # Font Redrawing & Canvas
├── main.py             # Main CLI execution flow
└── config.yaml         # Project parameters`
      }
    },
    {
      title: "ElysiaTest",
      type: "Backend Lab",
      desc: "การสำรวจประสิทธิภาพของ ElysiaJS Framework สำหรับการสร้าง Backend ที่มีความหน่วงต่ำ",
      github: "https://github.com/ASTOHACKER/ElysiaTest",
      core: "ElysiaJS",
      data: "None",
      icon: <Database size={12} />,
      tech: ["ElysiaJS", "Bun", "TypeScript", "Prisma", "PostgreSQL"],
      demoDetails: {
        screens: [
          { name: "Benchmark Results", desc: "ผลลัพธ์การวัดความหน่วงของ Endpoint ที่รันผ่าน Bun Runtime" },
          { name: "API Playground", desc: "หน้าเอกสาร Swagger UI ในตัวสำหรับการรันและทดสอบ Endpoints" }
        ],
        features: [
          "Ultra-low latency routing powered by ElysiaJS",
          "TypeScript Strict types inference in REST schema validations",
          "Prisma ORM integration for robust DB operations"
        ],
        architecture: `ElysiaTest/
├── src/
│   ├── controllers/   # Route handler logics
│   ├── db/            # Database schema client
│   └── index.ts       # ElysiaJS entry Server
└── package.json       # Bun scripts`
      }
    },
    {
      title: "FOODNEXTS",
      type: "Service Platform",
      desc: "โปรเจกต์จัดการร้านอาหารที่เน้น UX/UI ที่ทันสมัยและระบบจัดการข้อมูลที่มีประสิทธิภาพ",
      github: "#",
      core: "TypeScript",
      data: "Supabase",
      icon: <Code2 size={12} />,
      tech: ["Next.js", "React", "Supabase", "Tailwind CSS", "Framer Motion"],
      demoDetails: {
        screens: [
          { name: "Customer Menu", desc: "หน้ารายการสั่งอาหารแบบ Responsive ที่มาพร้อมกับเอฟเฟกต์การเลือกอาหารที่ลื่นไหล" },
          { name: "Kitchen Monitor", desc: "หน้าจอสำหรับพ่อครัวในการอัปเดตและคุมคิวสเตตัสการทำอาหารสดแบบ Real-time" }
        ],
        features: [
          "Interactive Menu Grid: ตะกร้าและรายการสั่งซื้อทำงานควบคู่แบบ client-side state",
          "Realtime WebSockets: อัปเดตคิวรับรายการอาหารไปยังครัวด้วย Supabase Realtime",
          "Smooth Micro-interactions using Framer Motion animations"
        ],
        architecture: `FOODNEXTS/
├── src/
│   ├── app/           # App Router (Client Page)
│   ├── components/    # Shared buttons, panels
│   │   ├── Cart.tsx   # Floating order box
│   │   └── Chef.tsx   # Realtime Kitchen UI
│   └── context/       # Order State Provider`
      }
    },
    {
      title: "My App",
      type: "Internal Tools",
      desc: "โปรเจกต์ส่วนตัวที่กำลังพัฒนาเพื่อทดลองฟีเจอร์ใหม่ๆ ในการจัดการ Application state",
      github: "#",
      core: "TypeScript",
      data: "Pending",
      icon: <Code2 size={12} />,
      tech: ["TypeScript", "React Native", "Zustand", "Expo"],
      demoDetails: {
        screens: [
          { name: "App Home", desc: "หน้าแดชบอร์ดสรุปกิจกรรมและข้อมูลภาพรวมของผู้ใช้งานหลัก" },
          { name: "Settings Panel", desc: "การจัดการตั้งค่าและระบบความปลอดภัยสำหรับข้อมูลท้องถิ่น" }
        ],
        features: [
          "Zustand State Store: ระบบแชร์สเตตัสข้อมูลข้ามแอปพลิเคชันแบบน้ำหนักเบา",
          "Expo SDK Native Bridge: เชื่อมต่อ API กล้องและการแจ้งเตือนระบบโทรศัพท์",
          "TS Strict interface mapping for data serialization"
        ],
        architecture: `my-app/
├── src/
│   ├── store/         # Zustand configuration
│   ├── screens/       # Mobile page layouts
│   └── App.tsx        # Entry controller script
└── app.json           # Expo manifest`
      }
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
            <div 
              key={i} 
              className="group border-t border-zinc-200 dark:border-zinc-800 pt-8 first:border-t-0 hover:border-primary dark:hover:border-primary transition-colors duration-300 print-card"
            >
              <div className="space-y-6">
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600 font-medium mb-4 flex items-center gap-2">
                  {String(i + 1).padStart(2, '0')}
                  {project.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-medium tracking-tighter text-foreground group-hover:text-primary dark:group-hover:text-primary-hover transition-colors">
                    {project.title} 
                    <span className="text-zinc-400 dark:text-zinc-600 font-light ml-2">— {project.type}</span>
                  </h3>
                </div>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal h-20">
                  {project.desc}
                </p>

                {/* Technical Spec Table */}
                <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 dark:border-zinc-900 pt-4 mt-4">
                  <div className="text-[9px] uppercase tracking-wider text-zinc-400">Core</div>
                  <div className="text-[9px] font-mono text-zinc-900 dark:text-zinc-100 text-right">{project.core}</div>
                  <div className="text-[9px] uppercase tracking-wider text-zinc-400">Data</div>
                  <div className="text-[9px] font-mono text-zinc-900 dark:text-zinc-100 text-right">{project.data}</div>
                  <div className="text-[9px] uppercase tracking-wider text-zinc-400">Quality</div>
                  <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 text-right">[TS-STRICT]</div>
                  <div className="text-[9px] uppercase tracking-wider text-zinc-400">Pipeline</div>
                  <div className="text-[9px] font-mono text-zinc-900 dark:text-zinc-100 text-right">CI/CD Ready</div>
                </div>

                <div className="pt-2 flex items-center gap-4 no-print">
                  {project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-zinc-900 dark:border-zinc-100 pb-0.5 hover:opacity-60 transition-opacity"
                    >
                      GitHub [1]
                    </a>
                  )}
                  <button 
                    onClick={() => setActiveProject(project)}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-zinc-900 dark:border-zinc-100 pb-0.5 hover:opacity-60 transition-opacity cursor-pointer bg-transparent"
                  >
                    System Details [2]
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the details modal */}
      <ProjectDemoModal 
        isOpen={!!activeProject} 
        onClose={() => setActiveProject(null)} 
        project={activeProject} 
      />
    </section>
  );
}
