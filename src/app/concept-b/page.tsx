"use client";

import React from "react";
import { AmbientBackground } from "@/components/concept-b/AmbientBackground";
import { NavbarB } from "@/components/concept-b/NavbarB";
import { HeroB } from "@/components/concept-b/HeroB";
import { SocialHubB } from "@/components/concept-b/SocialHubB";
import { StreamSectionB } from "@/components/concept-b/StreamSectionB";
import { HighlightsB } from "@/components/concept-b/HighlightsB";
import { CommunityB } from "@/components/concept-b/CommunityB";
import { FooterB } from "@/components/concept-b/FooterB";
import { CustomCursor } from "@/components/common/CustomCursor";
import { ConceptSwitcher } from "@/components/common/ConceptSwitcher";
import { ToastProvider } from "@/components/common/Toast";
import { useRouter } from "next/navigation";

export default function ConceptBPage() {
  const router = useRouter();

  const handleSwitch = (concept: "a" | "b") => {
    if (concept === "a") {
      router.push("/concept-a");
    }
  };

  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-[#0A0D14] text-white overflow-x-hidden selection:bg-amber-400/30 selection:text-amber-300">
        {/* Ambient Subtle Glow & Dot Grid */}
        <AmbientBackground />

        {/* Custom Subtle Desktop Cursor */}
        <CustomCursor />

        {/* Floating Capsule Navbar */}
        <NavbarB />

        {/* Page Content */}
        <main className="relative z-10 space-y-8">
          <HeroB />
          <SocialHubB />
          <StreamSectionB />
          {/* Clips & Highlights section temporarily disabled until clips are ready */}
          {/* <HighlightsB /> */}
          <CommunityB />
        </main>

        {/* Footer */}
        <FooterB />

        {/* Live Concept Switcher Dock */}
        <ConceptSwitcher currentConcept="b" onSwitch={handleSwitch} />
      </div>
    </ToastProvider>
  );
}
