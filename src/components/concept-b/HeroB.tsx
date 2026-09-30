"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Copy, Check, Sparkles, MapPin, Gamepad2, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/BrandIcons";
import confetti from "canvas-confetti";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";
import { useToast } from "../common/Toast";

export const HeroB: React.FC = () => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [showLayqat, setShowLayqat] = useState(false);

  const handleCopyLink = () => {
    soundManager.playSuccess();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("https://silvatshu.com");
      setCopied(true);
      showToast("Link copied to clipboard! 📋", "check");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePortraitClick = () => {
    soundManager.playSuccess();
    try {
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.5 },
        colors: ["#FFFFFF", "#F59E0B", "#10B981", "#6366F1"],
      });
    } catch {}
    setShowLayqat(true);
    setTimeout(() => setShowLayqat(false), 2400);
    showToast("لايقاااااط 😂🔥", "sparkles");
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center"
    >
      {/* Central Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-amber-500/10 via-white/5 to-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* Creator Portrait with Floating Social Satellites */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-block mx-auto mb-2"
        >
          {/* Subtle Ambient Ring */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/20 via-white/10 to-emerald-500/20 blur-xl opacity-75" />

          {/* Main Portrait Frame */}
          <div
            onClick={handlePortraitClick}
            className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-2 bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-2xl cursor-pointer group hover:scale-105 transition-all duration-300"
            title="دوس هنا وشوف المفاجأة! لايقاااااط 🔥"
          >
            {/* Animated Layqat Popover */}
            <AnimatePresence>
              {showLayqat && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1.15 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 500, damping: 22 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 whitespace-nowrap bg-gradient-to-r from-amber-400 via-emerald-400 to-[#53FC18] text-black font-black text-xl sm:text-2xl px-6 py-3 rounded-2xl shadow-[0_0_40px_rgba(83,252,24,0.9)] border-2 border-white flex items-center gap-2 pointer-events-none"
                >
                  <span className="font-arabic font-black drop-shadow-sm" dir="rtl">
                    لايقاااااط! 😂🔥
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-900 border-2 border-white/20">
              <Image
                src={CREATOR.avatar}
                alt="Silvatshu Portrait"
                fill
                className="object-cover object-top group-hover:scale-108 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
            </div>

            {/* Official Verification Badge */}
            <div className="absolute bottom-2 right-2 bg-neutral-950 border border-white/20 p-2 rounded-full shadow-lg group-hover:border-[#53FC18] transition-colors">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={CREATOR.logo}
                  alt="Mascot Badge"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating Satellite 1: PUBG Mobile Partner Pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-2 -left-6 sm:-left-12 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-emerald-500/40 shadow-xl backdrop-blur-md text-xs font-semibold text-white"
          >
            <span className="w-2 h-2 rounded-full bg-[#53FC18] animate-ping" />
            <span>PUBG Mobile Partner</span>
          </motion.div>

          {/* Floating Satellite 2: SHU Leader Pill */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -top-2 -right-4 sm:-right-8 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/40 shadow-xl backdrop-blur-md text-xs font-semibold text-amber-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SHU Leader 👑</span>
          </motion.div>
        </motion.div>

        {/* Creator Name & Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
              {CREATOR.name}
            </h1>
            <span className="font-arabic text-2xl sm:text-4xl font-bold text-neutral-400" dir="rtl">
              {CREATOR.nameArabic}
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl font-medium text-neutral-300 max-w-xl mx-auto">
            {CREATOR.taglineAlt}
          </p>

          <p className="text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
            {CREATOR.bioB}
          </p>
        </motion.div>

        {/* Fast Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
        >
          <a
            href={CREATOR.kickUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playTap()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-100 transition-all shadow-xl active:scale-95 group"
          >
            <Radio className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>Watch Live on Kick</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={CREATOR.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playTap()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white border border-white/15 font-semibold text-sm transition-all shadow-md active:scale-95 hover:border-[#25D366]/50"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Join WhatsApp Channel</span>
          </a>

          <button
            onClick={handleCopyLink}
            onMouseEnter={() => soundManager.playHover()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
            title="Copy link to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Share Bio Link</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Status ticker */}
        <div className="pt-2 text-xs text-neutral-500 flex items-center justify-center gap-2 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Status: Active Broadcaster • Always Connecting</span>
        </div>

      </div>
    </section>
  );
};
