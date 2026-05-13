import type { NextRequest } from "next/server";

/**
 * Proxies images from the legacy swietliste.pl HTTP host through our domain.
 *
 * Why this exists: swietliste.pl only serves over plain HTTP (its TLS cert
 * belongs to home.pl, so browsers reject HTTPS), and modern browsers block
 * mixed content on HTTPS pages. Server-side Node has no such problem — we
 * fetch the upstream image here and stream it back with our own HTTPS + a
 * long cache header so Vercel's edge handles repeat hits.
 *
 * Usage: <img src="/api/img?u=http%3A%2F%2Fswietliste.pl%2F..." />
 */

const ALLOWED_HOSTS = new Set([
  "swietliste.pl",
  "www.swietliste.pl",
  "dzieci.swietliste.pl",
  "portret.swietliste.pl",
]);

export async function GET(req: NextRequest) {
  const u = req.nextUrl.searchParams.get("u");
  if (!u) {
    return new Response("Missing `u` query param", { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(u);
  } catch {
    return new Response("Invalid URL", { status: 400 });
  }

  if (!ALLOWED_HOSTS.has(target.hostname)) {
    return new Response("Host not allowed", { status: 403 });
  }

  try {
    const upstream = await fetch(target.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Swietliste-Proxy/1.0; +https://swietliste.vercel.app)",
        Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
      },
      // Long cache — these are static assets that rarely change.
      cache: "force-cache",
    });

    if (!upstream.ok || !upstream.body) {
      return new Response(`Upstream ${upstream.status}`, { status: 502 });
    }

    const contentType = upstream.headers.get("content-type") ?? "image/jpeg";

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // 1 year browser + edge cache — content is immutable per-URL
        "Cache-Control":
          "public, max-age=31536000, s-maxage=31536000, immutable",
      },
    });
  } catch (err) {
    return new Response(`Proxy fetch failed: ${(err as Error).message}`, {
      status: 502,
    });
  }
}
