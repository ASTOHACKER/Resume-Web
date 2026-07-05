"use client";

import React, { useEffect, useState } from "react";
import { ShieldAlert, X } from "lucide-react";

export default function HackerWarning() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="sticky top-12 left-0 right-0 z-40 bg-red-950/90 text-red-200 border-b border-red-900 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest flex items-center justify-between no-print backdrop-blur-xs transition-all animate-in fade-in slide-in-from-top duration-500">
      <div className="flex items-center gap-3">
        <ShieldAlert size={14} className="text-red-400 animate-pulse" />
        <span>
          {"[WARNING] SYSTEM ANOMALY DETECTED // ACCESS AT 127.0.0.1 LOGGED // SECURITY PROTOCOLS LIVE"}
        </span>
      </div>
      <button 
        onClick={() => setShow(false)}
        className="p-1 hover:text-white transition-colors cursor-pointer"
        aria-label="Acknowledge warning"
      >
        <X size={12} />
      </button>
    </div>
  );
}
