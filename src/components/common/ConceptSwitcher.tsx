"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Share2, Layers, ChevronUp, ChevronDown, Sparkles, Rocket } from "lucide-react";
import { soundManager } from "@/lib/sound";
import { useToast } from "./Toast";

interface ConceptSwitcherProps {
  currentConcept: "a" | "b";
  onSwitch: (concept: "a" | "b") => void;
}

export const ConceptSwitcher: React.FC<ConceptSwitcherProps> = ({
  currentConcept,
  onSwitch,
}) => {
  const [isMuted, setIsMuted] = useState(() => soundManager.isMuted);
  const [isExpanded, setIsExpanded] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "1") {
        onSwitch("a");
        soundManager.playTap();
      } else if (e.altKey && e.key === "2") {
        onSwitch("b");
        soundManager.playTap();
      } else if (e.key === "m" && !e.ctrlKey && !e.metaKey && document.activeElement?.tagName !== "INPUT") {
        const next = soundManager.toggleMute();
        setIsMuted(next);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onSwitch]);

  const toggleSound = () => {
    const next = soundManager.toggleMute();
    setIsMuted(next);
    showToast(next ? "Audio muted" : "Audio enabled 🔊", "sparkles");
  };

  const handleShare = () => {
    soundManager.playSuccess();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("https://silvatshu.com");
      showToast("Official bio link copied: silvatshu.com 🔗", "check");
    }
  };

  return (
    <aside 
      aria-label="Concept Preview Bar"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-xl pointer-events-none"
    >
      <motion.div
        layout
        className="pointer-events-auto mx-auto rounded-2xl bg-neutral-950/90 border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl p-2 transition-all"
      >
        <div className="flex items-center justify-between gap-2">
          {/* Concept Tabs */}
          <div className="flex items-center bg-black/60 p-1 rounded-xl border border-white/10 shrink-0">
            <button
              onClick={() => {
                onSwitch("a");
                soundManager.playTap();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                currentConcept === "a"
                  ? "text-black shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {currentConcept === "a" && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-[#53FC18] rounded-lg"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              <Rocket className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Concept A</span>
              <span className="relative z-10 text-[10px] hidden sm:inline opacity-80">
                (Universe)
              </span>
            </button>

            <button
              onClick={() => {
                onSwitch("b");
                soundManager.playTap();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                currentConcept === "b"
                  ? "text-black shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {currentConcept === "b" && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-white rounded-lg"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              <Sparkles className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Concept B</span>
              <span className="relative z-10 text-[10px] hidden sm:inline opacity-80">
                (Social)
              </span>
            </button>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleSound}
              onMouseEnter={() => soundManager.playHover()}
              title={isMuted ? "Unmute audio effects" : "Mute audio"}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#53FC18]" />
              )}
            </button>

            <button
              onClick={handleShare}
              onMouseEnter={() => soundManager.playHover()}
              title="Copy official bio link"
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 text-neutral-500 hover:text-neutral-300 rounded-lg hover:bg-white/5 transition-colors"
              title="Toggle preview details"
            >
              {isExpanded ? (
                <ChevronDown className="w-3.5 h-3.5" />
              ) : (
                <ChevronUp className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Collapsible preview info banner */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400 px-1">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#53FC18]" />
                  <span>
                    {currentConcept === "a"
                      ? "The Silvatshu Universe • Cinematic & Gaming"
                      : "Silvatshu Social • Clean & Creator Brand"}
                  </span>
                </span>
                <span className="text-neutral-500 hidden sm:inline">
                  Shortcuts: <kbd className="bg-white/10 px-1 py-0.5 rounded text-[10px]">Alt+1</kbd> / <kbd className="bg-white/10 px-1 py-0.5 rounded text-[10px]">Alt+2</kbd>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </aside>
  );
};
