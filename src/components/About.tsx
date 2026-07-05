import Image from "next/image";
import React from "react";

// ลากรูปไปไว้ที่ public/profile.webp ก่อน
export default function About() {
  return (
    <section id="about" className="section-spacing print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 mb-20 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          Philosophy // About & Approach
        </h2>

        <div className="grid md:grid-cols-[200px,1fr,240px] gap-12">
          {/* Portrait Block */}
          <div className="relative w-48 h-64 md:w-full md:h-full overflow-hidden border border-zinc-200 dark:border-zinc-800 min-h-[260px]">
            <Image 
              src="/profile.webp" 
              alt="Narudom O-kart" 
              fill
              priority
              sizes="(max-width: 768px) 192px, 200px"
              className="zine-portrait object-cover"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-medium tracking-tight text-foreground leading-tight">
              Crafting reliable software solutions through methodical engineering and thoughtful design.
            </h3>
            <div className="space-y-6 text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              <p>
                ผมเชื่อว่าซอฟต์แวร์ที่ดีไม่ได้เกิดจากการใช้เครื่องมือที่ทันสมัยที่สุด แต่เกิดจากการทำความเข้าใจปัญหาอย่างถ่องแท้ 
                การออกแบบโครงสร้างที่เรียบง่าย และการเขียนโค้ดที่ดูแลรักษาง่ายในระยะยาว
              </p>
              <p>
                ในฐานะนักศึกษาไอที ผมผสมผสานทฤษฎีทางวิชาการเข้ากับการปฏิบัติงานจริง ผ่านการสร้างโปรเจกต์ Next.js และระบบหลังบ้านด้วย Supabase 
                โดยนำเทคโนโลยี AI มาเป็นเครื่องมือช่วยเร่งกระบวนการคิดและพัฒนาให้มีประสิทธิภาพสูงสุด
              </p>
            </div>
          </div>

          <aside className="border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 pt-12 md:pt-0 md:pl-12 space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-zinc-900 dark:text-zinc-100">Focus</h4>
              <ul className="text-[11px] uppercase tracking-widest space-y-3 text-zinc-500 dark:text-zinc-500">
                <li>Web Engineering</li>
                <li>Systems Analysis</li>
                <li>UI/UX Craftsmanship</li>
                <li>AI Automation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-zinc-900 dark:text-zinc-100">Core Value</h4>
              <p className="text-[11px] leading-relaxed italic text-zinc-500 dark:text-zinc-600">
                &quot;Keep it simple, maintainable, and human-centric.&quot;
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
