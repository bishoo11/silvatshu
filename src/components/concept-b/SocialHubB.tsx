"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
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

export const SocialHubB: React.FC = () => {
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
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            CONNECT WITH SILVATSHU
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Find Silva Everywhere
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto font-arabic" dir="rtl">
            كل الحسابات الرسمية الموثقة في مكان واحد
          </p>
        </div>

        {/* Bento Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOCIAL_LINKS.map((item) => {
            const isFeatured = item.id === "kick" || item.id === "discord";

            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playTap()}
                className={`group relative flex flex-col justify-between p-6 rounded-3xl bg-neutral-900/80 border border-white/10 hover:border-white/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured ? "md:col-span-1 lg:col-span-1 bg-gradient-to-b from-neutral-900/90 to-neutral-900/60" : ""
                }`}
              >
                {/* Subtle Hover Gradient */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(350px circle at 50% 0%, ${item.glowColor}, transparent 70%)`,
                  }}
                />

                {/* Card Top */}
                <div className="flex items-center justify-between relative z-10 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: item.badgeBg }}
                  >
                    {getIcon(item.id)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 group-hover:text-white group-hover:bg-white/15 transition-all flex items-center gap-1">
                      <span>{item.actionText}</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-neutral-100">
                      {item.name}
                    </h3>
                    <span className="font-arabic text-xs text-neutral-400" dir="rtl">
                      {item.nameArabic}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-neutral-400">
                    {item.handle}
                  </p>

                  <p className="text-xs text-neutral-300 pt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
