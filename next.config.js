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
    return {
      beforeFiles: [
        {
          source: '/delivery',
          destination: 'http://160.251.148.143/delivery'
        },
        {
          source: '/delivery/:path*',
          destination: 'http://160.251.148.143/delivery/:path*'
        }
      ]
    }
  }
}

module.exports = nextConfig
