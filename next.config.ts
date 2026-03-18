import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 86400, // cache 24 jam
  },
}

export default nextConfig
