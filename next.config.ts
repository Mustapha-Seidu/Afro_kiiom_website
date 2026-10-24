import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Allow phones and tablets on the local network to receive dev HMR updates
  allowedDevOrigins: ["172.20.10.2", "192.168.1.1/24"],
};

export default nextConfig;
