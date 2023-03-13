/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  crossOrigin:'use-credentials',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nilankar19.github.io',
        port: '',
        pathname: '/imgApi2/img3232/**',
      },
    ],
  },

}

module.exports = nextConfig
