import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { RankingHero } from '../components/sections/ranking/RankingHero'
import { RankingVoordelen } from '../components/sections/ranking/RankingVoordelen'
import { RankingWerkwijze } from '../components/sections/ranking/RankingWerkwijze'
import { RankingPrijs } from '../components/sections/ranking/RankingPrijs'
import { RankingCTA } from '../components/sections/ranking/RankingCTA'

const CANONICAL = 'https://vanborg.com/ranking'

export default function RankingPage() {
  return (
    <>
      <Helmet>
        <title>Google Top 3 ranking | Van Borg – Lokale SEO voor Nederlandse bedrijven</title>
        <meta
          name="description"
          content="Wil je lokaal hoger scoren in Google en Google Maps? Van Borg helpt bedrijven in Nederland met Local SEO, Google Business Profile optimalisatie en structurele groei in zichtbaarheid."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:title"
          content="Google Top 3 ranking | Van Borg – Lokale SEO"
        />
        <meta
          property="og:description"
          content="Meer lokale zichtbaarheid en aanvragen met een bewezen Local SEO-aanpak van Van Borg."
        />
        <meta
          name="document-outline"
          content="h1: Google Top 3 ranking; h2: voordelen en werkwijze; h3: pakketten en voorwaarden"
        />
      </Helmet>
      <Navbar />
      <main>
        <RankingHero />
        <RankingVoordelen />
        <RankingWerkwijze />
        <RankingPrijs />
        <RankingCTA />
      </main>
      <Footer />
    </>
  )
}
