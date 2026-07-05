"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-end pt-32 pb-24 print-container">
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* Breadcrumb Narrative */}
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-12 font-mono">
          narudom / archive / home / 2026.06.28
        </div>

        <div className="grid md:grid-cols-[1fr,400px] gap-20 items-end">
          <div>
            <div className="text-center md:text-left">
              <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-zinc-900 dark:text-zinc-100 mb-8">
                Narudom O-kart
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold mb-8">
                Software Developer // Archive 2026
              </p>
            </div>

            {/* Archival Installation */}
            <div className="flex justify-center md:justify-start mb-8">
              <div className="inline-flex items-center gap-3 bg-zinc-900 text-zinc-100 px-4 py-2 font-mono text-[10px]">
                <span>$</span>
                <code className="text-emerald-400">npx narudom-resume@latest</code>
              </div>
            </div>

            <div className="flex items-center gap-8 justify-center md:justify-start no-print">
              <a href="https://www.facebook.com/narudom.okars/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-900 dark:border-zinc-100 pb-1 hover:opacity-60 transition-opacity">
                Facebook
              </a>
              <a href="https://www.instagram.com/nar_udom/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-900 dark:border-zinc-100 pb-1 hover:opacity-60 transition-opacity">
                Instagram
              </a>
              <a href="https://github.com/ASTOHACKER" className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-900 dark:border-zinc-100 pb-1 hover:opacity-60 transition-opacity">
                GitHub
              </a>
            </div>
          </div>

          {/* Original Code Block */}
          <div className="hidden md:block border border-zinc-200 dark:border-zinc-800 p-8 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 space-y-3 leading-relaxed animate-pulse">
              <p className="opacity-70">{"// Current Status"}</p>
              <p className="text-zinc-900 dark:text-zinc-100">const identity = &#123;</p>
              <p className="pl-4">name: <span className="text-emerald-600">&apos;Narudom&apos;</span>,</p>
              <p className="pl-4">role: <span className="text-emerald-600">&apos;Developer&apos;</span>,</p>
              <p className="pl-4">major: <span className="text-emerald-600">&apos;IT PSU&apos;</span>,</p>
              <p className="pl-4">status: <span className="text-indigo-600">available</span></p>
              <p>&#125;;</p>
              <p className="pt-4 animate-in fade-in duration-1000 delay-500">{"// Ready for new challenges..."}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
