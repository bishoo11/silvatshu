"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Radio, ExternalLink, Play, Clock, Sparkles } from "lucide-react";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";

export const StreamSectionB: React.FC = () => {
  return (
    <section id="stream" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              OFFICIAL BROADCAST
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Live on Kick
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#53FC18] animate-pulse" />
            <span>Channel: kick.com/silvatshu</span>
          </div>
        </div>

        {/* Feature Stream Showcase Card */}
        <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-xl overflow-hidden relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Stream Window (7 Cols) */}
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
              <Image
                src="/assets/stream-thumbnail-01.webp"
                alt="Stream Preview"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={CREATOR.kickUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  onClick={() => soundManager.playTap()}
                  className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all"
                  aria-label="Watch stream"
                >
                  <Play className="w-6 h-6 fill-current ml-1 text-black" />
                </a>
              </div>

              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 text-[11px] font-medium text-white">
                <Radio className="w-3 h-3 text-[#53FC18]" />
                <span>Kick Official Partner</span>
              </div>
            </div>

            {/* Stream Info & CTA (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-3 h-3" />
                  <span>Interactive Broadcasts</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  High-energy gaming sessions & community nights
                </h3>

                <p className="text-sm font-arabic text-neutral-300" dir="rtl">
                  انضم للبث المباشر وشارك في الرومات والسوالف لايف
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-neutral-400 border-y border-white/10 py-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Stream Schedule</span>
                  </span>
                  <span className="font-semibold text-neutral-200">Daily Evening Broadcasts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Main Category</span>
                  <span className="font-semibold text-neutral-200">PUBG Mobile & Just Chatting</span>
                </div>
              </div>

              <a
                href={CREATOR.kickUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playTap()}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-sm transition-all shadow-md active:scale-95"
              >
                <span>Watch Live on Kick</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
