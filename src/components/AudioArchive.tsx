"use client";

import React, { useState, useEffect } from "react";

export default function AudioArchive() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "l70B7oRYKoo"; // 9Lana - 九尾

  useEffect(() => {
    const handleToggle = () => {
      setIsPlaying((prev) => !prev);
    };
    window.addEventListener("toggle-soundtrack", handleToggle);
    return () => window.removeEventListener("toggle-soundtrack", handleToggle);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 no-print">
      {isPlaying && (
        <iframe
          width="0"
          height="0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`}
          allow="autoplay"
          className="hidden"
        />
      )}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="px-3 py-1 border border-zinc-200 dark:border-zinc-800 bg-background/50 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
      >
        {isPlaying ? "SOUNDTRACK // 9Lana - 九尾" : "SOUNDTRACK // OFF"}
      </button>
    </div>
  );
}
