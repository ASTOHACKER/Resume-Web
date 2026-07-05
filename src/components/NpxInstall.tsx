"use client";

import React, { useState } from "react";

export default function NpxInstall() {
  const [copied, setCopied] = useState(false);
  const command = "npx narudom-resume@latest";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-spacing-xl print-container border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-8">{"// ARCHIVAL INSTALLATION"}</h2>
        <div className="group relative inline-flex items-center gap-4 bg-zinc-900 text-zinc-100 p-6 font-mono text-sm shadow-2xl">
          <span>$</span>
          <code className="text-emerald-400">{command}</code>
          <button 
            onClick={handleCopy}
            className="ml-4 px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-[10px] uppercase transition-colors"
          >
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
        <p className="mt-8 text-[10px] uppercase tracking-widest text-zinc-400">
          Run this in your terminal to initialize my digital archive locally.
        </p>
      </div>
    </section>
  );
}
