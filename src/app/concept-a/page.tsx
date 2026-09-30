"use client";

import React, { useState } from "react";
import { ParticleBackground } from "@/components/concept-a/ParticleBackground";
import { NavbarA } from "@/components/concept-a/NavbarA";
import { HeroA } from "@/components/concept-a/HeroA";
import { SocialHubA } from "@/components/concept-a/SocialHubA";
import { StreamSectionA } from "@/components/concept-a/StreamSectionA";
import { HighlightsA } from "@/components/concept-a/HighlightsA";
import { CommunityA } from "@/components/concept-a/CommunityA";
import { FooterA } from "@/components/concept-a/FooterA";
import { CustomCursor } from "@/components/common/CustomCursor";
import { ConceptSwitcher } from "@/components/common/ConceptSwitcher";
import { ToastProvider } from "@/components/common/Toast";
import { useRouter } from "next/navigation";

export default function ConceptAPage() {
  const router = useRouter();

  const handleSwitch = (concept: "a" | "b") => {
    if (concept === "b") {
      router.push("/concept-b");
    }
  };

  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-[#07090D] text-white overflow-x-hidden selection:bg-[#53FC18]/30 selection:text-[#53FC18]">
        {/* Dynamic Canvas Particles & Ambient Cyber Grid */}
        <ParticleBackground />

        {/* Custom Subtle Desktop Cursor */}
        <CustomCursor />

        {/* Tactical Navbar */}
        <NavbarA />

        {/* Page Content */}
        <main className="relative z-10 space-y-8">
          <HeroA />
          <SocialHubA />
          <StreamSectionA />
          {/* Clips & Highlights section temporarily disabled until clips are ready */}
          {/* <HighlightsA /> */}
          <CommunityA />
        </main>

        {/* Footer */}
        <FooterA />

        {/* Live Concept Switcher Dock */}
        <ConceptSwitcher currentConcept="a" onSwitch={handleSwitch} />
      </div>
    </ToastProvider>
  );
}
