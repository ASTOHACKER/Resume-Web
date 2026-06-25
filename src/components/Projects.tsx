"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, Star, Sparkles, Smartphone, Code2 } from "lucide-react";
import ProjectDemoModal from "./ProjectDemoModal";

interface ProjectDemoDetails {
  screens: { name: string; desc: string }[];
  architecture: string;
  features: string[];
}

interface Project {
  title: string;
  type: string;
  desc: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  icon: React.ReactNode;
  demoDetails: ProjectDemoDetails;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Project FoodNEXT (ProjectVersion1xxx)",
      type: "Next.js Web App",
      desc: "เว็บแอปพลิเคชันระบบสั่งอาหารแบบโมเดิร์น พัฒนาด้วย Next.js และ JavaScript มีการจัดการระบบหน้าร้าน รายการเมนู และการคำนวณผลอย่างเป็นลำดับขั้นตอนชัดเจน",
      tech: ["Next.js", "JavaScript", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/ASTOHACKER/ProjectVersion1xxx",
      demo: "#",
      featured: true,
      icon: <Code2 className="text-indigo-500" size={24} />,
      demoDetails: {
        screens: [
          { name: "หน้าเมนู & บัตรเลือกรายการ (Menu & Cart)", desc: "แสดงรายการอาหารพร้อมฟิลเตอร์หมวดหมู่ มีระบบตะกร้าสินค้าสำหรับรวบรวมรายการและคำนวณราคารายเซกเมนต์" },
          { name: "ระบบส่งออร์เดอร์ของลูกค้า (Ordering Flow)", desc: "เมื่อกดยืนยันออร์เดอร์ ระบบจะจำลองการส่งข้อมูลชุดคำสั่งไปยัง Local Database เพื่อนำมาประมวลผลการจัดเตรียมอาหาร" },
          { name: "หน้าจัดการสต็อกหลังบ้าน (Kitchen Dashboard)", desc: "แสดงคำสั่งซื้อที่ค้างเตรียมแบบเรียลไทม์ สามารถกดอัปเดตสถานะของออร์เดอร์เป็น 'กำลังเตรียม' หรือ 'เสร็จสิ้น' ได้" }
        ],
        architecture: `[Client View: Next.js / Tailwind]
     │
     ▼ (HTTP Requests / state)
[Order Management System]
     │
     ▼
[Prerendered / Local State Stores]`,
        features: [
          "พัฒนาแบบ Responsive เต็มรูปแบบ เหมาะสำหรับลูกค้าสแกนเมนูผ่านมือถือ",
          "มีระบบคำนวณภาษีมูลค่าเพิ่ม (VAT 7%) และ Service Charge อัตโนมัติ",
          "จัดการสถานะออร์เดอร์อย่างเป็นขั้นตอน (Pending -> Preparing -> Completed)"
        ]
      }
    },
    {
      title: "IT VERTEX Trainee Portal (my-app)",
      type: "Next.js & TypeScript",
      desc: "โปรเจกต์ระบบหลังบ้านสำหรับงานไอทีฝึกงาน พัฒนาด้วย Next.js และ TypeScript เพื่อจดบันทึกประวัติ อัปเดตงานซ่อมบำรุงโน้ตบุ๊กคอมพิวเตอร์ และซัพพอร์ตระบบทั่วไป",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      github: "https://github.com/ASTOHACKER/my-app",
      demo: "#",
      featured: true,
      icon: <Smartphone className="text-emerald-500" size={24} />,
      demoDetails: {
        screens: [
          { name: "สรุปยอดเคสประจำวัน (Dashboard Summary)", desc: "แสดงผลรวมปัญหาคอมพิวเตอร์ที่ได้รับการติดต่อเข้ามา จำนวนเคสที่แก้สำเร็จแล้ว และเคสที่อยู่ระหว่างดำเนินการซ่อมแซม" },
          { name: "ระบบคลังเก็บประวัติซ่อมบำรุง (Maintenance Catalog)", desc: "บันทึกข้อมูลอาการเสียของเครื่อง วิธีแก้ไข อะไหล่ที่ถูกสับเปลี่ยน และเวลารับ-ส่งคืนเครื่องของพนักงาน" },
          { name: "เครื่องมือวิเคราะห์ระดับแบตเตอรี่และระบบปฏิบัติการ (Diagnostics Helper)", desc: "โปรแกรมจำลองวิเคราะห์ข้อมูลสภาพเครื่องโน้ตบุ๊กเพื่อประเมินความสมบูรณ์และแนะนำแนวทางลง OS ปรับแต่งเครื่อง" }
        ],
        architecture: `[Client View: Next.js / TS] ──► [API Route Handler]
                                      │
                                      ▼
                             [Supabase Database]
                                      │
                            (Realtime Sync/Auth)`,
        features: [
          "ออกแบบสำหรับการทำงานประสานงานกันของช่างซ่อมบำรุงและทีม Support",
          "มีหน้ากรอกรายงานปัญหาด่วนเพื่อนำไปใช้งานบนอุปกรณ์พกพาขณะปฏิบัติงาน On-site",
          "สถิติกรองข้อมูลวิเคราะห์แบรนด์อุปกรณ์ที่ส่งเคลม/ชำรุดมากที่สุด"
        ]
      }
    },
    {
      title: "SymbolToImages",
      type: "Python Utility",
      desc: "โปรแกรมประยุกต์ย่อยพัฒนาด้วยภาษา Python สำหรับประมวลผลคำสั่งรหัสสัญลักษณ์เชิงเทคนิคเพื่อแปลงข้อมูลตัวอักษรออกมาแสดงผลเป็นรูปภาพกราฟิกอย่างง่าย",
      tech: ["Python", "Image Generation"],
      github: "https://github.com/ASTOHACKER/SymbolToImages",
      demo: "#",
      featured: false,
      icon: <Sparkles className="text-purple-500" size={24} />,
      demoDetails: {
        screens: [
          { name: "ตัวรับข้อมูลรหัสสัญลักษณ์ (Input Console)", desc: "ช่องอินพุตเพื่อรับรหัสสัญลักษณ์ เช่น ตัวอักษรดัดแปลง หรือเครื่องหมายวงเล็บเชื่อมโยงโครงสร้างข้อมูล" },
          { name: "ตัวแปรผลเป็นพิกเซลกราฟิก (Pixel Compiler)", desc: "คอมไพเลอร์ที่เขียนขึ้นด้วยภาษา Python ทำการอ่านรหัสอักษรทีละตัวแล้วแปลงเป็นอาร์เรย์พิกเซลวาดบน Canvas" },
          { name: "เครื่องมือส่งออกรูปภาพ (Image Exporter)", desc: "แปลงกราฟิกในหน่วยความจำและบันทึกออกมาเป็นภาพนามสกุล .png หรือ .jpg อัตโนมัติ" }
        ],
        architecture: `[CLI / Graphical Interface]
            │
            ▼ (String Parser)
     [Pixel Matrix Engine]
            │
            ▼ (Pillow / Image Draw)
    [.png / .jpg Asset Output]`,
        features: [
          "ใช้งานง่ายด้วยชุดคำสั่งแบบเบา (Lightweight Scripting)",
          "รองรับโครงสร้างรหัสแบบหลายบรรทัดเพื่อจัดตารางแสดงผลภาพความละเอียดตามตารางพิกเซล",
          "ส่งออกภาพขนาดมาตรฐานสำหรับใช้จัดทำสื่อเทคนิคอย่างรวดเร็ว"
        ]
      }
    },
  ];

  const handleOpenDemo = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 print-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 rounded-3xl bg-white dark:bg-zinc-900 border transition-all duration-300 flex flex-col justify-between print-card overflow-hidden ${
                project.featured
                  ? "border-indigo-500/30 dark:border-indigo-500/30 shadow-[0_8px_30px_rgb(99,102,241,0.1)] dark:shadow-[0_8px_30px_rgb(99,102,241,0.05)] hover:-translate-y-2"
                  : "border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-indigo-500/20 hover:-translate-y-2"
              }`}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
              <div className="space-y-4 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-100 dark:border-zinc-800 shadow-sm">
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {project.type}
                    </span>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-slate-800 dark:text-zinc-200 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Footer details */}
              <div className="space-y-4 mt-6 relative z-10">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-slate-50 text-slate-500 dark:bg-zinc-800/50 dark:text-zinc-400 text-[10px] font-medium rounded-md border border-slate-100 dark:border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-zinc-800 no-print">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-indigo-600 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FolderGit2 size={16} />
                    Code
                  </a>
                  <button
                    onClick={(e) => handleOpenDemo(e, project)}
                    className="flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 transition-colors cursor-pointer"
                  >
                    Details
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Render interactive project preview modal */}
      <ProjectDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
