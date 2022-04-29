/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const __DEV__ = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.votely.mohammadalian.ir']
  },
  pwa: {
    dest: 'public',
    disable: __DEV__
  },
  optimizeFonts: false
};

module.exports = withPWA(nextConfig);
