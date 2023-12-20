module.exports = {
  async rewrites() {
    return [
      {
        source: '/((?!_next).*)', // Matches all paths except those starting with '_next'
        destination: 'https://graphql-github-io-real.pages.dev/:path*', // Rewrite to Cloudflare Pages
      },
    ]
  },
}
