const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'gdsc-uos-hooks',
    'gdsc-uos-design-system',
    'gdsc-uos-eslint-config-custom',
    'gdsc-uos-tsconfig-custom',
  ],
};

module.exports = nextConfig;
