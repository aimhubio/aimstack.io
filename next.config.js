// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  images: {
    domains: ['miro.medium.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'youtu.be',
      },
      {
        protocol: 'https',
        hostname: 'aim-netlify-image.s3.amazonaws.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
