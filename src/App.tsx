import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { WhatsAppWidget } from './components/ui/WhatsAppWidget'
import { AanbiedingPopup } from './components/ui/AanbiedingPopup'
import { CookieBanner } from './components/ui/CookieBanner'

const HomePage = lazy(() => import('./pages/index'))
const RankingPage = lazy(() => import('./pages/ranking'))
const AdsPage = lazy(() => import('./pages/ads'))
const WebsitePage = lazy(() => import('./pages/website'))
const SalePage = lazy(() => import('./pages/sale'))
const PrijzenPage = lazy(() => import('./pages/prijzen'))
const VoorwaardenPage = lazy(() => import('./pages/voorwaarden'))
const PrivacyPage = lazy(() => import('./pages/privacy'))
const LocatieOverzichtPage = lazy(() => import('./pages/locatie-overzicht'))
const LocatiePage = lazy(() => import('./pages/locatie'))
const ContactPage = lazy(() => import('./pages/contact'))
const NotFoundPage = lazy(() => import('./pages/not-found'))
const MarketingbureauVeendamPage = lazy(
  () => import('./pages/marketingbureau-veendam'),
)
const GoogleBedrijfsprofielVeendamPage = lazy(
  () => import('./pages/google-bedrijfsprofiel-veendam'),
)

function App() {
  return (
    <>
      <Suspense fallback={null}>
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
          <Route
            path="/marketingbureau-veendam"
            element={<MarketingbureauVeendamPage />}
          />
          <Route
            path="/google-bedrijfsprofiel-veendam"
            element={<GoogleBedrijfsprofielVeendamPage />}
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    <WhatsAppWidget />
    <AanbiedingPopup />
    <CookieBanner />
    </>
  )
}

export default App
