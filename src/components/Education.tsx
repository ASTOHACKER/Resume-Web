"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      level: "ระดับปริญญาตรี (กำลังศึกษา - ชั้นปีที่ 2)",
      institution: "มหาวิทยาลัยสงขลานครินทร์ คณะวิทยาศาสตร์",
      major: "สาขาวิชาเทคโนโลยีสารสนเทศ (IT)",
      englishInstitution: "Prince of Songkla University",
      gpa: "3.43",
      status: "กำลังศึกษา",
      period: "2024 - ปัจจุบัน",
    },
    {
      level: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      institution: "วิทยาลัยเทคนิคหาดใหญ่",
      major: "สาขาวิชาเทคโนโลยีสารสนเทศ / คอมพิวเตอร์",
      englishInstitution: "Hatyai Technical College",
      gpa: "3.51",
      status: "สำเร็จการศึกษา",
      period: "2022 - 2024",
    },
    {
      level: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
      institution: "วิทยาลัยเทคนิคหาดใหญ่",
      major: "สาขาวิชาช่างคอมพิวเตอร์ / อิเล็กทรอนิกส์",
      englishInstitution: "Hatyai Technical College",
      gpa: "3.19",
      status: "สำเร็จการศึกษา",
      period: "2019 - 2022",
    },
  ];

  return (
    <section id="education" className="py-20 print-container">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-zinc-50 border-l-4 border-indigo-600 pl-4 inline-block">
            ประวัติการศึกษา
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-light">
            เส้นทางการเรียนรู้และผลการเรียน
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-12">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline dot */}
              <span className="absolute left-[-9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-zinc-950 border-2 border-indigo-600 group-hover:scale-125 transition-transform duration-200 z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              </span>

              {/* Card content */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all group-hover:border-indigo-500/20 print-card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    {/* Level Tag */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-500/10">
                        {edu.level}
                      </span>
                      {edu.status === "กำลังศึกษา" ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 animate-pulse">
                          {edu.status}
                        </span>
                      ) : null}
                    </div>

                    {/* Institution */}
                    <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-100 flex items-center gap-2">
                      <GraduationCap size={18} className="text-slate-400 dark:text-zinc-500" />
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-zinc-500 italic mt-0.5">
                      {edu.englishInstitution}
                    </p>
                    
                    {/* Major */}
                    <p className="text-sm font-medium text-slate-600 dark:text-zinc-400">
                      {edu.major}
                    </p>
                  </div>

                  {/* GPA and Period side-panel */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 flex-shrink-0">
                    {/* Period */}
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500 font-medium">
                      <Calendar size={14} />
                      {edu.period}
                    </span>

                    {/* GPA Badge */}
                    <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-zinc-800/40 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-zinc-800/50">
                      <Award size={16} className="text-amber-500" />
                      <div className="text-right">
                        <span className="text-[9px] block text-slate-400 dark:text-zinc-500 font-medium leading-none">GPA</span>
                        <span className="text-sm font-bold text-slate-800 dark:text-zinc-100 leading-none">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
