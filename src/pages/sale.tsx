import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { SaleHero } from '../components/sections/sale/SaleHero'
import { SaleVoordelen } from '../components/sections/sale/SaleVoordelen'
import { SaleWerkwijze } from '../components/sections/sale/SaleWerkwijze'
import { SalePrijs } from '../components/sections/sale/SalePrijs'
import { SaleCTA } from '../components/sections/sale/SaleCTA'

export default function SalePage() {
  return (
    <>
      <Navbar />
      <main>
        <SaleHero />
        <SaleVoordelen />
        <SaleWerkwijze />
        <SalePrijs />
        <SaleCTA />
      </main>
      <Footer />
    </>
  )
}
