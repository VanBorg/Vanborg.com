import { Routes, Route } from 'react-router-dom'
import { WhatsAppWidget } from './components/ui/WhatsAppWidget'
import { AanbiedingPopup } from './components/ui/AanbiedingPopup'
import { CookieBanner } from './components/ui/CookieBanner'
import HomePage from './pages/index'
import RankingPage from './pages/ranking'
import AdsPage from './pages/ads'
import WebsitePage from './pages/website'
import SalePage from './pages/sale'
import PrijzenPage from './pages/prijzen'
import VoorwaardenPage from './pages/voorwaarden'
import PrivacyPage from './pages/privacy'
import LocatieOverzichtPage from './pages/locatie-overzicht'
import LocatiePage from './pages/locatie'
import ContactPage from './pages/contact'
import NotFoundPage from './pages/not-found'
import MarketingbureauVeendamPage from './pages/marketingbureau-veendam'
import GoogleBedrijfsprofielVeendamPage from './pages/google-bedrijfsprofiel-veendam'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/ads" element={<AdsPage />} />
      <Route path="/website" element={<WebsitePage />} />
      <Route path="/aanbieding" element={<SalePage />} />
      <Route path="/prijzen" element={<PrijzenPage />} />
      <Route path="/voorwaarden" element={<VoorwaardenPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/locatie" element={<LocatieOverzichtPage />} />
      <Route path="/locatie/:slug" element={<LocatiePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/marketingbureau-veendam" element={<MarketingbureauVeendamPage />} />
      <Route path="/google-bedrijfsprofiel-veendam" element={<GoogleBedrijfsprofielVeendamPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <WhatsAppWidget />
    <AanbiedingPopup />
    <CookieBanner />
    </>
  )
}

export default App
