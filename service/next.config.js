const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'gdsc-uos-design-system',
    'gdsc-uos-eslint-config-custom',
    'gdsc-uos-tsconfig-custom',
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
