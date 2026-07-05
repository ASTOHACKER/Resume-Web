"use client";

import React from "react";
import Marginalia from "./Marginalia";

export default function Contact() {
  return (
    <section id="contact" className="section-spacing print-container relative">
      <Marginalia text="// archival access" />
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 mb-20 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          Contact // Archival Access
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium tracking-tight">
              Let&apos;s connect regarding opportunities or technical exchange.
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              ผมเปิดรับโอกาสในการฝึกงานและการร่วมงานในโปรเจกต์ที่ท้าทาย หากคุณมีความสนใจหรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมได้โดยตรงผ่านช่องทางเหล่านี้
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-l border-zinc-200 dark:border-zinc-800 pl-8">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Electronic Mail</p>
              <a href="mailto:disasdrop@gmail.com" className="text-lg font-medium hover:opacity-60 transition-opacity">
                disasdrop@gmail.com
              </a>
            </div>
            <div className="border-l border-zinc-200 dark:border-zinc-800 pl-8">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Direct Line</p>
              <a href="tel:0910304318" className="text-lg font-medium hover:opacity-60 transition-opacity">
                091-030-4318
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
