/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fusionlatalante.fr',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'out',
  changefreq: 'monthly',
  transform: async (config, path) => {
    const isDailyPage = path === '/' || path === '/fr/page/actualites'
    return {
      loc: path,
      changefreq: isDailyPage ? 'daily' : config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
