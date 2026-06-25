"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, CornerDownLeft, Sparkles } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "สวัสดีครับ! ยินดีต้อนรับเข้าสู่พอร์ตโฟลิโอของผม ผมคือบอทข้อมูลจำลองของ นฤดม โอกาศ คุณอยากสอบถามข้อมูลส่วนไหนของผมดีครับ? (เลือกหัวข้อด้านล่างได้เลยครับ)",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { text: "🎓 ประวัติการศึกษา", value: "education" },
    { text: "💻 ทักษะการเขียนโค้ด", value: "skills" },
    { text: "🛠️ ประสบการณ์ทำงาน", value: "experience" },
    { text: "📞 ช่องทางการติดต่อ", value: "contact" },
    { text: "❓ เริ่มงานได้เมื่อไหร่?", value: "start_date" },
  ];

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    // 1. Core Information
    if (q.includes("edu") || q.includes("ศึกษา") || q.includes("เรียน")) {
      return "ประวัติการศึกษาของนฤดม:\n\n• ปริญญาตรี (ปี 2): คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยสงขลานครินทร์ (GPA: 3.43)\n• ปวส.: คอมพิวเตอร์/เทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคหาดใหญ่ (GPA: 3.51)\n• ปวช.: ช่างคอมพิวเตอร์ วิทยาลัยเทคนิคหาดใหญ่ (GPA: 3.19)";
    }

    if (q.includes("skill") || q.includes("ทักษะ") || q.includes("โค้ด")) {
      return "Technical Toolkit:\n\n• Frontend: Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion\n• Backend/DB: MongoDB, Supabase\n• Languages: TypeScript, Python, PHP\n• Ecosystem: Git, Figma, AI-assisted coding (Hermes/Cline)";
    }

    // 2. Interactive/Proactive
    if (q.includes("ทำไม") || q.includes("จุดเด่น") || q.includes("ทำไมต้องรับ")) {
      return "ทำไมต้องร่วมงานกับนฤดม?\n\n1. Technical & Practical: ปูพื้นฐานจากช่างเทคนิคมาสู่ Developer ทำให้เข้าใจทั้ง Hardware/Software เชิงลึก\n2. AI-Native Workflow: เชี่ยวชาญการใช้ AI Agent เพื่อเร่งสปีดการพัฒนา (เช่นโปรเจกต์นี้)\n3. Growth Mindset: พัฒนาและเรียนรู้ด้วยตนเองอย่างสม่ำเสมอ (Self-taught)";
    }

    if (q.includes("project") || q.includes("ผลงาน")) {
      return "โปรเจกต์ที่โดดเด่น:\n\n• Resume Web (ตัวที่คุณกำลังคุยอยู่): Next.js 16 + React 19 + Framer Motion (Glassmorphism UI)\n• FoodNEXT: แอปสั่งอาหารจำลอง\n• IT VERTEX Portal: ระบบจัดการฐานข้อมูล\n\nสามารถดู Source Code ทั้งหมดได้ที่ GitHub: ASTOHACKER";
    }

    // 3. Contact/Status
    if (q.includes("contact") || q.includes("ติดต่อ")) {
      return "ช่องทางการติดต่อ:\n\n• 📧 disasdrop@gmail.com\n• 📞 091-030-4318\n• 🔗 GitHub: ASTOHACKER";
    }

    if (q.includes("เริ่ม") || q.includes("ว่าง")) {
      return "พร้อมเริ่มงาน/ฝึกงานได้ทันทีครับ! สามารถนัดสัมภาษณ์ได้ผ่านอีเมลหรือเบอร์โทรศัพท์ที่ให้ไว้ได้เลยครับ";
    }

    return "อยากรู้อะไรเพิ่มเติมเกี่ยวกับนฤดมไหมครับ? ลองถามเกี่ยวกับ 'ผลงาน', 'จุดเด่น', หรือ 'ทักษะ' ได้เลยครับ";
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: "user",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botMsg: Message = {
        sender: "bot",
        text: getBotResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 850);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <section id="ai-assistant" className="py-20 bg-slate-50/30 dark:bg-zinc-950/10 border-y border-slate-200/40 dark:border-zinc-900/60 no-print">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 text-xs font-semibold mb-3">
            <Sparkles size={12} className="animate-spin-slow" />
            AI Interactive Resume
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-zinc-50">
            ผู้ช่วย AI ส่วนตัว
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 max-w-md mx-auto font-light">
            สอบถามข้อมูลและสัมภาษณ์ข้อมูลเบื้องต้นเกี่ยวกับ นฤดม โอกาศ ได้ผ่านห้องแชทอัจฉริยะนี้
          </p>
        </div>

        {/* Chat Box Container */}
        <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden flex flex-col h-[500px]">
          {/* Chat Header */}
          <div className="bg-indigo-600 dark:bg-indigo-950/80 px-4 py-3 flex items-center gap-3 text-white">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Bot size={20} className="text-indigo-200" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wide">NARUDOM AI ASSISTANT</h3>
              <p className="text-[10px] text-indigo-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" /> Online • ตอบกลับทันที
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-zinc-900/40">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs ${msg.sender === "user"
                      ? "bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
                      : "bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400"
                    }`}
                >
                  {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                </div>

                {/* Bubble */}
                <div
                  className={`p-3.5 rounded-2xl text-sm whitespace-pre-line leading-relaxed shadow-sm ${msg.sender === "user"
                      ? "bg-indigo-600 text-white rounded-tr-none"
                      : "bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 rounded-tl-none border border-slate-200/50 dark:border-zinc-700/30"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 max-w-[85%] mr-auto">
                <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-zinc-800 flex items-center justify-center text-slate-600 dark:text-zinc-400">
                  <Bot size={14} />
                </div>
                <div className="p-4 rounded-2xl rounded-tl-none bg-white dark:bg-zinc-800 border border-slate-200/50 dark:border-zinc-700/30 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-slate-400 dark:bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-slate-400 dark:bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-slate-400 dark:bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Box */}
          <div className="px-4 py-3 bg-white dark:bg-zinc-900 border-t border-slate-100 dark:border-zinc-800/80 flex flex-wrap gap-2">
            {suggestions.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(sug.text.substring(2))} // Remove emoji for queries
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 text-xs font-medium text-slate-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all text-left"
              >
                {sug.text}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="พิมพ์คำถามที่นี่..."
              className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-zinc-200"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-zinc-800 disabled:text-slate-400 dark:disabled:text-zinc-600 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
