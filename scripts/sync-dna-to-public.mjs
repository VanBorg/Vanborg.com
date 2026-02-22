/**
 * Copies root van-borg-dna.html to public/van-borg-dna.html so AI/LLM crawlers
 * can scrape it at /van-borg-dna.html. Run before build (prebuild).
 */
import { copyFileSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const src = join(root, 'van-borg-dna.html')
const dest = join(root, 'public', 'van-borg-dna.html')

if (!existsSync(src)) {
  console.warn('sync-dna-to-public: van-borg-dna.html not found at project root, skipping.')
  process.exit(0)
}

copyFileSync(src, dest)
console.log('sync-dna-to-public: copied van-borg-dna.html to public/')
