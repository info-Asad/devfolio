/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true }, // optional, based on usage
};

module.exports = nextConfig;
