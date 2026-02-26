import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { AdsHero } from '../components/sections/ads/AdsHero'
import { AdsVoordelen } from '../components/sections/ads/AdsVoordelen'
import { AdsWerkwijze } from '../components/sections/ads/AdsWerkwijze'
import { AdsPrijs } from '../components/sections/ads/AdsPrijs'
import { AdsCTA } from '../components/sections/ads/AdsCTA'

const CANONICAL = 'https://vanborg.com/ads'

export default function AdsPage() {
  return (
    <>
      <Helmet>
        <title>Google Ads uitbesteden | Van Borg – Lokale leadgeneratie in Nederland</title>
        <meta
          name="description"
          content="Google Ads voor lokale bedrijven in Nederland. Van Borg bouwt en optimaliseert campagnes voor kwalitatieve leads, lagere kosten per conversie en voorspelbare groei."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:title"
          content="Google Ads uitbesteden | Van Borg – Lokale leadgeneratie"
        />
        <meta
          property="og:description"
          content="Meer aanvragen uit Google Ads met strakke targeting, goede tracking en doorlopende optimalisatie door Van Borg."
        />
        <meta
          name="document-outline"
          content="h1: Google Ads; h2: voordelen en aanpak; h3: pakketten en tarieven"
        />
      </Helmet>
      <Navbar />
      <main>
        <AdsHero />
        <AdsVoordelen />
        <AdsWerkwijze />
        <AdsPrijs />
        <AdsCTA />
      </main>
      <Footer />
    </>
  )
}
