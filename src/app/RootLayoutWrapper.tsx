"use client";

import React from "react";
import AudioArchive from "@/components/AudioArchive";
import HackerWarning from "@/components/HackerWarning";
import ReadingProgress from "@/components/ReadingProgress";
import CommandPalette from "@/components/CommandPalette";

export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ReadingProgress />
      {children}
      <HackerWarning />
      <AudioArchive />
      <CommandPalette />
    </div>
  );
}
