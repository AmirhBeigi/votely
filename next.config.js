/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.votely.mohammadalian.ir']
  },
  pwa: {
    dest: 'public'
  }
};

module.exports = withPWA(withBundleAnalyzer(nextConfig));
