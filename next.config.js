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
          source: '/delivery/:path*',
          destination: 'https://delivery.kightblog.co.jp/:path*'
        }
      ]
    }
  }
}

module.exports = nextConfig
