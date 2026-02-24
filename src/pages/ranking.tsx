import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { RankingHero } from '../components/sections/ranking/RankingHero'
import { RankingVoordelen } from '../components/sections/ranking/RankingVoordelen'
import { RankingWerkwijze } from '../components/sections/ranking/RankingWerkwijze'
import { RankingPrijs } from '../components/sections/ranking/RankingPrijs'
import { RankingCTA } from '../components/sections/ranking/RankingCTA'

export default function RankingPage() {
  return (
    <>
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
