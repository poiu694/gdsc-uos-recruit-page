/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@gdsc-uos-recruit-page/hooks", "@gdsc-uos-recruit-page/design-system"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig);

