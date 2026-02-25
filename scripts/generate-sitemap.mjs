/**
 * Generates public/sitemap.xml from static paths and location slugs.
 * Keep locationSlugs in sync with src/data/locations.ts LOCATION_PAGES.
 */
import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const pathsFile = join(root, 'scripts', 'sitemap-paths.json')
const dest = join(root, 'public', 'sitemap.xml')

const { baseUrl, staticPaths, locationSlugs } = JSON.parse(
  readFileSync(pathsFile, 'utf-8')
)

const today = new Date().toISOString().split('T')[0]

const urls = [
  ...staticPaths.map((path) => ({
    loc: `${baseUrl}${path}`,
    priority: path === '/' ? '1.0' : '0.8',
    changefreq: path === '/' ? 'weekly' : 'monthly',
  })),
  ...locationSlugs.map((slug) => ({
    loc: `${baseUrl}/locatie/${slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync(dest, xml, 'utf-8')
console.log('generate-sitemap: wrote public/sitemap.xml')
