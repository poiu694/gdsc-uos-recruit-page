const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    '@gdsc-uos/ui',
    '@gdsc-uos/eslint',
    '@gdsc-uos/tsconfig',
  ],
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = nextConfig;
