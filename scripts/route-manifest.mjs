import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const locationsFile = join(root, 'src', 'data', 'locations.ts')

const BASE_URL = 'https://vanborg.com'

const STATIC_PATHS = [
  '/',
  '/ranking',
  '/ads',
  '/website',
  '/aanbieding',
  '/prijzen',
  '/voorwaarden',
  '/privacy',
  '/locatie',
]

export function getBaseUrl() {
  return BASE_URL
}

export function getStaticPaths() {
  return [...STATIC_PATHS]
}

export function getLocationSlugs() {
  const source = readFileSync(locationsFile, 'utf-8')
  const regex = /slug:\s*'([^']+)'/g
  const slugs = []
  let match

  while ((match = regex.exec(source)) !== null) {
    slugs.push(match[1])
  }

  if (slugs.length === 0) {
    throw new Error('route-manifest: no location slugs found in src/data/locations.ts')
  }

  return slugs
}

export function getAllRoutes() {
  return [...getStaticPaths(), ...getLocationSlugs().map((slug) => `/locatie/${slug}`)]
}

