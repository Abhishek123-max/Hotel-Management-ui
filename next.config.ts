import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 This replaces `next export`
  output: "export",

  experimental: {
    serverActions: {
      // optional settings
    },
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

export default nextConfig;

