const { withContentlayer } = require('next-contentlayer');
const withExportImages = require('next-export-optimize-images');
const path = require('path');

module.exports = withContentlayer(
  withExportImages({
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'cache-control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
    reactStrictMode: true,
    disableImportAliasWarning: true,
    future: {
      webpack5: true,
      incremental: true,
    },
    webpack: (config, { isServer }) => {
      // Enable only in Production
      if (!isServer && process.env.NODE_ENV === 'production') {
        config.optimization.moduleIds = 'size';
        config.optimization.chunkIds = 'size';
      }

      return config;
    },
  })
);
