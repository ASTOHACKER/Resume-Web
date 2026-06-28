import React from "react";

export default function Marginalia({ text }: { text: string }) {
  return (
    <div className="hidden lg:block absolute -left-32 top-0 w-24 text-[9px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 rotate-180 [writing-mode:vertical-rl]">
      {text}
    </div>
  );
}
