import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/index'
import RankingPage from './pages/ranking'
import AdsPage from './pages/ads'
import WebsitePage from './pages/website'
import SalePage from './pages/sale'
import PrijzenPage from './pages/prijzen'
import VoorwaardenPage from './pages/voorwaarden'
import PrivacyPage from './pages/privacy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/ads" element={<AdsPage />} />
      <Route path="/website" element={<WebsitePage />} />
      <Route path="/aanbieding" element={<SalePage />} />
      <Route path="/prijzen" element={<PrijzenPage />} />
      <Route path="/voorwaarden" element={<VoorwaardenPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  )
}

export default App
