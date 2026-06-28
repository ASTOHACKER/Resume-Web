"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 print-container">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-12 border-b border-slate-200 pb-4">
          Contact // Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-medium text-foreground">
              Let's connect and build something together.
            </h3>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              ผมยินดีที่จะแลกเปลี่ยนมุมมองหรือร่วมงานในโปรเจกต์ที่น่าสนใจ คุณสามารถติดต่อผมได้โดยตรงผ่านช่องทางด้านล่างครับ
            </p>
          </div>

          <div className="border-l border-slate-200 pl-8 space-y-6">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">Email</h4>
              <a href="mailto:disasdrop@gmail.com" className="text-sm border-b border-slate-800 pb-0.5 hover:opacity-50 transition-opacity">
                disasdrop@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">Phone</h4>
              <a href="tel:0910304318" className="text-sm border-b border-slate-800 pb-0.5 hover:opacity-50 transition-opacity">
                091-030-4318
              </a>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">Location</h4>
              <p className="text-sm text-slate-600">Sadao, Songkhla, Thailand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
