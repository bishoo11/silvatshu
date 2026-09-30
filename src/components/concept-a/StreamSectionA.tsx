"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Radio, ExternalLink, Play, Sparkles, ShieldCheck, RefreshCw, Volume2, MonitorPlay } from "lucide-react";
import { WhatsAppIcon, KickIcon } from "@/components/common/BrandIcons";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";
import { handleKickClick } from "@/lib/kickLink";

interface KickStatus {
  isLive: boolean;
  title?: string;
  category?: string;
  viewers?: number;
}

export const StreamSectionA: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [status, setStatus] = useState<KickStatus | null>(null);
  const [checking, setChecking] = useState(false);

  const checkLiveStatus = async () => {
    setChecking(true);
    try {
      const res = await fetch("/api/kick-status");
      if (res.ok) {
        const data = await res.json();
        setStatus(data);
        if (data.isLive) {
          // If streamer is live, we can suggest or auto-load player
        }
      }
    } catch {
      // Fallback
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    checkLiveStatus();
    // Poll every 90 seconds
    const interval = setInterval(checkLiveStatus, 90000);
    return () => clearInterval(interval);
  }, []);

  const handleStartPlayer = () => {
    soundManager.playSuccess();
    setShowPlayer(true);
  };

  return (
    <section id="stream" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-black/40 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#53FC18] tracking-widest uppercase mb-1.5">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>OFFICIAL STREAM HEADQUARTERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              WHEN SILVA GOES LIVE
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            {status?.isLive ? (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-red-500/20 border border-red-500/50 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span>LIVE NOW ON KICK</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#53FC18]/15 border border-[#53FC18]/40 text-[#53FC18]">
                <span className="w-2 h-2 rounded-full bg-[#53FC18]" />
                <span>OFFICIAL KICK CHANNEL</span>
              </span>
            )}
          </div>
        </div>

        {/* Main Stream Broadcast Card (Centered & Clean) */}
        <div className="rounded-3xl bg-neutral-900/90 border border-white/10 p-4 sm:p-7 backdrop-blur-xl relative overflow-hidden shadow-2xl space-y-6">
          
          {/* Card Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#53FC18] text-black font-black text-base flex items-center justify-center shadow-[0_0_15px_rgba(83,252,24,0.3)]">
                K
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    Kick Stream Arena
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-300">
                    <ShieldCheck className="w-3 h-3 text-[#53FC18]" />
                    Verified Creator
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-mono">
                  {status?.isLive && status.title
                    ? status.title
                    : "High Bitrate 1080p60 • PUBG Mobile & FC Sessions"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {showPlayer && (
                <button
                  onClick={() => setShowPlayer(false)}
                  className="px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono border border-white/10 transition-colors"
                >
                  إغلاق المشغل
                </button>
              )}
              <a
                href={CREATOR.kickUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={(e) => {
                  soundManager.playTap();
                  handleKickClick(e);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#53FC18]/15 hover:bg-[#53FC18]/25 border border-[#53FC18]/40 text-[#53FC18] text-xs font-mono font-bold transition-all"
              >
                <span>kick.com/silvatshu</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Player Area (16:9 Aspect Ratio) */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner group">
            {showPlayer ? (
              /* Real Official Kick Player Embed */
              <iframe
                src="https://player.kick.com/silvatshu?autoplay=true&muted=false"
                title="Silvatshu Kick Live Stream"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            ) : (
              /* High-Impact Interactive Preview Poster */
              <>
                <Image
                  src="/assets/stream-thumbnail-01.webp"
                  alt="Silvatshu Live Broadcast"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700 opacity-85"
                />
                
                {/* Cyber grid & dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />

                {/* Live Banner pill inside window */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/85 border border-white/20 px-3 py-1.5 rounded-xl backdrop-blur-md">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      status?.isLive ? "bg-red-500 animate-ping" : "bg-[#53FC18] animate-pulse"
                    }`}
                  />
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    {status?.isLive ? "LIVE BROADCAST" : "KICK BROADCAST"}
                  </span>
                </div>

                {/* Central Play Trigger Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-4 p-4 sm:p-6 text-center">
                  <button
                    onClick={handleStartPlayer}
                    onMouseEnter={() => soundManager.playHover()}
                    className="w-14 h-14 sm:w-22 sm:h-22 rounded-full bg-[#53FC18] text-black flex items-center justify-center shadow-[0_0_35px_rgba(83,252,24,0.75)] hover:scale-110 active:scale-95 transition-all group/btn shrink-0"
                    aria-label="تشغيل البث المباشر"
                  >
                    <Play className="w-6 h-6 sm:w-10 sm:h-10 fill-current ml-0.5 sm:ml-1 transition-transform group-hover/btn:scale-105" />
                  </button>

                  <div className="space-y-1 max-w-sm sm:max-w-md">
                    <h4 className="text-sm sm:text-xl font-black text-white uppercase drop-shadow tracking-wide">
                      {status?.isLive
                        ? "سيلفاتشو لايف دلوقتي على KICK 🔥"
                        : "شغّل البث المباشر هنا في الموقع"}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-300 font-medium line-clamp-2">
                      دوس لتشغيل مشغل كيك الرسمي ومتابعة البث مباشرة بدون مغادرة الموقع
                    </p>
                  </div>
                </div>

                {/* Bottom Overlay Hint */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 bg-black/70 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 hidden sm:flex">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Volume2 className="w-3.5 h-3.5 text-[#53FC18]" />
                    مشغل كيك الرسمي • 1080p 60FPS
                  </span>
                  <span className="font-arabic text-neutral-300" dir="rtl">
                    البث متاح للجميع مجاناً 💚
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Broadcast Details & Action CTAs */}
          <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-t border-white/10">
            <div className="text-center md:text-left space-y-0.5">
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                منصة البث المباشر
              </span>
              <p className="text-sm font-bold text-white flex items-center justify-center md:justify-start gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#53FC18]" />
                KICK Official Channel
              </p>
            </div>

            <div className="text-center space-y-0.5">
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                الألعاب والفقرات
              </span>
              <p className="text-sm font-bold text-neutral-200">
                PUBG Mobile • FC • Just Chatting
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-3 pt-2 md:pt-0">
              <a
                href={CREATOR.kickUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={(e) => {
                  soundManager.playTap();
                  handleKickClick(e);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#53FC18] text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(83,252,24,0.6)] hover:scale-105 active:scale-95"
              >
                <span>OPEN ON KICK</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={CREATOR.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playTap()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-white/10 hover:border-[#25D366] font-bold text-xs tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
                title="إشعارات البث المباشر على الواتساب"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span className="hidden sm:inline">ALERTS</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
