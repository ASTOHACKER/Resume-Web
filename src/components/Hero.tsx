"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-12 overflow-hidden print-container">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-[1fr,320px] gap-12 items-center">
          
          {/* Main Editorial Header */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-900 dark:text-zinc-100">
                นฤดม โอโอกาส
              </h1>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
                <span>Software Developer</span>
                <span className="w-1 h-1 bg-zinc-400 rounded-full" />
                <span>Archive 2026</span>
              </div>
            </div>

            <p className="max-w-lg text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              Available for Internship. 
              <br className="my-2"/>
              นักศึกษาไอทีที่เชื่อในการสร้างงานที่มีประสิทธิภาพ, เรียบง่าย และคงทน.
            </p>

            <div className="flex items-center gap-8 pt-4 no-print">
              <a href="#contact" className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-900 dark:border-zinc-100 pb-1 hover:opacity-60">
                Contact
              </a>
              <a href="https://github.com/ASTOHACKER" className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Editorial Code Block - Enhanced Width */}
          <div className="hidden md:block border border-zinc-200 dark:border-zinc-800 p-8 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 space-y-3 leading-relaxed">
              <p>// System Status</p>
              <p className="text-zinc-900 dark:text-zinc-100">const identity = &#123;</p>
              <p className="pl-4">name: <span className="text-emerald-600">&apos;Narudom&apos;</span>,</p>
              <p className="pl-4">role: <span className="text-emerald-600">&apos;Developer&apos;</span>,</p>
              <p className="pl-4">major: <span className="text-emerald-600">&apos;IT PSU&apos;</span>,</p>
              <p className="pl-4">status: <span className="text-indigo-600">available</span></p>
              <p>&#125;;</p>
              <p className="pt-4">// Last updated: 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
