import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://lookbook.best/women/images/**")],
  },
  sassOptions: {
    implementation: "dart-sass",
    api: "modern-compiler",
  },
};

export default nextConfig;
