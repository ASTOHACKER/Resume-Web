"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Rocket, Heart } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Award className="text-indigo-600 dark:text-indigo-400" size={24} />,
      title: "ผลการเรียนที่โดดเด่น",
      desc: "เกรดเฉลี่ยสะสมระดับปริญญาตรี 3.43 (ปวส. 3.51)",
    },
    {
      icon: <BookOpen className="text-emerald-600 dark:text-emerald-400" size={24} />,
      title: "การศึกษาที่ครอบคลุม",
      desc: "มีความรู้ทั้งทักษะทฤษฎีไอที ซอฟต์แวร์ และฮาร์ดแวร์เชิงลึก",
    },
    {
      icon: <Rocket className="text-amber-600 dark:text-amber-400" size={24} />,
      title: "มุ่งมั่นพัฒนาตนเอง",
      desc: "ชอบอัปเดตเครื่องมือและเรียนรู้นวัตกรรมใหม่ๆ (เช่น พัฒนาด้วย AI)",
    },
    {
      icon: <Heart className="text-red-600 dark:text-red-400" size={24} />,
      title: "พร้อมสำหรับการทำงานร่วมกัน",
      desc: "พร้อมนำพลังและทักษะไปช่วยทีมพัฒนาและขับเคลื่อนบริษัท",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-zinc-950/20 print-container">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-zinc-50 border-l-4 border-indigo-600 pl-4 inline-block">
            เกี่ยวกับฉัน
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-light">
            ประวัติย่อ และแนวคิดในการทำงาน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Biography text */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-zinc-200">
              สวัสดีครับ ผมชื่อ <span className="text-indigo-600 dark:text-indigo-400 font-bold">นฤดม โอกาศ</span>
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              ผมเป็นนักศึกษาไอทีที่ชื่นชอบการเขียนโค้ดและแก้ปัญหาด้วยการพัฒนาระบบที่ใช้งานได้จริง 
              ช่วงที่เรียนได้มีโอกาสฝึกฝนทักษะผ่านการทำโปรเจกต์ต่างๆ ทำให้สามารถพัฒนาเว็บแอปพลิเคชันด้วย 
              <strong> TypeScript</strong> และ <strong>Next.js</strong> รวมถึงจัดการระบบหลังบ้านด้วย 
              <strong> Supabase</strong> และ <strong>MongoDB</strong>
            </p>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              ผมเป็นคนชอบอัปเดตความรู้และเครื่องมือใหม่ๆ อยู่เสมอ โดยนำเอาเทคโนโลยี AI 
              เข้ามาช่วยเพิ่มประสิทธิภาพในการทำงานและการโค้ดดิ้ง ปัจจุบันผมกำลังมองหาพื้นที่ฝึกงานในตำแหน่ง 
              <strong> Programmer / Software Developer</strong> เพื่อเก็บเกี่ยวประสบการณ์การทำงานร่วมกับทีม 
              และพร้อมนำทักษะที่มีไปช่วยต่อยอดงานของบริษัทอย่างเต็มที่ครับ
            </p>
          </div>

          {/* Highlights Sidebar */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-400 dark:text-zinc-500 tracking-wider uppercase mb-2">
              ทำไมต้องเป็นผม?
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-sm print-card transition-all hover:border-indigo-500/20"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-slate-50 dark:bg-zinc-800/50 h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-slate-800 dark:text-zinc-200">
                      {item.title}
                    </h5>
                    <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
