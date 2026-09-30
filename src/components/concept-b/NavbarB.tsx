"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Radio, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { CREATOR } from "@/data/creator";
import { soundManager } from "@/lib/sound";

export const NavbarB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Socials", href: "#socials" },
    { label: "Stream", href: "#stream" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-2 sm:p-2.5 rounded-full bg-neutral-900/80 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl pointer-events-auto transition-all">
        
        {/* Creator Brand Identity */}
        <a
          href="#home"
          onMouseEnter={() => soundManager.playHover()}
          className="flex items-center gap-3 pl-2 sm:pl-3 group focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-neutral-800 shadow-sm group-hover:scale-105 transition-transform">
            <Image
              src={CREATOR.logo}
              alt="Silvatshu Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-300 transition-colors">
              {CREATOR.name}
            </span>
            <span className="text-[10px] font-arabic font-semibold text-neutral-400 group-hover:text-white transition-colors" dir="rtl">
              {CREATOR.nameArabic}
            </span>
          </div>
        </a>

        {/* Clean Center Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10 text-xs font-semibold text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => soundManager.playHover()}
              className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all focus:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Watch Live Action CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={CREATOR.kickUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playTap()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-bold text-xs tracking-wide hover:bg-neutral-200 transition-all shadow-md active:scale-95 group"
          >
            <span className="w-2 h-2 rounded-full bg-[#53FC18] animate-pulse" />
            <span>Watch Live</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center pr-1">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              soundManager.playTap();
            }}
            className="p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden mt-3 max-w-sm mx-auto rounded-3xl bg-neutral-950/95 border border-white/20 p-5 shadow-2xl backdrop-blur-2xl pointer-events-auto"
          >
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-semibold text-neutral-300 hover:text-white py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={CREATOR.kickUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-black font-bold text-xs shadow-md"
                >
                  <Radio className="w-4 h-4 text-emerald-600" />
                  <span>Watch Live on Kick</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
