import React from "react";
import { CREATOR } from "@/data/creator";
import { SOCIAL_LINKS } from "@/data/socials";

export const JsonLd: React.FC = () => {
  const baseUrl = "https://silvatshu.social";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: CREATOR.name,
    alternateName: [
      CREATOR.nameArabic,
      "سيلفا",
      "سيلفاتشو",
      "سيلفاتشو ببجي",
      "سيلفاتشو كيك",
      "Silvatshu Gaming",
      "Silvatshu Official",
    ],
    description:
      "Egyptian gaming content creator, official Kick streamer, PUBG Mobile partner, and clan leader of #1 SHU.",
    url: baseUrl,
    image: `${baseUrl}/assets/silvatshu-profile.png`,
    jobTitle: "Gaming Content Creator & Streamer",
    knowsAbout: [
      "PUBG Mobile",
      "Kick Live Streaming",
      "EA Sports FC",
      "Gaming Content Creation",
      "Esports",
      "Gaming Entertainment",
    ],
    nationality: {
      "@type": "Country",
      name: "Egypt",
    },
    sameAs: SOCIAL_LINKS.map((s) => s.url),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "سيلفاتشو (Silvatshu) | الموقع الرسمي",
    alternateName: ["Silvatshu Official Hub", "سيلفاتشو", "Silvatshu"],
    description:
      "الموقع الرسمي لـ سيلفاتشو (Silvatshu) — ستريمر كيك الرسمي، شريك ببجي موبايل، قائد كلان SHU، وروابط منصات البث والمجتمع وقنوات التواصل الرسمية.",
    inLanguage: ["ar-EG", "en-US"],
    publisher: {
      "@id": `${baseUrl}/#person`,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "سيلفاتشو (Silvatshu) | Official Gaming & Stream Hub",
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#person`,
    },
    mainEntity: {
      "@id": `${baseUrl}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
};
