"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Sparkles, Flame, ShieldAlert, Crosshair, Crown, Gamepad2, CheckCircle2, Copy, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/BrandIcons";
import confetti from "canvas-confetti";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";
import { useToast } from "../common/Toast";
import { handleKickClick } from "@/lib/kickLink";

export const HeroA: React.FC = () => {
  const { showToast } = useToast();
  const [showLayqat, setShowLayqat] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const isAvatarClicking = useRef(false);

  const handleCopyPubgId = () => {
    soundManager.playTap();
    try {
      navigator.clipboard.writeText(CREATOR.pubgId);
      setCopiedId(true);
      showToast(`تم نسخ PUBG ID: ${CREATOR.pubgId} 🎮`, "check");
      setTimeout(() => setCopiedId(false), 2500);
    } catch {
      showToast(`PUBG ID: ${CREATOR.pubgId}`, "check");
    }
  };

  const handleAvatarClick = () => {
    if (isAvatarClicking.current) return;
    isAvatarClicking.current = true;
    setTimeout(() => {
      isAvatarClicking.current = false;
    }, 2400);

    soundManager.playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#53FC18", "#F59E0B", "#00F2FE", "#FFFFFF"],
      });
    } catch {}

    setShowLayqat(true);
    setTimeout(() => setShowLayqat(false), 2400);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Dynamic Gaming Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-[#53FC18]/12 via-[#00E5FF]/8 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Bold Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6 order-2 lg:order-1"
        >
          {/* Tactical Status Pill */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-emerald-500/30 shadow-[0_0_15px_rgba(83,252,24,0.15)] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#53FC18] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#53FC18]"></span>
            </span>
            <span className="text-xs font-mono font-bold text-neutral-200 tracking-wider">
              OFFICIAL HUB • {CREATOR.statusText}
            </span>
            <span className="font-arabic text-xs font-semibold text-emerald-400 pl-1 border-l border-white/10 shrink-0" dir="rtl">
              أهو جه 🔥
            </span>
          </div>

          {/* Main Title & Arabic Display */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-3 sm:gap-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                {CREATOR.name}
              </h1>
              <span
                className="font-arabic text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#53FC18] opacity-90 drop-shadow-[0_0_20px_rgba(83,252,24,0.4)]"
                dir="rtl"
              >
                {CREATOR.nameArabic}
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-neutral-300">
              {CREATOR.tagline}
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {CREATOR.bioA}
          </p>

          {/* Tactical Badges & PUBG ID */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-neutral-900/90 border border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(83,252,24,0.15)]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#53FC18]" />
              PUBG Mobile Partner
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-neutral-900/90 border border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              SHU Leader
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-neutral-900/90 border border-cyan-500/30 text-cyan-300">
              <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
              FC Player
            </span>

            {/* Interactive PUBG ID Copy Button */}
            <button
              onClick={handleCopyPubgId}
              onMouseEnter={() => soundManager.playHover()}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-neutral-900/90 border border-[#53FC18]/50 text-neutral-200 hover:text-white hover:border-[#53FC18] hover:bg-[#53FC18]/10 hover:shadow-[0_0_15px_rgba(83,252,24,0.3)] transition-all cursor-pointer group/id active:scale-95"
              title="Click to copy PUBG Mobile ID"
            >
              <span className="text-[#53FC18] font-black">ID:</span>
              <span className="tracking-wider select-all">{CREATOR.pubgId}</span>
              {copiedId ? (
                <Check className="w-3.5 h-3.5 text-[#53FC18]" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover/id:text-[#53FC18] transition-colors" />
              )}
            </button>
          </div>

          {/* Quick Creator Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
            {CREATOR.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/80 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center backdrop-blur-md hover:border-[#53FC18]/40 transition-colors shadow-sm"
              >
                <div
                  className="text-base sm:text-lg font-black font-mono tracking-tight"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[10px] font-arabic font-semibold text-neutral-500" dir="rtl">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
            <a
              href={CREATOR.kickUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={(e) => {
                soundManager.playTap();
                handleKickClick(e);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#53FC18] text-black font-extrabold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_35px_rgba(83,252,24,0.7)] hover:scale-[1.02] active:scale-95 group shadow-lg shadow-[#53FC18]/25"
            >
              <Radio className="w-5 h-5 animate-pulse" />
              <span>WATCH LIVE ON KICK</span>
            </a>

            <a
              href={CREATOR.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playTap()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white border border-white/15 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:border-[#25D366] hover:shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span>WHATSAPP CHANNEL</span>
            </a>
          </div>

          {/* Live stream check hint */}
          <div className="pt-2 text-xs font-mono text-neutral-500 flex items-center justify-center lg:justify-start gap-2">
            <span>● Check schedule & live status directly on Kick</span>
            <span className="text-neutral-600">•</span>
            <span className="font-arabic text-neutral-400" dir="rtl">
              البث المباشر مستمر 🎮
            </span>
          </div>
        </motion.div>

        {/* Right Column: High-Impact Real Portrait in Gaming Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 flex justify-center relative order-1 lg:order-2"
        >
          {/* Circular Neon Ambient Halo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#53FC18]/25 via-emerald-500/15 to-transparent rounded-full filter blur-2xl transform scale-95 pointer-events-none" />

          {/* Profile Card Container with interactive Easter egg */}
          <div
            onClick={handleAvatarClick}
            className="relative cursor-pointer group select-none"
            title="دوس هنا وشوف المفاجأة! لايقاااااط 🔥"
          >
            {/* Animated Layqat Popover Badge - Centered over avatar for 100% visibility on all screens */}
            <AnimatePresence>
              {showLayqat && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 480, damping: 22 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 whitespace-nowrap bg-[#53FC18] text-black font-black text-xl sm:text-2xl px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-[0_0_45px_rgba(83,252,24,0.95)] border-2 border-black flex items-center justify-center gap-2 pointer-events-none"
                >
                  <span className="font-arabic font-black tracking-wide drop-shadow-sm" dir="rtl">
                    لايقاااااط! 😂🔥
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Outer Cyber Frame */}
            <div className="relative w-64 sm:w-80 md:w-96 aspect-square rounded-3xl p-2 bg-gradient-to-b from-white/20 via-white/5 to-[#53FC18]/30 shadow-2xl transition-transform duration-500 group-hover:scale-105">
              
              {/* Inner Picture Frame */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-neutral-950 border border-white/10">
                <Image
                  src={CREATOR.avatar}
                  alt="Silvatshu Egyptian Streamer"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
                  priority
                />

                {/* Subtle dark vignette to ground image without altering facial naturalness */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-60" />

                {/* Tactical Corner HUD Marks */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#53FC18]" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#53FC18]" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#53FC18]" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#53FC18]" />

                {/* Interactive Mascot Badge centered at bottom of portrait */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-neutral-950/90 border border-white/15 px-3 py-1 sm:py-1.5 rounded-xl shadow-lg backdrop-blur-md group-hover:border-[#53FC18] transition-colors whitespace-nowrap z-10">
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={CREATOR.logo}
                      alt="Bear Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-arabic text-[11px] sm:text-xs font-bold text-white group-hover:text-[#53FC18] transition-colors" dir="rtl">
                    سيلفاتشو • Official 👑
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Tag */}
            <div className="absolute -top-3 -right-3 bg-[#53FC18] text-black text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg border border-black/20 flex items-center gap-1 transform rotate-3 group-hover:rotate-0 transition-transform">
              <Sparkles className="w-3 h-3" />
              <span>OFFICIAL</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
