"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Radio, ExternalLink } from "lucide-react";
import { CREATOR } from "@/data/creator";
import { KICK_WEB_URL, KICK_ANDROID_INTENT } from "@/lib/kickLink";

export default function KickRedirectPage() {
  useEffect(() => {
    if (typeof navigator === "undefined") return;

    const ua = navigator.userAgent || "";
    const isAndroid = /android/i.test(ua);

    if (isAndroid) {
      window.location.href = KICK_ANDROID_INTENT;
    } else {
      window.location.href = KICK_WEB_URL;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#07090D] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl bg-neutral-900/90 border border-white/10 shadow-2xl space-y-6 backdrop-blur-xl">
        <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-[#53FC18] shadow-[0_0_30px_rgba(83,252,24,0.4)]">
          <Image
            src={CREATOR.logo}
            alt="Silvatshu Mascot"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#53FC18]/15 text-[#53FC18] border border-[#53FC18]/30">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>KICK OFFICIAL STREAM</span>
          </div>
          <h1 className="text-2xl font-black uppercase text-white tracking-wide">
            جاري فتح تطبيق Kick...
          </h1>
          <p className="text-xs text-neutral-400">
            يتم تحويلك الآن للبث المباشر على حساب سيلفاتشو الرسمي
          </p>
        </div>

        <div className="pt-4 space-y-3">
          <a
            href={KICK_ANDROID_INTENT}
            className="w-full py-4 rounded-xl bg-[#53FC18] text-black font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(83,252,24,0.5)] active:scale-95 transition-transform"
          >
            <span>فتح في التطبيق (Open in App)</span>
          </a>

          <a
            href={KICK_WEB_URL}
            className="w-full py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs flex items-center justify-center gap-2 border border-white/10 active:scale-95 transition-colors"
          >
            <span>أو المشاهدة في المتصفح</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
