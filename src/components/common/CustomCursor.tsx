"use client";

import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    // Add class to body to hide native cursor
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instant update of the pinpoint dot to guarantee 100% zero-latency pointing accuracy
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");
        setIsHovered(Boolean(clickable));
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove("custom-cursor-active");
    };

    const onMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add("custom-cursor-active");
    };

    // Smooth lerp loop for the trailing targeting ring and glow
    const render = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);

      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      document.body.classList.remove("custom-cursor-active");
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Ambient soft glow trailing behind */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-[#53FC18]/15 via-emerald-500/10 to-transparent blur-3xl opacity-50 will-change-transform"
      />

      {/* 2. Trailing Tactical Targeting Ring */}
      <div
        ref={ringRef}
        style={{
          width: isHovered ? "46px" : isClicked ? "24px" : "32px",
          height: isHovered ? "46px" : isClicked ? "24px" : "32px",
          borderColor: isHovered ? "#53FC18" : "rgba(255, 255, 255, 0.45)",
          backgroundColor: isHovered ? "rgba(83, 252, 24, 0.1)" : isClicked ? "rgba(83, 252, 24, 0.25)" : "transparent",
        }}
        className="absolute top-0 left-0 rounded-full border border-dashed transition-[width,height,border-color,background-color] duration-150 ease-out will-change-transform flex items-center justify-center shadow-[0_0_12px_rgba(83,252,24,0.3)]"
      >
        {/* Subtle crosshair ticks on hover */}
        {isHovered && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#53FC18] rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#53FC18] rounded-full" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#53FC18] rounded-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#53FC18] rounded-full" />
          </>
        )}
      </div>

      {/* 3. High-Precision Instant Pointing Dot (Zero Latency - Exactly at Hotspot) */}
      <div
        ref={dotRef}
        style={{
          width: isClicked ? "6px" : isHovered ? "4px" : "5px",
          height: isClicked ? "6px" : isHovered ? "4px" : "5px",
          backgroundColor: isHovered ? "#53FC18" : "#FFFFFF",
          boxShadow: isHovered
            ? "0 0 10px #53FC18, 0 0 4px #53FC18"
            : "0 0 8px rgba(255, 255, 255, 0.8)",
        }}
        className="absolute top-0 left-0 rounded-full will-change-transform pointer-events-none transition-[width,height,background-color] duration-100"
      />
    </div>
  );
};
