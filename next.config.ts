import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export", // Added this line to enable static export
  images: {
    domains: ["images.getbento.com"], // Add the domain here
  },
};

export default nextConfig;
