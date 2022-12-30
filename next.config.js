const { withContentlayer } = require('next-contentlayer');
const withExportImages = require('next-export-optimize-images')

const nextConfig = withExportImages({
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "cache-control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,

  // optimizeFonts: false,
  // images: {
  //   // remotePatterns: [
  //   //   {
  //   //     protocol: 'https',
  //   //     hostname: 'aim-netlify-image.s3.amazonaws.com',
  //   //     port: '',
  //   //     // pathname: '/account123/**',
  //   //   },
  //   // ],
  // },
  disableImportAliasWarning: true,
});

module.exports = withContentlayer(nextConfig);
