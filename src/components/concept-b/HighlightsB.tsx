"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import { HIGHLIGHTS, HighlightItem } from "@/data/highlights";
import { VideoModal } from "../common/VideoModal";
import { soundManager } from "@/lib/sound";

export const HighlightsB: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<HighlightItem | null>(null);

  const handleOpen = (item: HighlightItem) => {
    soundManager.playTap();
    setSelectedItem(item);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              MOMENTS & CLIPS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              From The Streams
            </h2>
          </div>

          <a
            href="https://youtube.com/@silvatshuu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <span>Explore all on YouTube</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpen(item)}
              onMouseEnter={() => soundManager.playHover()}
              className="group cursor-pointer rounded-3xl bg-neutral-900/80 border border-white/10 hover:border-white/25 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {item.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <span className="text-[11px] font-mono text-neutral-400">
                  {item.platform} • {item.game}
                </span>

                <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs font-arabic text-neutral-400" dir="rtl">
                  {item.titleArabic}
                </p>
              </div>
            </div>
          ))}
        </div>

        <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
};
