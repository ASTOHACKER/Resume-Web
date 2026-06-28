"use client";

import React from "react";
import AudioArchive from "@/components/AudioArchive";
import HackerWarning from "@/components/HackerWarning";
import ReadingProgress from "@/components/ReadingProgress";

export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ReadingProgress />
      {children}
      <HackerWarning />
      <div className="fixed bottom-6 left-6 z-50">
        <AudioArchive />
      </div>
    </div>
  );
}
