import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  typescript: {
    // Pre-existing type errors in third-party Aceternity UI components
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
