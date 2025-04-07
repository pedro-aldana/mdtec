import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.pixabay.com",
      "images.unsplash.com",
      "raw.githubusercontent.com",
      "github.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "www.youtube.com",
      "i.ytimg.com",
    ],
  },
};

export default nextConfig;
