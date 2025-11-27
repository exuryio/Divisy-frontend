const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use static export in production build, not in dev mode
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  // Allow build to continue with ESLint errors (warnings only)
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  images: {
    // Only unoptimize in production (static export)
    ...(process.env.NODE_ENV === 'production' && { unoptimized: true }),
    domains: ['images.unsplash.com', 'via.placeholder.com', 'media.licdn.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**',
      },
    ],
  },
  // Remove API routes since they'll be in separate backend
  // API routes will be handled by Railway backend
}

module.exports = withContentlayer(nextConfig)

