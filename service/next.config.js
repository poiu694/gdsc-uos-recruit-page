/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  'gdsc-uos-hooks',
  'gdsc-uos-design-system',
  'gdsc-uos-eslint-config-custom',
  'gdsc-uos-tsconfig-custom',
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = withTM(nextConfig);

