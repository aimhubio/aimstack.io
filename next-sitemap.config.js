/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://aimstack.io',
  generateRobotsTxt: true, // (optional)
  // Default transformation function
};
