"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Radio, ExternalLink, Play, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/BrandIcons";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";

interface KickStatus {
  isLive: boolean;
  title?: string;
  category?: string;
  viewers?: number;
}

export const StreamSectionB: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [status, setStatus] = useState<KickStatus | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/kick-status");
        if (res.ok) {
          const data = await res.json();
          setStatus(data);
        }
      } catch {}
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 90000);
    return () => clearInterval(interval);
  }, []);

  const handleStartPlayer = () => {
    soundManager.playSuccess();
    setShowPlayer(true);
  };

  return (
    <section id="stream" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-8">
        
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

          <div className="flex items-center gap-2.5">
            {status?.isLive ? (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-500/20 border border-red-500/40 text-red-400 shadow-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>Live Now</span>
              </span>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-[#53FC18]" />
                <span>Channel: kick.com/silvatshu</span>
              </div>
            )}
          </div>
        </div>

        {/* Feature Stream Showcase Card */}
        <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-5 sm:p-7 backdrop-blur-2xl shadow-xl overflow-hidden relative space-y-6">
          
          {/* Header inside card */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white font-medium">
                1080p 60FPS
              </span>
              <span>• PUBG Mobile & FC Sessions</span>
            </div>

            {showPlayer && (
              <button
                onClick={() => setShowPlayer(false)}
                className="text-xs text-neutral-400 hover:text-white bg-neutral-800 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
              >
                إغلاق المشغل
              </button>
            )}
          </div>

          {/* Real Player / Preview Window */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg group">
            {showPlayer ? (
              /* Real Official Kick Player Embed */
              <iframe
                src="https://player.kick.com/silvatshu?autoplay=true&muted=false"
                title="Silvatshu Kick Broadcast"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            ) : (
              /* Preview Poster */
              <>
                <Image
                  src="/assets/stream-thumbnail-01.webp"
                  alt="Stream Preview"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 p-6 text-center">
                  <button
                    onClick={handleStartPlayer}
                    onMouseEnter={() => soundManager.playHover()}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#53FC18] text-black flex items-center justify-center shadow-[0_0_30px_rgba(83,252,24,0.6)] hover:scale-110 active:scale-95 transition-all"
                    aria-label="تشغيل البث"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>

                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {status?.isLive
                        ? "سيلفاتشو يبث الآن على KICK 🔴"
                        : "شاهد البث المباشر هنا في الموقع"}
                    </h3>
                    <p className="text-xs text-neutral-300 max-w-sm">
                      انقر لتشغيل البث المباشر فوراً أو للمتابعة عبر المنصة
                    </p>
                  </div>
                </div>

                <div className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 text-xs text-white">
                  <Radio className="w-3.5 h-3.5 text-[#53FC18]" />
                  <span>Kick Official Partner</span>
                </div>
              </>
            )}
          </div>

          {/* Stream Schedule & Action Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center pt-2 border-t border-white/10 text-xs">
            <div className="flex items-center gap-2.5 text-neutral-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-[11px] text-neutral-400 block">جدول البث</span>
                <span className="font-semibold text-white">بثوث يومية مسائية</span>
              </div>
            </div>

            <div className="text-center sm:text-left text-neutral-300">
              <span className="text-[11px] text-neutral-400 block">الجودة والألعاب</span>
              <span className="font-semibold text-white">1080p60 • PUBG & FC</span>
            </div>

            <div className="flex items-center justify-center sm:justify-end gap-2.5">
              <a
                href={CREATOR.kickUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playTap()}
                className="px-5 py-3 rounded-xl bg-[#53FC18] text-black font-extrabold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(83,252,24,0.4)] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <span>Watch on Kick</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={CREATOR.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playTap()}
                className="px-3.5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-white/10 hover:border-[#25D366] text-xs transition-all hover:scale-105 active:scale-95"
                title="قناة الواتساب"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
