"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section-spacing print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 mb-20 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          Contact // Archival Access
        </h2>
        
        <div className="grid md:grid-cols-[1fr,240px] gap-20">
          <div>
            <h3 className="text-3xl font-medium tracking-tight text-foreground mb-8">
              Let's connect regarding opportunities or technical exchange.
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-md">
              ผมเปิดรับโอกาสในการฝึกงานและการร่วมงานในโปรเจกต์ที่ท้าทาย หากคุณมีความสนใจหรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมได้โดยตรงผ่านช่องทางเหล่านี้
            </p>
          </div>

          <aside className="border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 pt-12 md:pt-0 md:pl-12 space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-zinc-900 dark:text-zinc-100">Electronic Mail</h4>
              <a href="mailto:disasdrop@gmail.com" className="text-sm font-normal text-zinc-600 dark:text-zinc-400 border-b border-zinc-800 dark:border-zinc-200 hover:opacity-60 transition-opacity">
                disasdrop@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-zinc-900 dark:text-zinc-100">Direct Line</h4>
              <a href="tel:0910304318" className="text-sm font-normal text-zinc-600 dark:text-zinc-400 border-b border-zinc-800 dark:border-zinc-200 hover:opacity-60 transition-opacity">
                091-030-4318
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
