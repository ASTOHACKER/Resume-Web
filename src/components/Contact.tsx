"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", contactInfo: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactInfo || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", contactInfo: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 print-container">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-zinc-50 border-l-4 border-indigo-600 pl-4 inline-block">
            ติดต่อฉัน
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-light">
            สนใจติดต่อสัมภาษณ์งาน สหกิจศึกษา หรือฝึกงาน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Details Column */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-zinc-200">
              มาสร้างสรรค์ระบบที่ยอดเยี่ยมไปด้วยกันครับ
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              คุณสามารถแอดไลน์ โทรสายตรง ส่งอีเมล หรือใช้แบบฟอร์มด้านข้างส่งข้อความด่วนมาหาผมได้ทันที 
              ผมจะรีบติดต่อกลับโดยเร็วที่สุดครับ
            </p>

            <div className="space-y-4 pt-4">
              {/* Call Card */}
              <a
                href="tel:091-030-4318"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 hover:bg-slate-100/50 dark:hover:bg-zinc-900 transition-all group print-card"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-wider">เบอร์โทรศัพท์</h4>
                  <p className="text-base font-semibold text-slate-700 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    091-030-4318
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:disasdrop@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 hover:bg-slate-100/50 dark:hover:bg-zinc-900 transition-all group print-card"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-wider">อีเมล</h4>
                  <p className="text-base font-semibold text-slate-700 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                    disasdrop@gmail.com
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/50 dark:border-zinc-800/50 print-card">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-wider">ที่อยู่ติดต่อ</h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-zinc-200 leading-tight">
                    3/2 อ.สะเดา จ.สงขลา 90120
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3 h-full no-print">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/80 shadow-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.12)] dark:hover:shadow-[0_0_40px_rgba(99,102,241,0.08)] hover:border-indigo-500/20 transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-center">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-bounce">
                    <CheckCircle size={36} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-slate-800 dark:text-zinc-100">ส่งข้อความสำเร็จแล้ว!</h4>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-xs font-light">
                      ขอบคุณสำหรับการติดต่อ นฤดมจะรีบอ่านและตอบกลับไปยังข้อมูลการติดต่อของคุณทันทีครับ
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-100 mb-4">
                    ฝากข้อความถึงฉัน
                  </h3>
                  
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-wider">ชื่อหรือหน่วยงานของคุณ</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="เช่น บ. เทคจำกัด หรือ คุณสมยศ"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-zinc-200"
                    />
                  </div>

                  {/* Contact Info Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-wider">อีเมล / เบอร์โทรสำหรับติดต่อกลับ</label>
                    <input
                      type="text"
                      required
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      placeholder="เช่น email@example.com หรือ 081-xxxxxxx"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-zinc-200"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-wider">รายละเอียดข้อความ</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="พิมพ์ข้อความของคุณที่นี่..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-zinc-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-zinc-800 text-white rounded-xl font-medium transition-all shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20"
                  >
                    <Send size={16} />
                    {isSubmitting ? "กำลังส่งข้อความ..." : "ส่งข้อความติดต่อ"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
