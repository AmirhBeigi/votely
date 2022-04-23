/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.votely.mohammadalian.ir']
  },
  pwa: {
    dest: 'public'
  }
};

module.exports = withPWA(nextConfig);
