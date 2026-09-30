import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";

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
  themeColor: "#080A0E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://silvatshu.com"),
  title: "Silvatshu | Streamer & Content Creator",
  description:
    "Official home of Silvatshu — streams, gaming, videos, socials and community.",
  keywords: [
    "Silvatshu",
    "سيلفاتشو",
    "Egyptian Streamer",
    "Kick Streamer",
    "PUBG Mobile",
    "Gaming Creator",
    "Egypt Gaming",
  ],
  authors: [{ name: "Silvatshu" }],
  creator: "Silvatshu",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    url: "https://silvatshu.com",
    title: "Silvatshu | Streamer & Content Creator",
    description:
      "Official home of Silvatshu — streams, gaming, videos, socials and community.",
    siteName: "SILVATSHU",
    images: [
      {
        url: "/assets/silvatshu-profile.png",
        width: 640,
        height: 640,
        alt: "Silvatshu Official Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silvatshu | Streamer & Content Creator",
    description:
      "Official home of Silvatshu — streams, gaming, videos, socials and community.",
    images: ["/assets/silvatshu-profile.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cairo.variable} h-full scroll-smooth antialiased`}
      dir="ltr"
    >
      <body className="min-h-full flex flex-col bg-[#07090D] text-slate-100 selection:bg-[#53FC18]/30 selection:text-[#53FC18]">
        {children}
      </body>
    </html>
  );
}
