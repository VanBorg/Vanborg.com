import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { SaleHero } from '../components/sections/sale/SaleHero'
import { SaleWerkwijze } from '../components/sections/sale/SaleWerkwijze'
import { SalePrijs } from '../components/sections/sale/SalePrijs'
import { SaleCTA } from '../components/sections/sale/SaleCTA'

const CANONICAL = 'https://vanborg.com/aanbieding'

export default function SalePage() {
  return (
    <>
      <Helmet>
        <title>Aanbieding marketingpakket | Van Borg – Website + Top 3 Google ranking</title>
        <meta
          name="description"
          content="Bekijk de actuele Van Borg aanbieding: SEO-website en Google Top 3 ranking in één traject. Voor lokale bedrijven in Nederland die snel willen groeien."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:title"
          content="Aanbieding marketingpakket | Van Borg"
        />
        <meta
          property="og:description"
          content="Een gecombineerde aanpak voor website, lokale zichtbaarheid en meer aanvragen."
        />
        <meta
          name="document-outline"
          content="h1: aanbieding; h2: wat je krijgt; h3: prijs en voorwaarden"
        />
      </Helmet>
      <Navbar />
      <main>
        <SaleHero />
        <SaleWerkwijze />
        <SalePrijs />
        <SaleCTA />
      </main>
      <Footer />
    </>
  )
}
