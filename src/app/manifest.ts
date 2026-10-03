import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "سيلفاتشو (Silvatshu) | الموقع الرسمي",
    short_name: "Silvatshu",
    description: "الموقع الرسمي لـ سيلفاتشو — ستريمر كيك وببجي موبايل",
    start_url: "/",
    display: "standalone",
    background_color: "#07090D",
    theme_color: "#53FC18",
    orientation: "portrait",
    categories: ["entertainment", "games"],
    icons: [
      {
        src: "/icon.png",
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
    ],
  };
}
