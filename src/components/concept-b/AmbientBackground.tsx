"use client";

import React from "react";

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Sleek Deep Slate Canvas */}
      <div className="absolute inset-0 bg-[#0A0D14]" />

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-35" />

      {/* Warm Ambient Radial Lights */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-b from-amber-500/10 via-emerald-500/8 to-transparent blur-[130px]" />
      <div className="absolute top-1/2 -left-48 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[160px]" />
      <div className="absolute bottom-10 -right-48 w-[650px] h-[650px] rounded-full bg-cyan-500/6 blur-[150px]" />

      {/* Subtle Noise Texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
    </div>
  );
};
