import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      // },
      {
        protocol: "http",
        hostname: "server",
      },
    ],
  },
};

export default nextConfig;
