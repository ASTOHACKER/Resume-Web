"use client";

import React, { useEffect, useState } from "react";

export default function HackerWarning() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-700 p-8 max-w-sm w-full text-center shadow-2xl">
        <h2 className="text-xl font-mono text-red-500 mb-4 animate-pulse">WARNING: SYSTEM BREACH</h2>
        <p className="text-zinc-300 font-mono text-sm mb-8">
          Unauthorized access detected. IP 127.0.0.1 logged. Archival security protocols initiated.
        </p>
        <button 
          onClick={() => setShow(false)}
          className="px-6 py-2 border border-zinc-500 text-zinc-100 hover:bg-zinc-800 transition-colors text-[10px] uppercase tracking-widest"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
}
