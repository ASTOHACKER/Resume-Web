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
    <section id="experience" className="py-20 print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-12 border-b border-slate-200 pb-4">
          Experience // Professional Archive
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="grid md:grid-cols-[200px,1fr] gap-4">
              <div className="text-[11px] uppercase tracking-widest font-medium text-slate-400">
                {exp.period}
              </div>
              <div className="border-l border-slate-200 pl-8">
                <h3 className="text-lg font-medium text-foreground">{exp.role}</h3>
                <p className="text-sm text-slate-600 font-light mt-1 mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="text-sm font-light text-slate-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
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
