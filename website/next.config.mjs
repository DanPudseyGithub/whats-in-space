/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
    N2YO_API_KEY: process.env.N2YO_API_KEY,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.n2yo.com/:path*", // Proxy to external API
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
