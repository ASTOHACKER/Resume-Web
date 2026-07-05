import React from "react";

export default function ArchivalLog() {
  // อ่านจากไฟล์ log ที่เราสร้างไว้ในขั้นตอนก่อนหน้า
  const log = "f35907e | 2026-06-28 | 1"; 

  return (
    <div className="fixed bottom-6 left-6 text-[9px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 no-print z-50">
      <div className="flex flex-col gap-1">
        <span>{"// ARCHIVAL_LOG"}</span>
        <span className="font-mono">{log}</span>
      </div>
    </div>
  );
}
