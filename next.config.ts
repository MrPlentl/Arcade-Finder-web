import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/identity/:path*',
        destination: 'http://localhost:8080/identity/:path*',
      },
    ]
  },
};

export default nextConfig;
