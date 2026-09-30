"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Smile } from "lucide-react";
import { WhatsAppIcon, KickIcon, InstagramIcon } from "@/components/common/BrandIcons";
import confetti from "canvas-confetti";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";
import { useToast } from "../common/Toast";
import { handleKickClick } from "@/lib/kickLink";

export const CommunityA: React.FC = () => {
  const { showToast } = useToast();
  const [clickedEasterEgg, setClickedEasterEgg] = useState(false);

  const handleSurprise = () => {
    soundManager.playSuccess();
    setClickedEasterEgg(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#53FC18", "#5865F2", "#E1306C", "#F59E0B"],
      });
    } catch {}
    showToast("إنت لسه هنا؟ 😂 منور يا غالي في مجتمع سيلفاتشو ❤️", "sparkles");
  };

  return (
    <section id="community" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-emerald-600/10 via-[#5865F2]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        
        {/* Mascot Avatar Avatar Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block relative cursor-pointer"
          onClick={handleSurprise}
          title="Click me! 😂"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-3xl p-1.5 bg-gradient-to-tr from-[#53FC18] via-emerald-400 to-[#5865F2] shadow-[0_0_35px_rgba(83,252,24,0.35)] hover:scale-110 active:scale-95 transition-transform duration-300">
            <div className="w-full h-full rounded-[20px] overflow-hidden bg-neutral-950 relative">
              <Image
                src={CREATOR.logo}
                alt="Silvatshu Bear"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-neutral-900 border border-white/20 text-neutral-300 whitespace-nowrap">
            أهو جه 😂
          </span>
        </motion.div>

        {/* Emotional Headline */}
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#53FC18] uppercase">
            THE INNER CIRCLE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            YOU&apos;RE ALREADY HERE.
          </h2>
          <p className="text-xl sm:text-3xl font-extrabold text-neutral-200 font-arabic px-2" dir="rtl">
            منور يا غالي.. لو انت هنا يبقي انت قريب مني ❤️
          </p>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto px-4">
            From squad voice channels to live watch parties, memes, and daily updates — the community is always active.
          </p>
        </div>

        {/* Community Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4 max-w-md sm:max-w-none mx-auto w-full">
          <a
            href={CREATOR.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playTap()}
            className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800 text-white border border-white/15 hover:border-[#25D366] font-bold text-sm tracking-wide uppercase shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            <span>WHATSAPP CHANNEL</span>
          </a>

          <a
            href={CREATOR.kickUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={(e) => {
              soundManager.playTap();
              handleKickClick(e);
            }}
            className="flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-[#53FC18] hover:bg-[#45dc13] text-black font-black text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(83,252,24,0.65)] ring-2 ring-[#53FC18]/60 transition-all hover:scale-105 active:scale-95"
          >
            <KickIcon className="w-5 h-5 text-black" />
            <span>FOLLOW ON KICK</span>
          </a>

          <a
            href="https://www.instagram.com/silvatshu/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playTap()}
            className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800 text-white border border-white/15 hover:border-[#E1306C] font-bold text-sm tracking-wide uppercase shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <InstagramIcon className="w-5 h-5 text-[#E1306C]" />
            <span>INSTAGRAM</span>
          </a>
        </div>

        {/* Egyptian Microcopy Banner */}
        <div className="pt-6">
          <button
            onClick={handleSurprise}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Click for secret message</span>
            <span className="font-arabic text-neutral-500">• دوس هنا لو إنت جدع</span>
          </button>
        </div>

      </div>
    </section>
  );
};
