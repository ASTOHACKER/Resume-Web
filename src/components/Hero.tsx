"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-12 print-container">
      <div className="max-w-5xl mx-auto px-4 w-full text-center">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-900 dark:text-zinc-100 mb-6">
          นฤดม โอกาส
        </h1>
        <p className="text-sm text-zinc-500 uppercase tracking-[0.3em] mb-12">
          Software Developer // Archive 2026
        </p>

        <div className="flex items-center gap-8 justify-center no-print">
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
    </section>
  );
}
