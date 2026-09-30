"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, Film } from "lucide-react";
import { HIGHLIGHTS, HighlightItem } from "@/data/highlights";
import { VideoModal } from "../common/VideoModal";
import { soundManager } from "@/lib/sound";

export const HighlightsA: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<HighlightItem | null>(null);

  const handleOpen = (item: HighlightItem) => {
    soundManager.playTap();
    setSelectedItem(item);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#53FC18] tracking-widest uppercase mb-2">
              <Film className="w-4 h-4" />
              <span>STREAM MOMENTS & ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              RECENT CHAOS
            </h2>
          </div>
          <div className="text-right">
            <span className="font-arabic text-lg sm:text-xl font-bold text-neutral-400" dir="rtl">
              أقوى اللقطات والكلتشات 🎬
            </span>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpen(item)}
              onMouseEnter={() => soundManager.playHover()}
              className="group relative rounded-2xl bg-neutral-900/90 border border-white/10 overflow-hidden hover:border-[#53FC18]/60 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />

                {/* Badge Category */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/75 border border-white/20 text-white backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Duration tag */}
                {item.duration && (
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-neutral-300 border border-white/10">
                      {item.duration}
                    </span>
                  </div>
                )}

                {/* Centered Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#53FC18] text-black flex items-center justify-center shadow-lg shadow-[#53FC18]/40 scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-1">
                    <span>{item.game}</span>
                    <span className="text-emerald-400">{item.platform}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="font-arabic" dir="rtl">
                    {item.titleArabic}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
};
