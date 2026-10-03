import { NextResponse } from "next/server";

export const revalidate = 60; // Cache for 60 seconds

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
  "CDN-Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
  "Vercel-CDN-Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
};

export async function GET() {
  try {
    const res = await fetch("https://kick.com/api/v2/channels/silvatshu", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000), // 5-second hard timeout to prevent hanging connections under heavy load
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          isLive: false,
          channel: "silvatshu",
          status: "offline",
        },
        { headers: CACHE_HEADERS }
      );
    }

    const data = await res.json();
    const isLive = Boolean(data?.livestream);

    return NextResponse.json(
      {
        isLive,
        channel: "silvatshu",
        title: data?.livestream?.session_title || "Kick Live Broadcast",
        category: data?.livestream?.categories?.[0]?.name || "PUBG Mobile",
        viewers: data?.livestream?.viewer_count || 0,
        thumbnail: data?.livestream?.thumbnail?.url || null,
      },
      { headers: CACHE_HEADERS }
    );
  } catch {
    return NextResponse.json(
      {
        isLive: false,
        channel: "silvatshu",
        status: "offline",
      },
      { headers: CACHE_HEADERS }
    );
  }
}
