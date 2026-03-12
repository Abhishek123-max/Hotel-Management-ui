import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 This tells Next.js to generate static HTML in `out/`
  output: "export",

  experimental: {
    serverActions: {
      // You can add allowedOrigins or bodySizeLimit here if needed
    },
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

export default nextConfig;
