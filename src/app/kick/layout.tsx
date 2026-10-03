import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بث سيلفاتشو المباشر | Kick Live Stream",
  description:
    "تحويل مباشر إلى قناة سيلفاتشو الرسمية على Kick - شاهد البث المباشر لألعاب PUBG Mobile و FC و Just Chatting.",
  openGraph: {
    title: "بث سيلفاتشو المباشر على Kick | Silvatshu Live",
    description: "شاهد البث المباشر لألعاب PUBG Mobile و FC مع سيلفاتشو على كيك.",
    url: "https://silvatshu.social/kick",
    siteName: "سيلفاتشو • Silvatshu",
    images: [
      {
        url: "/assets/silvatshu-profile.png",
        width: 640,
        height: 640,
        alt: "سيلفاتشو Silvatshu",
      },
    ],
  },
  alternates: {
    canonical: "https://silvatshu.social/kick",
  },
};

export default function KickLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
