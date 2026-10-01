"use client";

import React from "react";
import Image from "next/image";
import { Heart, ExternalLink } from "lucide-react";
import { CREATOR } from "@/data/creator";
import { SOCIAL_LINKS } from "@/data/socials";
import { soundManager } from "@/lib/sound";

export const FooterA: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#05070A] py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Signoff */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 shrink-0">
            <Image
              src={CREATOR.logo}
              alt="Silvatshu Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base tracking-wider">
                {CREATOR.name}
              </span>
              <span className="font-arabic text-xs font-semibold text-neutral-400">
                {CREATOR.nameArabic}
              </span>
            </div>
            <p className="text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
              <span>See you on the next stream</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
              <span className="font-arabic text-neutral-500" dir="rtl">
                • أشوفكم البث الجاي
              </span>
            </p>
          </div>
        </div>

        {/* Quick Social Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Copyright & Agency Credits */}
        <div className="text-xs font-mono text-neutral-500 text-center md:text-right space-y-1.5">
          <div>
            © 2026 Silvatshu. All rights reserved.
          </div>
          <div className="flex items-center justify-center md:justify-end gap-1.5 text-neutral-400 text-xs font-sans">
            <span>Built by</span>
            <a
              href="https://www.facebook.com/profile.php?id=61583323104981"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              className="inline-flex items-center gap-1 font-bold text-white hover:text-[#53FC18] transition-colors py-0.5 px-2 rounded-md bg-white/5 hover:bg-[#53FC18]/10 border border-white/10 hover:border-[#53FC18]/40 group"
              title="BS Solutions"
            >
              <span className="text-[#53FC18] font-extrabold tracking-wide">BS Solutions</span>
              <ExternalLink className="w-3 h-3 text-[#53FC18] opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
