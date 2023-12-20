module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://graphql-github-io-real.pages.dev/:path*',
      },
    ]
  },
}
