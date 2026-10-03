import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "سيلفاتشو (Silvatshu) | الموقع الرسمي",
    short_name: "سيلفاتشو",
    description: "الموقع الرسمي لـ سيلفاتشو — ستريمر كيك وشريك ببجي موبايل",
    start_url: "/",
    display: "standalone",
    background_color: "#07090D",
    theme_color: "#53FC18",
    orientation: "portrait",
    categories: ["entertainment", "games"],
    icons: [
      {
        src: "/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
