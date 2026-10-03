"use client";

import React from "react";
import Image from "next/image";
import { WhatsAppIcon, KickIcon, InstagramIcon } from "@/components/common/BrandIcons";
import confetti from "canvas-confetti";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";
import { useToast } from "../common/Toast";

export const CommunityB: React.FC = () => {
  const { showToast } = useToast();

  const handleConfetti = () => {
    soundManager.playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {}
    showToast("تعالى الديسكورد والواتساب، مستنينك هناك! 🎮", "sparkles");
  };

  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-900/70 border border-white/10 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl text-center space-y-8 relative overflow-hidden">
        
        {/* Soft Ambient Background Glow inside card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-white/10 to-transparent blur-3xl pointer-events-none" />

        {/* Mascot badge */}
        <div
          onClick={handleConfetti}
          className="relative inline-block cursor-pointer group"
          title="Click to celebrate! 🎉"
        >
          <div className="w-20 h-20 mx-auto rounded-full p-1 bg-gradient-to-b from-white/30 to-white/5 border border-white/20 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src={CREATOR.logo}
                alt="Silvatshu Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Copy */}
        <div className="space-y-3 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            THE OFFICIAL COMMUNITY
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            You&apos;re Already Here.
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-neutral-300 font-arabic" dir="rtl">
            منور يا غالي.. لو انت هنا يبقي انت قريب مني ❤️
          </p>

          <p className="text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Follow the WhatsApp channel for instant broadcast notifications — or catch the streams and moments on Kick and Instagram.
          </p>
        </div>

        {/* Action Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
          <a
            href={CREATOR.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playTap()}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-white border border-white/10 hover:border-[#25D366] font-semibold text-sm transition-all hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Channel</span>
          </a>

          <a
            href={CREATOR.kickUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playTap()}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#53FC18] hover:bg-[#45dc13] text-black font-extrabold text-sm shadow-[0_0_25px_rgba(83,252,24,0.5)] transition-all hover:scale-110 active:scale-95"
          >
            <KickIcon className="w-4 h-4 text-black" />
            <span>Follow on Kick</span>
          </a>

          <a
            href="https://www.instagram.com/silvatshu/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playTap()}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-white border border-white/10 hover:border-[#E1306C] font-semibold text-sm transition-all hover:scale-105 active:scale-95"
          >
            <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
            <span>Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
