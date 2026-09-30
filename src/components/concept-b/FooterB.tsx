"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { CREATOR } from "@/data/creator";
import { SOCIAL_LINKS } from "@/data/socials";
import { soundManager } from "@/lib/sound";

export const FooterB: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#07090E] py-12 px-4 sm:px-6 lg:px-8 text-neutral-400 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/15">
            <Image
              src={CREATOR.logo}
              alt="Silvatshu Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-bold text-white text-sm">
              {CREATOR.name}
            </span>
            <p className="text-xs text-neutral-400 flex items-center gap-1.5">
              <span>See you on the next stream</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              className="hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-neutral-500 font-mono">
          © 2026 Silvatshu. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
