import type { NextConfig } from "next";

/** Static export so DreamHost shared hosting can serve the built files from /out */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
