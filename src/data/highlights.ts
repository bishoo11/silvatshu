export interface HighlightItem {
  id: string;
  title: string;
  titleArabic: string;
  category: "Clip" | "Stream" | "Highlight" | "Community";
  game: string;
  thumbnail: string;
  duration?: string;
  platform: "Kick" | "YouTube" | "TikTok";
  url: string;
  isDemo?: boolean;
}

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: "clip-01",
    title: "1v4 Airdrop Defense at Pochinki",
    titleArabic: "كلتش أسطوري في بوشينكي ١ ضد ٤",
    category: "Clip",
    game: "PUBG Mobile",
    thumbnail: "/assets/clip-01.webp",
    duration: "0:45",
    platform: "TikTok",
    url: "https://www.tiktok.com/@silvatshu",
    isDemo: true,
  },
  {
    id: "stream-01",
    title: "Night Squad Ranked Push & Airdrop Hunts",
    titleArabic: "بث الرانك الليلي مع الشباب على كيك",
    category: "Stream",
    game: "PUBG Mobile",
    thumbnail: "/assets/stream-thumbnail-01.webp",
    duration: "Live VOD",
    platform: "Kick",
    url: "https://kick.com/silvatshu",
    isDemo: true,
  },
  {
    id: "clip-02",
    title: "When the Squad Panics in Final Circle 😂",
    titleArabic: "لما السكواد يقلب ضحك في آخر زون",
    category: "Clip",
    game: "Just Chatting & Gaming",
    thumbnail: "/assets/clip-02.webp",
    duration: "1:12",
    platform: "TikTok",
    url: "https://www.tiktok.com/@silvatshu",
    isDemo: true,
  },
  {
    id: "stream-02",
    title: "Community Q&A + Custom Rooms Tournament",
    titleArabic: "رومات وبطولات المتابعين وسوالف لايف",
    category: "Community",
    game: "Community Night",
    thumbnail: "/assets/stream-thumbnail-02.webp",
    duration: "Archive",
    platform: "YouTube",
    url: "https://youtube.com/@silvatshuu",
    isDemo: true,
  },
];
