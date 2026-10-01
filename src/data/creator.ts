export interface CreatorData {
  name: string;
  nameArabic: string;
  tagline: string;
  taglineAlt: string;
  bioA: string;
  bioB: string;
  avatar: string;
  logo: string;
  location: string;
  primaryGame: string;
  statusText: string;
  kickUrl: string;
  discordUrl: string;
  whatsappUrl: string;
  pubgId: string;
  easterEggs: string[];
  stats: {
    label: string;
    sublabel: string;
    value: string;
    color: string;
  }[];
}

export const CREATOR: CreatorData = {
  name: "SILVATSHU",
  nameArabic: "سيلفاتشو",
  tagline: "Gaming. Good Vibes.",
  taglineAlt: "Streamer • Gamer • Content Creator",
  bioA: "PUBG Mobile Partner • FC Player and more. Main Stream on KICK.",
  bioB: "PUBG Mobile Partner • FC Player and more. Main Stream on KICK. Catch the live broadcasts, connect across all platforms, and join the community.",
  avatar: "/assets/silvatshu-profile.png",
  logo: "/assets/silvatshu-logo.png",
  location: "Egypt",
  primaryGame: "PUBG Mobile & Variety Gaming",
  statusText: "ON KICK",
  kickUrl: "https://kick.com/silvatshu",
  discordUrl: "https://discord.com/invite/73evDfhdhv",
  whatsappUrl: "https://whatsapp.com/channel/0029VayImrG6hENlY4lbhi2k",
  pubgId: "586205178",
  easterEggs: [
    "لايقاااااط 😂🔥",
    "أهو جه 😂",
    "Silva detected. 🔥",
    "لايقاااااط.. منور يا برو ❤️",
    "إنت لسه هنا؟ تعالى الواتساب 🎮",
    "Drop at Pochinki or go home 💀",
  ],
  stats: [
    { label: "YOUTUBE ARMY", sublabel: "متابع", value: "+350K", color: "#53FC18" },
    { label: "PUBG PARTNER", sublabel: "شريك رسمي", value: "Official", color: "#FFFFFF" },
    { label: "CLAN LEADER", sublabel: "كلان شو", value: "#1 SHU", color: "#F59E0B" },
    { label: "KICK STREAM", sublabel: "بث مباشر", value: "1080p60", color: "#00E5FF" },
  ],
};
