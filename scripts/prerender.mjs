import { mkdirSync, readFileSync, statSync, writeFileSync } from 'fs'
import { createServer } from 'http'
import { dirname, extname, join, normalize } from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'
import { getAllRoutes } from './route-manifest.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')
const port = 4178

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

const routes = [...getAllRoutes(), '/404']

function resolveFilePath(urlPath) {
  const cleanPath = urlPath.split('?')[0].split('#')[0]
  const normalizedPath = normalize(cleanPath).replace(/^(\.\.[/\\])+/, '')
  const absolutePath = join(distDir, normalizedPath)

  try {
    const stats = statSync(absolutePath)
    if (stats.isFile()) {
      return absolutePath
    }
  } catch {
    // Fall through to SPA fallback.
  }

  return join(distDir, 'index.html')
}

function getOutputPathForRoute(route) {
  if (route === '/') {
    return join(distDir, 'index.html')
  }

  return join(distDir, route.replace(/^\//, ''), 'index.html')
}

async function createStaticServer() {
  const server = createServer((req, res) => {
    const filePath = resolveFilePath(req.url || '/')
    const content = readFileSync(filePath)
    const contentType = mimeTypes[extname(filePath)] || 'application/octet-stream'

    res.statusCode = 200
    res.setHeader('Content-Type', contentType)
    res.end(content)
  })

  await new Promise((resolve) => server.listen(port, resolve))
  return server
}

function buildNetlifyRedirects() {
  const lines = routes
    .filter((route) => route !== '/')
    .map((route) => `${route}  ${route}/index.html  200`)

  lines.unshift('/  /index.html  200')
  lines.push('/*  /404.html  404')

  return `${lines.join('\n')}\n`
}

async function prerender() {
  const server = await createStaticServer()
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  try {
    for (const route of routes) {
      const url = `http://127.0.0.1:${port}${route}`
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 120000,
      })
      await new Promise((resolve) => setTimeout(resolve, 100))

      const html = await page.content()
      const outputPath = getOutputPathForRoute(route)
      mkdirSync(dirname(outputPath), { recursive: true })
      writeFileSync(outputPath, `<!doctype html>\n${html}`, 'utf-8')
      console.log(`prerender: wrote ${route}`)
    }

    const notFoundRoutePath = getOutputPathForRoute('/404')
    const notFoundHtml = readFileSync(notFoundRoutePath, 'utf-8')
    writeFileSync(join(distDir, '404.html'), notFoundHtml, 'utf-8')
    writeFileSync(join(distDir, '_redirects'), buildNetlifyRedirects(), 'utf-8')
    console.log('prerender: wrote dist/404.html and dist/_redirects')
  } finally {
    await browser.close()
    await new Promise((resolve) => server.close(resolve))
  }
}

prerender().catch((error) => {
  console.error('prerender: failed', error)
  process.exit(1)
})

