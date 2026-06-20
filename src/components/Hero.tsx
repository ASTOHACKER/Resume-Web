"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Copy, Check, FileDown, Globe } from "lucide-react";

export default function Hero() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden print-container">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none no-print">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl dark:bg-indigo-500/20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10" />
        
        {/* Floating Code Symbols for Cyber Tech Vibe */}
        <div className="absolute top-[20%] right-[15%] text-sm font-mono opacity-15 dark:opacity-25 text-indigo-500 select-none animate-float" style={{ animationDelay: "1s" }}>
          &lt;next-js /&gt;
        </div>
        <div className="absolute top-[65%] left-[5%] text-sm font-mono opacity-15 dark:opacity-25 text-emerald-500 select-none animate-float" style={{ animationDelay: "2.5s" }}>
          const [skills] = useCoding();
        </div>
        <div className="absolute bottom-[15%] right-[40%] text-sm font-mono opacity-15 dark:opacity-25 text-purple-500 select-none animate-float" style={{ animationDelay: "4s" }}>
          await db.connect();
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left z-10 w-full">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 space-y-6">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase no-print"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              พร้อมร่วมงาน & ฝึกงานตำแหน่ง Programmer
            </motion.div>

            {/* Name and Title */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-display font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift"
              >
                นฤดม โอกาศ
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-display font-bold tracking-wide bg-gradient-to-r from-emerald-600 to-indigo-600 dark:from-emerald-400 dark:to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift"
              >
                Software Developer
              </motion.h2>
            </div>

            {/* Introduction paragraph (For Print - shows cleanly) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-light"
            >
              นักศึกษาไอทีชั้นปีที่ 2 ผู้มีความหลงใหลในการเขียนโค้ดและแก้ไขปัญหา
              เชี่ยวชาญการสร้างสรรค์เว็บแอปพลิเคชันที่ใช้งานได้จริงด้วย{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">TypeScript</span>,{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Next.js</span>,{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Supabase</span> และ{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">MongoDB</span>{" "}
              ชอบเรียนรู้เทคโนโลยีใหม่ๆ เสมอ และมุ่งมั่นที่จะนำทักษะมาต่อยอดในระดับการทำงานจริง
            </motion.p>

            {/* Contact Details Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left print-grid"
            >
              {/* Email */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 transition-all group print-card">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <Mail size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium">EMAIL</p>
                  <a
                    href="mailto:disasdrop@gmail.com"
                    className="text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-indigo-500 truncate block"
                  >
                    disasdrop@gmail.com
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard("disasdrop@gmail.com", "email")}
                  className="p-1.5 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded text-slate-400 transition-all no-print"
                  title="Copy email"
                >
                  {copiedText === "email" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 transition-all group print-card">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <Phone size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium">PHONE</p>
                  <a
                    href="tel:091-030-4318"
                    className="text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-indigo-500 block"
                  >
                    091-030-4318
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard("091-030-4318", "phone")}
                  className="p-1.5 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded text-slate-400 transition-all no-print"
                  title="Copy phone number"
                >
                  {copiedText === "phone" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 transition-all print-card">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium">LOCATION</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-zinc-300">
                    Sadao, Songkhla, Thailand
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4 no-print"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/30 hover:scale-[1.02] transform duration-200"
              >
                ติดต่อคุยงาน
              </a>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 border border-slate-300 hover:border-indigo-500 dark:border-zinc-700 dark:hover:border-indigo-500 text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800/50 rounded-xl font-medium transition-all hover:scale-[1.02] transform duration-200"
              >
                <FileDown size={18} />
                บันทึกเรซูเม่ (PDF)
              </button>
              <a
                href="https://github.com/ASTOHACKER"
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-slate-300 hover:border-slate-400 hover:text-indigo-500 dark:border-zinc-700 dark:hover:border-zinc-500 text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800/50 rounded-xl transition-all hover:scale-[1.02] transform duration-200"
                aria-label="GitHub Portfolio"
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Visual Showcase (E.g. Code Card / Tech Avatar Placeholder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 flex justify-center md:justify-end no-print animate-float"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass-panel p-6 flex flex-col justify-between shadow-[0_0_50px_-12px_rgba(99,102,241,0.25)] hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] dark:hover:shadow-[0_0_60px_rgba(99,102,241,0.35)] border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-400 dark:text-zinc-500">narudom.ts</span>
              </div>
              
              <div className="font-mono text-xs sm:text-sm text-left text-slate-600 dark:text-zinc-400 space-y-2 py-4">
                <p><span className="text-indigo-400">const</span> developer = &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-400">&apos;นฤดม โอกาศ&apos;</span>,</p>
                <p className="pl-4">role: <span className="text-emerald-400">&apos;Software Developer&apos;</span>,</p>
                <p className="pl-4">github: <span className="text-emerald-400">&apos;ASTOHACKER&apos;</span>,</p>
                <p className="pl-4">skills: [</p>
                <p className="pl-8"><span className="text-emerald-400">&apos;Next.js&apos;</span>, <span className="text-emerald-400">&apos;TypeScript&apos;</span>,</p>
                <p className="pl-8"><span className="text-emerald-400">&apos;Supabase&apos;</span>, <span className="text-emerald-400">&apos;MongoDB&apos;</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4">readyToWork: <span className="text-amber-400">true</span>,</p>
                <p className="pl-4">lookingForInternship: <span className="text-amber-400">true</span></p>
                <p>&#125;;</p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 dark:text-zinc-500 border-t border-slate-200/10 pt-3">
                <span className="flex items-center gap-1"><Globe size={12} className="text-indigo-500 animate-pulse" /> Active Student</span>
                <span>Songkhla, TH</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
