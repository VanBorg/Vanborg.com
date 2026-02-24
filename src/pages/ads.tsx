import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { AdsHero } from '../components/sections/ads/AdsHero'
import { AdsVoordelen } from '../components/sections/ads/AdsVoordelen'
import { AdsWerkwijze } from '../components/sections/ads/AdsWerkwijze'
import { AdsPrijs } from '../components/sections/ads/AdsPrijs'
import { AdsCTA } from '../components/sections/ads/AdsCTA'

export default function AdsPage() {
  return (
    <>
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
