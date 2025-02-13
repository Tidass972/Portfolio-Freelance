/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com'
      },
      {
        protocol: 'https',
        hostname: '**.pixabay.com'
      }
    ]
  },
  experimental: {
    typedRoutes: true
  }
};

module.exports = nextConfig;
