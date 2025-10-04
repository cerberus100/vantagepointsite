/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://vantagepoint.health",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/careers"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
