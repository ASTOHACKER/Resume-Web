"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Cpu, Bot } from "lucide-react";

export default function Skills() {
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { label: "ทั้งหมด", value: "all" },
    { label: "Programming", value: "programming" },
    { label: "Backend & Databases", value: "backend" },
    { label: "Specialized & AI", value: "specialized" },
    { label: "Hardware & Support", value: "support" },
  ];

  const skillCategories = [
    {
      id: "programming",
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
      id: "backend",
      title: "Backend & Databases",
      icon: <Database className="text-indigo-500" size={20} />,
      skills: [
        { name: "Supabase", level: "ใช้งานได้ดี", percentage: 75 },
        { name: "MongoDB", level: "ใช้งานได้ดี", percentage: 75 },
        { name: "Git & GitHub", level: "ใช้งานได้ดี", percentage: 80 },
      ],
    },
    {
      id: "specialized",
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
      id: "support",
      title: "Hardware Support & Languages",
      icon: <Cpu className="text-indigo-500" size={20} />,
      skills: [
        { name: "IT Support (On-site & Remote)", level: "ใช้งานได้ดี", percentage: 85 },
        { name: "Hardware & Software Diagnostic", level: "ซ่อมคอมและโน้ตบุ๊กเชิงลึกได้ดี", percentage: 80 },
        { name: "ภาษาอังกฤษ (English)", level: "ปานกลาง (ฟัง พูด อ่าน เขียน)", percentage: 65 },
      ],
    },
  ];

  const filteredCategories = filter === "all"
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === filter);

  return (
    <section id="skills" className="section-spacing print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 mb-20 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          Technical Archive // Skills & Proficiency
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-sm uppercase tracking-widest font-bold text-zinc-900 dark:text-zinc-100 border-l border-zinc-900 dark:border-zinc-100 pl-4">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex justify-between items-baseline border-b border-zinc-100 dark:border-zinc-900 pb-2">
                    <span className="text-sm font-normal text-zinc-700 dark:text-zinc-300">
                      {skill.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
