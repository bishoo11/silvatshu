"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, Radio } from "lucide-react";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";
import { handleKickClick } from "@/lib/kickLink";

export const NavbarA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", nameAr: "الرئيسية", href: "#home" },
    { name: "SOCIALS", nameAr: "منصاتي", href: "#socials" },
    { name: "STREAM", nameAr: "البث المباشر", href: "#stream" },
    { name: "COMMUNITY", nameAr: "المجتمع", href: "#community" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#07090D]/85 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Creator Identity */}
        <a
          href="#home"
          onMouseEnter={() => soundManager.playHover()}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-emerald-500/40 bg-neutral-900 group-hover:border-[#53FC18] transition-colors shadow-[0_0_15px_rgba(83,252,24,0.2)] shrink-0">
            <Image
              src={CREATOR.logo}
              alt="Silvatshu Mascot"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-xl tracking-wider text-white group-hover:text-[#53FC18] transition-colors">
                {CREATOR.name}
              </span>
              <span className="font-arabic text-xs font-bold text-neutral-400 group-hover:text-emerald-300 transition-colors">
                {CREATOR.nameArabic}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#53FC18] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#53FC18]"></span>
              </span>
              <span className="text-emerald-400 font-semibold tracking-wide">
                {CREATOR.statusText}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundManager.playHover()}
              className="hover:text-[#53FC18] transition-colors relative py-1 focus:outline-none"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={CREATOR.kickUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={(e) => {
              soundManager.playTap();
              handleKickClick(e);
            }}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-[#53FC18] text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(83,252,24,0.6)] active:scale-95 flex items-center gap-2"
          >
            <Radio className="w-4 h-4 animate-pulse" />
            <span>WATCH LIVE</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Burger Toggle */}
        <div className="flex md:hidden items-center gap-2.5">
          <a
            href={CREATOR.kickUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleKickClick(e)}
            className="px-3 py-1.5 rounded-lg bg-[#53FC18] text-black font-extrabold text-xs tracking-wide shrink-0 shadow-sm"
          >
            LIVE
          </a>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              soundManager.playTap();
            }}
            className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white shrink-0 active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-[#07090D] overflow-hidden"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    soundManager.playTap();
                  }}
                  className="flex items-center justify-between text-sm font-bold tracking-wider text-neutral-200 hover:text-[#53FC18] py-3 px-2 border-b border-white/5 active:bg-white/5 rounded-lg transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="font-arabic text-xs font-semibold text-neutral-400">{link.nameAr}</span>
                </a>
              ))}
              <div className="pt-3">
                <a
                  href={CREATOR.kickUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    setIsOpen(false);
                    handleKickClick(e);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#53FC18] text-black font-extrabold text-sm tracking-wide shadow-lg shadow-[#53FC18]/20 active:scale-95 transition-transform"
                >
                  <Radio className="w-4 h-4 animate-pulse" />
                  <span>WATCH LIVE ON KICK</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
