"use client";

import React from "react";
import { 
  ArrowUpRight, 
  Sparkles,
  Zap
} from "lucide-react";
import { 
  KickIcon, 
  DiscordIcon, 
  InstagramIcon, 
  TikTokIcon, 
  YouTubeIcon, 
  FacebookIcon, 
  WhatsAppIcon 
} from "@/components/common/BrandIcons";
import { SOCIAL_LINKS } from "@/data/socials";
import { soundManager } from "@/lib/sound";
import { handleKickClick } from "@/lib/kickLink";

export const SocialHubA: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "kick":
        return <KickIcon className="w-6 h-6 text-[#53FC18]" />;
      case "discord":
        return <DiscordIcon className="w-6 h-6 text-[#5865F2]" />;
      case "instagram":
        return <InstagramIcon className="w-6 h-6 text-[#E1306C]" />;
      case "tiktok":
        return <TikTokIcon className="w-6 h-6 text-[#00F2FE]" />;
      case "youtube":
        return <YouTubeIcon className="w-6 h-6 text-[#FF0000]" />;
      case "facebook":
        return <FacebookIcon className="w-6 h-6 text-[#1877F2]" />;
      case "whatsapp":
        return <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="socials" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#53FC18] tracking-widest uppercase mb-2">
              <Zap className="w-4 h-4" />
              <span>THE OFFICIAL CHANNELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              EVERYWHERE SILVA LIVES
            </h2>
          </div>
          <div className="text-right">
            <span className="font-arabic text-lg sm:text-xl font-bold text-neutral-400" dir="rtl">
              تابع سيلفاتشو في كل مكان 🔥
            </span>
          </div>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={(e) => {
                soundManager.playTap();
                if (item.id === "kick") {
                  handleKickClick(e);
                }
              }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-neutral-900/90 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden"
            >
              {/* Dynamic Hover Glow based on Brand Color */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(400px circle at top right, ${item.glowColor}, transparent 70%)`,
                }}
              />

              {/* Card Top: Icon & Action arrow */}
              <div className="flex items-start justify-between relative z-10 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.badgeBg }}
                >
                  {getIcon(item.id)}
                </div>

                <div className="flex items-center gap-2">
                  {item.highlight && (
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border"
                      style={{
                        backgroundColor: item.badgeBg,
                        borderColor: item.brandColor,
                        color: item.brandColor,
                      }}
                    >
                      PRIMARY
                    </span>
                  )}
                  <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/15 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-white tracking-wide group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-arabic text-xs font-semibold text-neutral-400" dir="rtl">
                    {item.nameArabic}
                  </span>
                </div>

                <p className="text-xs font-mono text-neutral-400">
                  {item.handle}
                </p>

                <p className="text-sm text-neutral-300 pt-1 leading-snug">
                  {item.description}
                </p>
              </div>

              {/* Bottom Line Accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: item.brandColor }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
