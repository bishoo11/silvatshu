"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Radio, ExternalLink, Play, MessageSquare, Flame, ShieldCheck } from "lucide-react";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";

export const StreamSectionA: React.FC = () => {
  const [chatMessages] = useState([
    { user: "Omar_EG", text: "عاش يا سيلفا والله كلتش تاريخي 🔥🔥", badge: "VIP" },
    { user: "PUBG_Sniper99", text: "السكوب 8x في الدروب التاني يا وحش 🎯", badge: "Sub" },
    { user: "Kareem_Live", text: "أهو جه 😂 منور الرانك يا كينج!", badge: "Fan" },
    { user: "Alex_Squad", text: "Squad full wipe in 15 seconds GG 💀", badge: "Mod" },
    { user: "Mahmoud_77", text: "تعالوا ديسكورد بعد الروم يا شباب 🎮", badge: "VIP" },
  ]);

  return (
    <section id="stream" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#53FC18] tracking-widest uppercase mb-2">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>OFFICIAL STREAM HEADQUARTERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              WHEN SILVA GOES LIVE
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#53FC18]/15 border border-[#53FC18]/40 text-[#53FC18]">
              <span className="w-2 h-2 rounded-full bg-[#53FC18] animate-ping" />
              <span>LIVE HUB: KICK.COM/SILVATSHU</span>
            </span>
          </div>
        </div>

        {/* Main Stream Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Broadcast Visual Card (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-neutral-900/90 border border-white/10 p-4 sm:p-6 backdrop-blur-xl relative overflow-hidden group shadow-2xl flex flex-col justify-between">
            {/* Top Bar inside card */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#53FC18] text-black font-black text-sm flex items-center justify-center">
                  K
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">
                    Kick Stream Arena
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono">
                    High Bitrate 1080p60 • PUBG Mobile & Chaos
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#53FC18]" />
                  Verified Creator
                </span>
              </div>
            </div>

            {/* Video Canvas Banner */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
              <Image
                src="/assets/stream-thumbnail-01.webp"
                alt="Stream Preview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Overlay Play / Kick Link Trigger */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <a
                  href={CREATOR.kickUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  onClick={() => soundManager.playTap()}
                  className="w-20 h-20 rounded-full bg-[#53FC18] text-black flex items-center justify-center shadow-[0_0_35px_rgba(83,252,24,0.7)] group-hover:scale-110 active:scale-95 transition-all"
                  aria-label="Open Kick stream"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </a>

                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-black text-white uppercase drop-shadow">
                    WATCH SILVATSHU LIVE
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto font-medium">
                    Squad matches, customs, giveaways and unfiltered Egyptian streaming energy
                  </p>
                </div>
              </div>

              {/* Live Badge in top left of player */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 border border-white/20 px-3 py-1.5 rounded-xl backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#53FC18] animate-pulse" />
                <span className="text-xs font-mono font-bold text-white tracking-wider">
                  KICK BROADCAST
                </span>
              </div>
            </div>

            {/* Bottom Stream Actions */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-xs font-mono text-neutral-400">
                  Ready to join the chat?
                </span>
                <p className="text-sm font-arabic font-bold text-white" dir="rtl">
                  البث متاح مباشرة بدون اشتراك إجباري 💚
                </p>
              </div>

              <a
                href={CREATOR.kickUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playTap()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#53FC18] text-black font-extrabold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(83,252,24,0.6)] hover:scale-105 active:scale-95"
              >
                <span>OPEN KICK CHANNEL</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Chat & Community Ticker (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-neutral-900/90 border border-white/10 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <MessageSquare className="w-4 h-4 text-[#53FC18]" />
                  <span>Stream Chat Vibe</span>
                </div>
                <span className="text-[11px] font-mono text-[#53FC18] bg-[#53FC18]/10 px-2 py-0.5 rounded">
                  Community Pulse
                </span>
              </div>

              {/* Chat Feed */}
              <div className="space-y-3">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1 hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-neutral-300 flex items-center gap-1.5">
                        {msg.user}
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-800 text-neutral-400">
                          {msg.badge}
                        </span>
                      </span>
                      <Flame className="w-3 h-3 text-amber-400" />
                    </div>
                    <p className="text-xs text-neutral-200 font-arabic" dir="rtl">
                      {msg.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Invitation Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-neutral-900 border border-emerald-500/20 text-center space-y-2">
              <p className="text-xs font-bold text-neutral-200">
                Want to be part of the on-screen chaos?
              </p>
              <a
                href={CREATOR.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#53FC18] hover:underline"
              >
                <span>Join Discord Voice & Squad Calls</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
