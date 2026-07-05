import React from 'react';
import Marginalia from './Marginalia';

export default function Docs() {
  return (
    <section className="section-spacing-xl print-container">
      <Marginalia text="// system documentation" />
      <div className="max-w-4xl mx-auto px-4 prose prose-zinc dark:prose-invert">
        <h1 className="text-4xl font-medium tracking-tighter mb-8">Archival System Documentation</h1>
        <p className="text-zinc-500 mb-12">v2.3 // Engineering Overview</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold mb-4">{"// 01. Architecture"}</h2>
            <p>This project is an <strong>Editorial Archive System</strong>, prioritizing typography-driven hierarchy and print-ready structural integrity over generic card-based UI.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">{"// 02. Engineering Standards"}</h2>
            <div className="grid grid-cols-2 gap-4 border border-zinc-900 p-4 font-mono text-[11px]">
              <div>CI/CD</div><div>Vercel Edge Ready</div>
              <div>Typography</div><div>Outfit / Prompt</div>
              <div>Styling</div><div>Tailwind v4</div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">{"// 03. Diagnostic Log"}</h2>
            <div className="bg-zinc-950 text-zinc-100 p-6 font-mono text-[10px]">
              <p>v2.1: Marginalia Integration</p>
              <p>v2.2: CI/CD Maturity</p>
              <p>v2.3: Audio & Security Integration</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
