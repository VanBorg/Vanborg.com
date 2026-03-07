import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WebsiteHero } from '../components/sections/website/WebsiteHero'
import { WebsiteInfoBlock } from '../components/sections/website/WebsiteInfoBlock'
import { WebsiteSeoProduct } from '../components/sections/website/WebsiteSeoProduct'
import { WebsiteAndereTypes } from '../components/sections/website/WebsiteAndereTypes'
import { WebsiteIntegraties } from '../components/sections/website/WebsiteIntegraties'
import { WebsiteCTA } from '../components/sections/website/WebsiteCTA'

const CANONICAL = 'https://vanborg.com/website'

export default function WebsitePage() {
  return (
    <>
      <Helmet>
        <title>Website laten maken | Van Borg – Custom websites voor elk doel</title>
        <meta
          name="description"
          content="Van Borg bouwt volledig custom websites: van SEO-websites en webshops tot portfolio's en maatwerk. Gebouwd met React, TypeScript en Tailwind."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:title"
          content="Website laten maken | Van Borg"
        />
        <meta
          property="og:description"
          content="Custom websites gebouwd met de nieuwste technologie. SEO-websites, webshops, portfolio's en meer."
        />
      </Helmet>
      <Navbar />
      <main className="page-website">
        <WebsiteHero />
        <WebsiteInfoBlock />
        <WebsiteSeoProduct />
        <WebsiteAndereTypes />
        <WebsiteIntegraties />
        <WebsiteCTA />
      </main>
      <Footer />
    </>
  )
}
