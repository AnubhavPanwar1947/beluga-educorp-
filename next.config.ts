import type { NextConfig } from "next";

/**
 * No static `output: "export"` while practicing Next.js API routes.
 * API routes need a Node host: `next dev`, `next start`, or Vercel (Pelagic-style).
 * DreamHost shared hosting cannot run /api/* — use Vercel for this practice site,
 * and keep DreamHost for domain/DNS if needed.
 */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
