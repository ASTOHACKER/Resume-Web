"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, ShieldAlert, Cpu, Bot, Settings, BookOpen } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: <Code2 className="text-indigo-500" size={20} />,
      skills: [
        { name: "TypeScript", level: "ใช้งานได้ดี", percentage: 85 },
        { name: "JavaScript", level: "ใช้งานได้ดี", percentage: 85 },
        { name: "Next.js", level: "ใช้งานได้ดี", percentage: 80 },
        { name: "Tailwind CSS", level: "ใช้งานได้ดี", percentage: 85 },
        { name: "React Native (Expo)", level: "กำลังพัฒนา", percentage: 70 },
        { name: "PHP", level: "พื้นฐาน", percentage: 60 },
        { name: "Python", level: "พื้นฐาน", percentage: 55 },
      ],
    },
    {
      title: "Backend & Databases",
      icon: <Database className="text-indigo-500" size={20} />,
      skills: [
        { name: "Supabase", level: "ใช้งานได้ดี", percentage: 75 },
        { name: "MongoDB", level: "ใช้งานได้ดี", percentage: 75 },
        { name: "Git & GitHub", level: "ใช้งานได้ดี", percentage: 80 },
      ],
    },
    {
      title: "Specialized Tech Skills",
      icon: <Bot className="text-indigo-500" size={20} />,
      skills: [
        { name: "AI for Development", level: "เชี่ยวชาญ / นำมาประยุกต์ใช้เสมอ", percentage: 90 },
        { name: "System Analysis", level: "วิเคราะห์และวางขอบระบบได้ดี", percentage: 75 },
        { name: "Problem Solving & Debugging", level: "แก้ปัญหาระบบและ API ได้ดี", percentage: 85 },
        { name: "Machine Learning", level: "ระดับเริ่มต้น (Basic)", percentage: 40 },
        { name: "Figma (UI Design)", level: "พื้นฐาน", percentage: 60 },
      ],
    },
    {
      title: "Hardware Support & Languages",
      icon: <Cpu className="text-indigo-500" size={20} />,
      skills: [
        { name: "IT Support (On-site & Remote)", level: "ใช้งานได้ดี", percentage: 85 },
        { name: "Hardware & Software Diagnostic", level: "ซ่อมคอมและโน้ตบุ๊กเชิงลึกได้ดี", percentage: 80 },
        { name: "ภาษาอังกฤษ (English)", level: "ปานกลาง (ฟัง พูด อ่าน เขียน)", percentage: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 print-container">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-zinc-50 border-l-4 border-indigo-600 pl-4 inline-block">
            ทักษะความสามารถ
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-light">
            ความชำนาญทางเทคนิค ซอฟต์แวร์ และงานซัพพอร์ต
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/80 shadow-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:border-indigo-500/20 transition-all duration-300 print-card"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100 dark:border-zinc-800/60">
                {category.icon}
                <h3 className="font-display font-bold text-slate-800 dark:text-zinc-200">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress Bar (hidden in printing for clean print look) */}
                    <div className="w-full h-2 bg-slate-100 dark:bg-zinc-800/50 rounded-full overflow-hidden no-print">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: sIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
