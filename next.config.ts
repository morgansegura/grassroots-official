import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.grassrootsfdn.org",
        port: "",
        pathname: "/acssets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
