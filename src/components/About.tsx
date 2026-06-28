"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-12 border-b border-slate-200 pb-4">
          Philosophy // About & Approach
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-medium text-foreground mb-6">
              Crafting reliable software solutions through methodical engineering and thoughtful design.
            </h3>
            <div className="space-y-6 text-sm text-slate-600 font-light leading-relaxed">
              <p>
                ผมเชื่อว่าซอฟต์แวร์ที่ดีไม่ได้เกิดจากการใช้เครื่องมือที่ทันสมัยที่สุด แต่เกิดจากการทำความเข้าใจปัญหาอย่างถ่องแท้ 
                การออกแบบโครงสร้างที่เรียบง่าย และการเขียนโค้ดที่ดูแลรักษาง่ายในระยะยาว
              </p>
              <p>
                ในฐานะนักศึกษาไอที ผมผสมผสานทฤษฎีทางวิชาการเข้ากับการปฏิบัติงานจริง ผ่านการสร้างโปรเจกต์ Next.js และระบบหลังบ้านด้วย Supabase 
                โดยนำเทคโนโลยี AI มาเป็นเครื่องมือช่วยเร่งกระบวนการคิดและพัฒนาให้มีประสิทธิภาพสูงสุด
              </p>
              <p>
                ปัจจุบันผมมุ่งมั่นที่จะนำความกระตือรือร้นและทักษะการแก้ปัญหา มาเป็นส่วนหนึ่งของทีมพัฒนาในระดับมืออาชีพ 
                เพื่อสร้างสรรค์นวัตกรรมที่ส่งมอบคุณค่าให้กับผู้ใช้งานอย่างยั่งยืน
              </p>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-8 space-y-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Focus</h4>
              <ul className="text-xs space-y-2 text-slate-500">
                <li>// Web Engineering</li>
                <li>// Systems Analysis</li>
                <li>// UI/UX Craftsmanship</li>
                <li>// AI Automation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Values</h4>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                "Keep it simple, maintainable, and human-centric."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
