/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:8800/api/:slug*',
      },
    ]
  },
}