/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@gdsc-uos-recruit-page/hooks',
  '@gdsc-uos-recruit-page/design-system',
  '@gdsc-uos-recruit-page/eslint-config-custom',
  '@gdsc-uos-recruit-page/tsconfig-custom',
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = withTM(nextConfig);

