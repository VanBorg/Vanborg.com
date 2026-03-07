import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const OG_HTML = `<!doctype html>
<html>
<head>
<meta charset="UTF-8"/>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    background: #1a3a2a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Georgia, 'Times New Roman', serif;
    overflow: hidden;
  }
  .bg-accent {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 80% at 80% 50%, #2d6a4f55 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 10% 20%, #40916c33 0%, transparent 60%);
  }
  .card {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 96px;
    width: 100%;
  }
  .badge {
    font-family: system-ui, sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #74c69d;
    margin-bottom: 28px;
  }
  h1 {
    font-size: 62px;
    font-weight: 700;
    line-height: 1.1;
    color: #ffffff;
    margin-bottom: 24px;
    max-width: 780px;
  }
  h1 span { color: #52b788; }
  .sub {
    font-family: system-ui, sans-serif;
    font-size: 22px;
    color: #b7e4c7;
    max-width: 640px;
    line-height: 1.5;
    margin-bottom: 40px;
  }
  .url {
    font-family: system-ui, sans-serif;
    font-size: 16px;
    color: #52b788;
    letter-spacing: 1px;
  }
  .logo-mark {
    position: absolute;
    right: 80px;
    top: 50%;
    transform: translateY(-50%);
    width: 160px;
    height: 160px;
    border: 3px solid #2d6a4f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a3a2a;
  }
  .logo-mark-inner {
    font-size: 56px;
    font-weight: 700;
    color: #52b788;
    letter-spacing: -2px;
  }
</style>
</head>
<body>
  <div class="bg-accent"></div>
  <div class="card">
    <div class="badge">Internetmarketing · Veendam</div>
    <h1>Google <span>Top 3</span> voor lokale bedrijven</h1>
    <p class="sub">Lokale SEO, Google Ads en SEO-websites. Niet in de top 3? Dan werken we gratis door.</p>
    <div class="url">vanborg.com</div>
  </div>
  <div class="logo-mark">
    <div class="logo-mark-inner">VB</div>
  </div>
</body>
</html>`

const ICON_HTML = `<!doctype html>
<html>
<head>
<meta charset="UTF-8"/>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 180px;
    height: 180px;
    background: #1a3a2a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Georgia, serif;
    overflow: hidden;
  }
  .ring {
    width: 140px;
    height: 140px;
    border: 4px solid #2d6a4f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e4434;
  }
  .letters {
    font-size: 52px;
    font-weight: 700;
    color: #52b788;
    letter-spacing: -2px;
    line-height: 1;
  }
</style>
</head>
<body>
  <div class="ring">
    <div class="letters">VB</div>
  </div>
</body>
</html>`

async function generate() {
  const browser = await puppeteer.launch({ headless: true })

  try {
    // OG image — 1200×630 JPEG
    const ogPage = await browser.newPage()
    await ogPage.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
    await ogPage.setContent(OG_HTML, { waitUntil: 'networkidle0' })
    const ogBuffer = await ogPage.screenshot({ type: 'jpeg', quality: 92, clip: { x: 0, y: 0, width: 1200, height: 630 } })
    writeFileSync(join(publicDir, 'og-image.jpg'), ogBuffer)
    console.log('generate-images: wrote public/og-image.jpg (1200×630)')

    // Apple touch icon — 180×180 PNG
    const iconPage = await browser.newPage()
    await iconPage.setViewport({ width: 180, height: 180, deviceScaleFactor: 2 })
    await iconPage.setContent(ICON_HTML, { waitUntil: 'networkidle0' })
    const iconBuffer = await iconPage.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 180, height: 180 } })
    writeFileSync(join(publicDir, 'apple-touch-icon.png'), iconBuffer)
    console.log('generate-images: wrote public/apple-touch-icon.png (180×180)')
  } finally {
    await browser.close()
  }
}

generate().catch((err) => {
  console.error('generate-images: failed', err)
  process.exit(1)
})
