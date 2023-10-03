// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'cache-control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
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
