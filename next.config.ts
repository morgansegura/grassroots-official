import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The transparency page lives at /990 and is the indexed canonical.
      // /financials is the name people guess, and the phrasing our own
      // campaign copy reaches for. Redirect rather than duplicate — two
      // URLs with identical content compete with each other in search.
      { source: "/financials", destination: "/990", permanent: true },
    ];
  },
};

export default nextConfig;
