import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "swietliste.pl" },
      { protocol: "https", hostname: "swietliste.pl" },
    ],
  },
};

export default config;
