import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 This replaces the old `next export`
  output: "export",

  experimental: {
    serverActions: {},
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

export default nextConfig;
