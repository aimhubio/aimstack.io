// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: '**.netlify.app',
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
