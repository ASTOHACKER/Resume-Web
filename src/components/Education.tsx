"use client";

import React from "react";

import Marginalia from "./Marginalia";

export default function Education() {
  const educationList = [
    {
      period: "2024 - Present",
      institution: "Prince of Songkla University",
      major: "Information Technology (IT)",
      gpa: "3.43",
    },
    {
      period: "2022 - 2024",
      institution: "Hatyai Technical College",
      major: "Information Technology",
      gpa: "3.51",
    },
    {
      period: "2019 - 2022",
      institution: "Hatyai Technical College",
      major: "Computer Engineering",
      gpa: "3.19",
    },
  ];

  return (
// 3. ปรับ Education.tsx ให้มี Marginalia
    <section id="education" className="section-spacing print-container relative">
      <Marginalia text="// academic archive" />
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          Education // Academic Archive
        </h2>
        
        <div className="space-y-12">
          {educationList.map((edu, i) => (
            <div key={i} className="print-card grid md:grid-cols-[200px,1fr] gap-4">
              <div className="text-[11px] uppercase tracking-widest font-medium text-slate-400 dark:text-zinc-600">
                {edu.period}
              </div>
              <div className="border-l border-zinc-200 dark:border-zinc-800 pl-8">
                <h3 className="text-lg font-medium text-foreground">{edu.institution}</h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 font-normal mt-1">{edu.major}</p>
                <div className="mt-4 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
                  GPA: {edu.gpa}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
