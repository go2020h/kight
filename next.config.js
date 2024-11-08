/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }] // required to make pdfjs work
    return config
  },

  async rewrites() {
    return [
      {
        source: '/delivery/:path*',
        destination: 'http://160.251.148.143/:path*'
      }
    ]
  }
}

module.exports = nextConfig
