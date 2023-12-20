/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:match*',
        destination: 'https://graphql-github-io-real.pages.dev/:match*',
      },
    ]
  },
}

module.exports = nextConfig
