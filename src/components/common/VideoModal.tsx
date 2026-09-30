"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Play, Sparkles } from "lucide-react";
import { HighlightItem } from "@/data/highlights";

interface VideoModalProps {
  item: HighlightItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-neutral-900 border border-white/15 shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#53FC18]/15 text-[#53FC18] border border-[#53FC18]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  {item.category}
                </span>
                <span className="text-xs text-neutral-400 font-medium">
                  {item.game}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Visual Preview */}
            <div className="relative aspect-video w-full bg-black group overflow-hidden">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Play Badge Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-[#53FC18] text-black flex items-center justify-center shadow-lg shadow-[#53FC18]/30 hover:scale-110 active:scale-95 transition-transform"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </a>
                <span className="text-xs text-neutral-300 font-medium bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                  Click to open full stream on {item.platform}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 sm:p-6 bg-gradient-to-b from-neutral-900 to-black space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-arabic text-neutral-400" dir="rtl">
                  {item.titleArabic}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                <span className="text-xs text-neutral-500">
                  {item.isDemo ? "Official preview slot • Connects directly to live source" : "Recorded live"}
                </span>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#53FC18] hover:bg-[#45dc13] text-black font-semibold text-sm transition-transform active:scale-95 shadow-md shadow-[#53FC18]/20"
                >
                  <span>Watch on {item.platform}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
