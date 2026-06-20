"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Server, ChevronDown, ChevronUp, Wrench, GraduationCap } from "lucide-react";


export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  const experiences = [
    {
      role: "IT Technician (Trainee)",
      company: "IT VERTEX",
      period: "27 กุมภาพันธ์ 2565 - 27 เมษายน 2567",
      englishPeriod: "27 February 2022 - 27 April 2024",
      skills: ["System Diagnostic", "Hardware Repair", "OS Deployment", "Maintenance"],
      tasks: [
        "ดูแลและแก้ไขปัญหาด้าน Hardware / Software เชิงลึก (System Diagnostic & Repair)",
        "ติดตั้งและอัปเดตระบบปฏิบัติการ (OS) ไดรเวอร์ และโปรแกรมต่างๆ ตามความต้องการ",
        "วิเคราะห์และซ่อมแซมปัญหาฮาร์ดแวร์ของคอมพิวเตอร์และโน้ตบุ๊ก",
        "บำรุงรักษาและทำความสะอาดอุปกรณ์ไอทีเพื่อให้พร้อมกลับมาใช้งานได้อย่างสมบูรณ์",
      ],
      tools: ["Multimeter", "HOT Air Station", "Hardware Diagnostic Tools", "OS Deployment software", "IT Cleaning Utilities"],
      learnings: "ได้เรียนรู้การวิเคราะห์ปัญหาฮาร์ดแวร์คอมพิวเตอร์เชิงลึก รวมถึงกระบวนการบำรุงรักษาเชิงป้องกันและการบริการลูกค้าหน้างานอย่างถูกต้องตามมาตรฐานช่างไอทีมืออาชีพ",
    },
    {
      role: "IT Support (Trainee)",
      company: "IT VERTEX",
      period: "16 พฤษภาคม 2565 - 16 กรกฎาคม 2565",
      englishPeriod: "16 May 2022 - 16 July 2022",
      skills: ["IT Support", "On-site Support", "Remote Support", "Software Troubleshooting"],
      tasks: [
        "ดูแลและแก้ไขปัญหาด้าน Hardware / Software ทั่วไป",
        "ให้การซัพพอร์ตผู้ใช้งาน (Helpdesk Support) ทั้งในรูปแบบ On-site และ Remote",
        "ติดตั้งและอัปเดตระบบปฏิบัติการ ซอฟต์แวร์ และโปรแกรมประยุกต์ต่างๆ",
      ],
      tools: ["AnyDesk", "TeamViewer", "Active Directory", "Windows Registry", "Software installation packages"],
      learnings: "พัฒนาทักษะในการแก้ปัญหาคอมพิวเตอร์และระบบซอฟต์แวร์เฉพาะหน้า รวมถึงเรียนรู้การทำงานร่วมกับทีมผู้ใช้งานเพื่อช่วยเหลือและแนะนำความรู้เบื้องต้นในการใช้งานฮาร์ดแวร์และแอปพลิเคชันอย่างเป็นมิตร",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-zinc-950/20 print-container">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-zinc-50 border-l-4 border-indigo-600 pl-4 inline-block">
            ประสบการณ์ฝึกงาน
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-light">
            ประวัติการฝึกงานและบทบาทหน้าที่ด้านไอที (คลิกที่การ์ดเพื่อขยายดูรายละเอียดเพิ่มเติม)
          </p>
        </div>

        {/* Timeline representation */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIdx === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleExpand(index)}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/80 shadow-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:border-indigo-500/25 transition-all duration-300 cursor-pointer print-card"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-slate-100 dark:border-zinc-800/60 pb-4 mb-4">
                  <div className="space-y-1">
                    {/* Role Title */}
                    <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-100 flex items-center gap-2">
                      <Briefcase size={20} className="text-indigo-500" />
                      {exp.role}
                    </h3>
                    
                    {/* Company and Period */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-500 dark:text-zinc-400">
                      <span className="text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                      <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">|</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-zinc-500">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 dark:text-zinc-500 italic mt-0.5">
                      {exp.englishPeriod}
                    </p>
                  </div>

                  {/* Focus Badges */}
                  <div className="flex flex-wrap items-center gap-2 no-print">
                    <div className="flex flex-wrap gap-1.5 mr-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-300 text-xs font-semibold rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {isExpanded ? (
                      <ChevronUp size={20} className="text-indigo-500" />
                    ) : (
                      <ChevronDown size={20} className="text-indigo-500" />
                    )}
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-wider uppercase flex items-center gap-1.5">
                    <Server size={14} />
                    หน้าที่ความรับผิดชอบ
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
                        <CheckCircle2 size={16} className="text-indigo-500 mt-1 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable Content Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-6 pt-6 border-t border-slate-100 dark:border-zinc-800/80 space-y-4 no-print"
                    >
                      {/* Tools Used */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-wider uppercase flex items-center gap-1.5">
                          <Wrench size={14} />
                          เครื่องมือและซอฟต์แวร์ที่ใช้ประจำ
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tools.map((tool, toIdx) => (
                            <span
                              key={toIdx}
                              className="px-2 py-1 bg-indigo-50/50 text-indigo-600 dark:bg-indigo-950/20 dark:text-indigo-400 text-xs font-medium rounded-md border border-indigo-500/10"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Learnings */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-wider uppercase flex items-center gap-1.5">
                          <GraduationCap size={14} />
                          สิ่งที่ได้เรียนรู้และเติบโต
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light bg-slate-50 dark:bg-zinc-850 p-4 rounded-xl border border-slate-100 dark:border-zinc-800/40">
                          {exp.learnings}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
