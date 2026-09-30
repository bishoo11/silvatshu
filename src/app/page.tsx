"use client";

import React from "react";
import { ParticleBackground } from "@/components/concept-a/ParticleBackground";
import { NavbarA } from "@/components/concept-a/NavbarA";
import { HeroA } from "@/components/concept-a/HeroA";
import { SocialHubA } from "@/components/concept-a/SocialHubA";
import { StreamSectionA } from "@/components/concept-a/StreamSectionA";
import { CommunityA } from "@/components/concept-a/CommunityA";
import { FooterA } from "@/components/concept-a/FooterA";
import { CustomCursor } from "@/components/common/CustomCursor";
import { ToastProvider } from "@/components/common/Toast";

export default function HomePage() {
  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-[#07090D] text-white overflow-x-hidden selection:bg-[#53FC18]/30 selection:text-[#53FC18]">
        {/* Dynamic Canvas Particles & Cyber Grid */}
        <ParticleBackground />

        {/* Custom High-Precision Tactical Desktop Cursor */}
        <CustomCursor />

        {/* Tactical Gaming Navbar */}
        <NavbarA />

        {/* Main Content Sections */}
        <main className="relative z-10 space-y-8">
          <HeroA />
          <SocialHubA />
          <StreamSectionA />
          <CommunityA />
        </main>

        {/* Footer */}
        <FooterA />
      </div>
    </ToastProvider>
  );
}
