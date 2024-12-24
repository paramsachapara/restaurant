import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow Next.js to serve images from the public folder
    unoptimized: true, // Disable image optimization (necessary for static export)
    domains: [], // List of domains if external images are used
  },
  output: "export", // Ensures compatibility with static hosting
};

export default nextConfig;
