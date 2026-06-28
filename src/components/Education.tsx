"use client";

import React from "react";

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
    <section id="education" className="py-20 print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-12 border-b border-slate-200 pb-4">
          Education // Academic Archive
        </h2>
        
        <div className="space-y-12">
          {educationList.map((edu, i) => (
            <div key={i} className="grid md:grid-cols-[200px,1fr] gap-4">
              <div className="text-[11px] uppercase tracking-widest font-medium text-slate-400">
                {edu.period}
              </div>
              <div className="border-l border-slate-200 pl-8">
                <h3 className="text-lg font-medium text-foreground">{edu.institution}</h3>
                <p className="text-sm text-slate-600 font-light mt-1">{edu.major}</p>
                <div className="mt-4 text-[10px] uppercase tracking-widest font-bold">
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
