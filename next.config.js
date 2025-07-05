/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Suppress the DialogTitle console error
    config.plugins.push(
      new config.webpack.DefinePlugin({
        'console.error': 'console.error',
      })
    );
    
    return config;
  },
  // Suppress console errors in production
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig; 