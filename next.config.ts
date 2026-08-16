import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    remotePatterns: [
      {
        hostname: 'tse1.mm.bing.net',
      },
      {
        hostname: 'upload.wikimedia.org',
      },
      {
        hostname: 'logos-world.net',
      },
      {
        hostname: 'w7.pngwing.com',
      },
      {
        hostname: 'www.pngrepo.com',
      },
      {
        hostname: 'asset.brandfetch.io',
      }
    ],
    unoptimized: true, // Disable Image Optimization API for static export
  },
  transpilePackages: ['motion'],
  productionBrowserSourceMaps: false, // Disable source maps in production
  experimental: {
    scrollRestoration: true, // Enable scroll restoration for better UX
  },
  webpack: (config, { dev, isServer }) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }

    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }

    return config;
  },
};

export default nextConfig;
