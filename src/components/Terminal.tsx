"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface HistoryItem {
  command: string;
  output: string;
}

export default function Terminal() {
  const { toggleTheme } = useTheme();
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: "พิมพ์ 'help' เพื่อดูคำสั่งทั้งหมดที่สามารถใช้งานได้ในการสอบถามข้อมูลของผม",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    let output = "";
    const lowerCmd = cmd.toLowerCase();

    switch (lowerCmd) {
      case "help":
        output = `คำสั่งที่ใช้งานได้:
  about       - แสดงประวัติย่อของ นฤดม โอกาศ
  skills      - แสดงทักษะความสามารถและเทคโนโลยีที่ถนัด
  education   - แสดงประวัติการศึกษา
  experience  - แสดงประวัติและหน้าที่ความรับผิดชอบช่วงฝึกงาน
  contact     - แสดงช่องทางการติดต่อด่วน
  theme       - สลับธีมหน้าจอเว็บ (Light/Dark Mode)
  clear       - ล้างหน้าจอคอลโซล
  help        - แสดงรายการคำสั่งทั้งหมด`;
        break;
      case "about":
        output = "นฤดม โอกาศ (Software Developer) นักศึกษาไอทีชั้นปีที่ 2 คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์ ผู้มีความสามารถในการเขียนโปรแกรม พัฒนาเว็บแอปพลิเคชัน และแก้ปัญหาระบบหลังบ้านได้ดี รวมถึงมีทักษะงานฮาร์ดแวร์เชิงเทคนิค";
        break;
      case "skills":
        output = `ทักษะทางเทคนิค:
  - Languages: TypeScript, JavaScript, PHP, Python
  - Frontend: Next.js, Tailwind CSS, React
  - Mobile: React Native (Expo)
  - Backend/Database: MongoDB, Supabase, Git
  - Specialities: AI for Dev, System Analysis, Diagnostics, Hardware Repair`;
        break;
      case "education":
        output = `ประวัติการศึกษา:
  1. ปริญญาตรี (กำลังเรียน ปี 2): ม.สงขลานครินทร์ (IT) | GPA: 3.43
  2. ปวส. เทคโนโลยีสารสนเทศ: วิทยาลัยเทคนิคหาดใหญ่ | GPA: 3.51
  3. ปวช. ช่างคอมพิวเตอร์: วิทยาลัยเทคนิคหาดใหญ่ | GPA: 3.19`;
        break;
      case "experience":
        output = `ประสบการณ์ฝึกงาน (IT VERTEX):
  - IT Support (Trainee): ซัพพอร์ตทั่วไป, ทั้งแบบ On-site และ Remote, ลงระบบ OS
  - IT Technician (Trainee): วิเคราะห์ ตรวจสภาพ ซ่อมแซม ปรับแต่งฮาร์ดแวร์โน้ตบุ๊กและคอมพิวเตอร์เชิงลึก (รวมระยะเวลา 2 ปี)`;
        break;
      case "contact":
        output = "อีเมล: disasdrop@gmail.com | โทร: 091-030-4318 | ที่อยู่: สะเดา สงขลา | GitHub: github.com/ASTOHACKER";
        break;
      case "theme":
        toggleTheme();
        output = "สลับธีมหน้าจอ (Light/Dark Mode) เรียบร้อยแล้ว!";
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        output = `คำสั่ง '${cmd}' ไม่รู้จัก. พิมพ์ 'help' เพื่อดูคำสั่งทั้งหมด`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 380;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars = "010101100101TSNEXTJSDEVELOPERABCGHJKLMOPQRTUVXYZ<>{}+-*=";
    const charArr = chars.split("");
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(9, 9, 11, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(16, 185, 129, 0.15)"; // Soft matrix emerald green rain
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArr[Math.floor(Math.random() * charArr.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="terminal-section" className="py-12 bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 no-print">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-xs font-semibold mb-2">
            <TerminalIcon size={12} />
            Developer Shell Mode
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-800 dark:text-zinc-50">
            Interactive Developer Terminal
          </h2>
          <p className="mt-1.5 text-xs text-slate-500 dark:text-zinc-400 font-light">
            ถ้าชอบความรวดเร็ว ลองคุยผ่าน Shell Terminal คอนโซลของนักพัฒนาตัวจริง
          </p>
        </div>

        {/* Terminal Body */}
        <div
          onClick={focusInput}
          className="rounded-2xl border border-slate-350 dark:border-zinc-800 bg-[#09090b] text-[#38bdf8] p-5 shadow-2xl h-[380px] overflow-y-auto font-mono text-xs sm:text-sm flex flex-col cursor-text relative"
        >
          {/* Matrix canvas rain background */}
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 rounded-2xl" />

          {/* Top Panel bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-900 border-b border-zinc-800/80 px-4 flex items-center justify-between text-zinc-500 select-none z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
              visitor@narudom-dev:~
            </span>
            <span className="w-8" />
          </div>

          <div className="flex-1 mt-6 space-y-3.5 relative z-10">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command !== "welcome" && (
                  <div className="flex items-center gap-1 text-slate-400">
                    <span className="text-emerald-500">visitor@narudom-dev:~$</span>
                    <span>{item.command}</span>
                  </div>
                )}
                <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-1.5 text-slate-400 border-t border-zinc-800/60 pt-3 mt-4 relative z-10">
            <span className="text-emerald-500 flex-shrink-0">visitor@narudom-dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent text-slate-100 border-none outline-none focus:ring-0 p-0 m-0 font-mono text-xs sm:text-sm select-text"
              autoFocus
              placeholder="ลองพิมพ์ 'help' หรือ 'skills'..."
              aria-label="Terminal input"
            />
            <button type="submit" className="text-zinc-600 hover:text-zinc-400 focus:outline-none transition-colors">
              <CornerDownLeft size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
