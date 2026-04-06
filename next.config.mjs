/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.kitsu.io", pathname: "/**" },
      { protocol: "https", hostname: "media.kitsu.app", pathname: "/**" },
      { protocol: "https", hostname: "kitsu.io", pathname: "/**" },
    ],
  },
};

export default nextConfig;
