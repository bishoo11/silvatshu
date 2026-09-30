export interface SocialLink {
  id: string;
  name: string;
  nameArabic: string;
  handle: string;
  description: string;
  actionText: string;
  url: string;
  brandColor: string;
  badgeBg: string;
  glowColor: string;
  highlight?: boolean;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "kick",
    name: "Kick",
    nameArabic: "كيك بث مباشر",
    handle: "silvatshu",
    description: "Watch the streams & live squad chaos",
    actionText: "Watch Live",
    url: "https://kick.com/silvatshu",
    brandColor: "#53FC18",
    badgeBg: "rgba(83, 252, 24, 0.12)",
    glowColor: "rgba(83, 252, 24, 0.35)",
    highlight: true,
  },
  {
    id: "discord",
    name: "Discord",
    nameArabic: "مجتمع الديسكورد",
    handle: "SILVATSHU Community",
    description: "Join the community & squad chats",
    actionText: "Join Server",
    url: "https://discord.com/invite/73evDfhdhv",
    brandColor: "#5865F2",
    badgeBg: "rgba(88, 101, 242, 0.12)",
    glowColor: "rgba(88, 101, 242, 0.35)",
    highlight: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    nameArabic: "انستغرام",
    handle: "@silvatshu",
    description: "Photos, updates & behind-the-scenes moments",
    actionText: "Follow",
    url: "https://www.instagram.com/silvatshu/",
    brandColor: "#E1306C",
    badgeBg: "rgba(225, 48, 108, 0.12)",
    glowColor: "rgba(225, 48, 108, 0.35)",
  },
  {
    id: "tiktok",
    name: "TikTok",
    nameArabic: "تيك توك",
    handle: "@silvatshu",
    description: "Short clips & viral moments",
    actionText: "Watch Clips",
    url: "https://www.tiktok.com/@silvatshu",
    brandColor: "#00F2FE",
    badgeBg: "rgba(0, 242, 254, 0.12)",
    glowColor: "rgba(0, 242, 254, 0.35)",
  },
  {
    id: "youtube",
    name: "YouTube",
    nameArabic: "يوتيوب",
    handle: "@silvatshuu",
    description: "Long-form videos, edited matches & highlights",
    actionText: "Subscribe",
    url: "https://youtube.com/@silvatshuu",
    brandColor: "#FF0000",
    badgeBg: "rgba(255, 0, 0, 0.12)",
    glowColor: "rgba(255, 0, 0, 0.35)",
  },
  {
    id: "facebook",
    name: "Facebook",
    nameArabic: "فيسبوك",
    handle: "SU056",
    description: "Follow the official Facebook page & updates",
    actionText: "Follow Page",
    url: "https://www.facebook.com/SU056",
    brandColor: "#1877F2",
    badgeBg: "rgba(24, 119, 242, 0.12)",
    glowColor: "rgba(24, 119, 242, 0.35)",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Channel",
    nameArabic: "قناة واتساب الرسمية",
    handle: "Silvatshu Official",
    description: "Instant stream notifications & announcement drops",
    actionText: "Join Channel",
    url: "https://whatsapp.com/channel/0029VayImrG6hENlY4lbhi2k",
    brandColor: "#25D366",
    badgeBg: "rgba(37, 211, 102, 0.12)",
    glowColor: "rgba(37, 211, 102, 0.35)",
  },
];
