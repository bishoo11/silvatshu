"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParticleBackground } from "@/components/concept-a/ParticleBackground";
import { NavbarA } from "@/components/concept-a/NavbarA";
import { HeroA } from "@/components/concept-a/HeroA";
import { SocialHubA } from "@/components/concept-a/SocialHubA";
import { StreamSectionA } from "@/components/concept-a/StreamSectionA";
import { HighlightsA } from "@/components/concept-a/HighlightsA";
import { CommunityA } from "@/components/concept-a/CommunityA";
import { FooterA } from "@/components/concept-a/FooterA";

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

export default function HomePage() {
  const [concept, setConcept] = useState<"a" | "b">("a");

  // Read URL query parameter or localStorage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlConcept = params.get("concept");
      if (urlConcept === "b") {
        setConcept("b");
      } else {
        const saved = localStorage.getItem("silvatshu_concept");
        if (saved === "b") setConcept("b");
      }
    }
  }, []);

  const handleConceptSwitch = (next: "a" | "b") => {
    setConcept(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("silvatshu_concept", next);
      const url = new URL(window.location.href);
      url.searchParams.set("concept", next);
      window.history.replaceState({}, "", url.toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <ToastProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Custom Subtle Desktop Cursor */}
        <CustomCursor />

        <AnimatePresence mode="wait">
          {concept === "a" ? (
            <motion.div
              key="concept-a"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#07090D] text-white selection:bg-[#53FC18]/30 selection:text-[#53FC18]"
            >
              {/* Dynamic Canvas Particles & Cyber Grid */}
              <ParticleBackground />

              {/* Tactical Gaming Navbar */}
              <NavbarA />

              {/* Main Content Sections */}
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
            </motion.div>
          ) : (
            <motion.div
              key="concept-b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0A0D14] text-white selection:bg-amber-400/30 selection:text-amber-300"
            >
              {/* Ambient Luxury Background */}
              <AmbientBackground />

              {/* Floating Capsule Navbar */}
              <NavbarB />

              {/* Main Content Sections */}
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Concept Switcher Dock */}
        <ConceptSwitcher
          currentConcept={concept}
          onSwitch={handleConceptSwitch}
        />
      </div>
    </ToastProvider>
  );
}
