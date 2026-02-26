import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { getBaseUrl, getLocationSlugs, getStaticPaths } from './route-manifest.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dest = join(root, 'public', 'sitemap.xml')

const today = new Date().toISOString().split('T')[0]
const baseUrl = getBaseUrl()
const staticPaths = getStaticPaths()
const locationSlugs = getLocationSlugs()

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
