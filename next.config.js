/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false
  },
  images: {
    domains: ['localhost', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif']
  },
  env: {
    SITE_NAME: 'FreedomPress Site',
    SITE_DESCRIPTION: 'A modern content management system'
  }
}

module.exports = nextConfig