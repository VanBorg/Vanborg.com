import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/index'
import RankingPage from './pages/ranking'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<RankingPage />} />
    </Routes>
  )
}

export default App
