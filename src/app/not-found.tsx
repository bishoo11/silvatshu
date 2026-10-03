import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Radio, Home, ShieldAlert } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/BrandIcons";
import { CREATOR } from "@/data/creator";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white flex flex-col items-center justify-center p-4 sm:p-6 text-center relative overflow-hidden selection:bg-[#53FC18]/30 selection:text-[#53FC18]">
      {/* Background glow & grid */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#53FC18]/15 via-red-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-lg w-full p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-white/10 shadow-2xl space-y-6 backdrop-blur-xl relative z-10">
        {/* Mascot Header */}
        <div className="relative w-24 h-24 mx-auto rounded-3xl overflow-hidden border-2 border-[#53FC18] shadow-[0_0_35px_rgba(83,252,24,0.35)] p-1 bg-black">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={CREATOR.logo}
              alt="Silvatshu Mascot"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 404 Tactical Badge */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-red-500/15 text-red-400 border border-red-500/30">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span>ERROR 404 • ZONE NOT FOUND</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            شكلك تهت في بوشينكي! 😂💀
          </h1>

          <p className="text-sm text-neutral-300 font-arabic leading-relaxed" dir="rtl">
            الصفحة اللي بتدور عليها مش موجودة أو غير مسارها.. ارجع للوبي أو ادخل البث المباشر مع سيلفاتشو!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-3">
          <Link
            href="/"
            className="w-full py-4 rounded-xl bg-[#53FC18] text-black font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(83,252,24,0.5)] hover:bg-[#45dc13] active:scale-95 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>العودة للرئيسية (BACK HOME)</span>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/kick"
              className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 active:scale-95 transition-all"
            >
              <Radio className="w-3.5 h-3.5 text-[#53FC18] animate-pulse" />
              <span>بث كيك المباشر</span>
            </Link>

            <a
              href={CREATOR.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 hover:border-[#25D366] active:scale-95 transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>قناة الواتساب</span>
            </a>
          </div>
        </div>

        {/* Return hint */}
        <div className="pt-2 text-[11px] font-mono text-neutral-500">
          <span>● SILVATSHU OFFICIAL HUB • 2026</span>
        </div>
      </div>
    </div>
  );
}
