"use client";

import React from "react";

export default function Experience() {
  const experiences = [
    {
      period: "2024",
      role: "IT Technician (Trainee)",
      company: "IT VERTEX",
      tasks: [
        "System diagnostics and hardware maintenance",
        "OS deployment and driver management",
        "Technical support and troubleshooting"
      ],
    },
    {
      period: "2022",
      role: "IT Support (Trainee)",
      company: "IT VERTEX",
      tasks: [
        "Helpdesk support (On-site & Remote)",
        "Software installation and updates",
        "User assistance and training"
      ],
    },
  ];

  return (
    <section id="experience" className="section-spacing print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          Experience // Professional Archive
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="print-card grid md:grid-cols-[200px,1fr] gap-4">
              <div className="text-[11px] uppercase tracking-widest font-medium text-slate-400 dark:text-zinc-600">
                {exp.period}
              </div>
              <div className="border-l border-zinc-200 dark:border-zinc-800 pl-8">
                <h3 className="text-lg font-medium text-foreground">{exp.role}</h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 font-normal mt-1 mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="text-sm font-normal text-slate-700 dark:text-zinc-300 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 dark:bg-zinc-600"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
