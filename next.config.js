module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://graphql-github-io-real.pages.dev/:path*',
        has: [
          {
            type: 'host',
            value: '(www.)?graphql.org',
          },
        ],
      },
    ]
  },
}
