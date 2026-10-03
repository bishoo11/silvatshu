import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/common/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07090D" },
    { media: "(prefers-color-scheme: light)", color: "#07090D" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://silvatshu.social"),
  title: {
    default: "سيلفاتشو (Silvatshu) | الموقع الرسمي • Official Gaming & Stream Hub",
    template: "%s | سيلفاتشو (Silvatshu)",
  },
  description:
    "الموقع الرسمي لـ سيلفاتشو (Silvatshu) — ستريمر كيك الرسمي، شريك ببجي موبايل، قائد كلان SHU، وروابط منصات البث والمجتمع وقنوات التواصل الرسمية. Official Hub of Silvatshu: streams, gaming & community.",
  applicationName: "Silvatshu Official Hub",
  keywords: [
    "سيلفاتشو",
    "سيلفا",
    "سيلفاتشو ببجي",
    "سيلفاتشو كيك",
    "كلان شو",
    "كلان شو ببجي",
    "ستريمر سيلفاتشو",
    "ستريمر مصري",
    "ببجي موبايل",
    "كيك بث مباشر",
    "بث سيلفاتشو",
    "Silvatshu",
    "Silva",
    "Silvatshu PUBG",
    "Silvatshu Kick",
    "Silvatshu Discord",
    "Silvatshu WhatsApp",
    "Silvatshu Instagram",
    "Silvatshu Official",
    "SHU Clan",
    "Egyptian Streamer",
    "PUBG Mobile Partner",
    "Kick Streamer Egypt",
    "586205178",
  ],
  authors: [{ name: "Silvatshu", url: "https://silvatshu.social" }],
  creator: "Silvatshu",
  publisher: "BS Solutions",
  alternates: {
    canonical: "https://silvatshu.social",
    languages: {
      "ar-EG": "https://silvatshu.social",
      "en-US": "https://silvatshu.social",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    url: "https://silvatshu.social",
    siteName: "سيلفاتشو • Silvatshu Official",
    title: "سيلفاتشو (Silvatshu) | الموقع الرسمي • Official Gaming & Stream Hub",
    description:
      "الموقع الرسمي لـ سيلفاتشو (Silvatshu) — ستريمر كيك، شريك ببجي موبايل، كلان شو، والروابط الرسمية.",
    images: [
      {
        url: "/assets/silvatshu-profile.png",
        width: 640,
        height: 640,
        alt: "سيلفاتشو Silvatshu Official",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سيلفاتشو (Silvatshu) | الموقع الرسمي",
    description:
      "الموقع الرسمي لـ سيلفاتشو — ستريمر كيك وشريك ببجي موبايل. شاهد البث المباشر وتواصل مع المجتمع.",
    images: ["/assets/silvatshu-profile.png"],
    creator: "@silvatshu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  category: "entertainment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      className={`${jakarta.variable} ${cairo.variable} h-full scroll-smooth antialiased`}
      dir="ltr"
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#07090D] text-slate-100 selection:bg-[#53FC18]/30 selection:text-[#53FC18]">
        {children}
      </body>
    </html>
  );
}
