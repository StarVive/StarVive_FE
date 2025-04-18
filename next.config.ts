import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9001",
        pathname: "/api/v1/buckets/**",
      },
      {
        protocol: "https",
        hostname: "sitem.ssgcdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "image.istarbucks.co.kr",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cp-image.starbucks.co.kr",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
