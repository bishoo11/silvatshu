"use client";

import React, { useEffect, useRef } from "react";

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Subtle particle stars
    const particleCount = Math.min(Math.floor(width / 22), 55);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25 - 0.1,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulse) * 0.008;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(83, 252, 24, ${Math.max(0.1, Math.min(p.alpha, 0.7))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian gradient */}
      <div className="absolute inset-0 bg-[#07090D]" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* Atmospheric Neon Spotlights */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#53FC18]/10 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-[#00E5FF]/8 blur-[150px]" />
      <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] rounded-full bg-[#F59E0B]/8 blur-[160px]" />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Subtle Scanline/Vignette edge */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80" />
    </div>
  );
};
