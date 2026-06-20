"use client";

import React, { useEffect, useState } from "react";

export default function SpotlightBg() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use client coordinates
      setCoords({ x: e.clientX, y: e.clientY });
      setOpacity(0.12); // subtle glow opacity
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 no-print"
      style={{
        background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, ${opacity}), transparent 80%)`,
      }}
    />
  );
}
