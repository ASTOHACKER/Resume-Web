"use client";

import { useState } from "react";
import FocusModeToggle from "@/components/FocusModeToggle";
import AudioArchive from "@/components/AudioArchive";
import HackerWarning from "@/components/HackerWarning";

export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <HackerWarning />
      <div className="fixed bottom-6 left-6 z-50">
        <AudioArchive />
      </div>
    </div>
  );
}
