import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WebsiteHero } from '../components/sections/website/WebsiteHero'
import { WebsiteVoordelen } from '../components/sections/website/WebsiteVoordelen'
import { WebsiteWerkwijze } from '../components/sections/website/WebsiteWerkwijze'
import { WebsitePrijs } from '../components/sections/website/WebsitePrijs'
import { WebsiteCTA } from '../components/sections/website/WebsiteCTA'

const CANONICAL = 'https://vanborg.com/website'

export default function WebsitePage() {
  return (
    <>
      <Helmet>
        <title>SEO-website laten maken | Van Borg – Snelle websites die converteren</title>
        <meta
          name="description"
          content="Van Borg bouwt SEO- en sales-geoptimaliseerde websites voor lokale bedrijven in Nederland. Focus op snelheid, vertrouwen en meer aanvragen via je website."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:title"
          content="SEO-website laten maken | Van Borg"
        />
        <meta
          property="og:description"
          content="Conversiegerichte websites met sterke technische SEO en heldere call-to-actions."
        />
        <meta
          name="document-outline"
          content="h1: SEO-website; h2: voordelen en proces; h3: oplevering en prijzen"
        />
      </Helmet>
      <Navbar />
      <main>
        <WebsiteHero />
        <WebsiteVoordelen />
        <WebsiteWerkwijze />
        <WebsitePrijs />
        <WebsiteCTA />
      </main>
      <Footer />
    </>
  )
}
