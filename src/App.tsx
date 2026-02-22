import { useEffect } from 'react'
import HomePage from './pages/index'

function App() {
  // #region agent log
  useEffect(() => {
    const el = document.querySelector('.container')
    const win = window
    if (el) {
      const rect = el.getBoundingClientRect()
      const style = win.getComputedStyle(el)
      const payload = {
        sessionId: '138b2b',
        runId: 'layout-check',
        hypothesisId: 'H1-H4',
        location: 'App.tsx:container-measure',
        message: 'Container layout at runtime',
        data: {
          containerLeft: rect.left,
          containerWidth: rect.width,
          containerRight: rect.right,
          paddingLeft: style.paddingLeft,
          paddingRight: style.paddingRight,
          boxSizing: style.boxSizing,
          innerWidth: win.innerWidth,
          hasSideSpace: rect.left > 0 || win.innerWidth - rect.width > 0,
        },
        timestamp: Date.now(),
      }
      fetch('http://127.0.0.1:7278/ingest/3ed607b2-4902-4f30-bf76-ee73dd003f32', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '138b2b' },
        body: JSON.stringify(payload),
      }).catch(() => {})
    }
  }, [])
  // #endregion
  return <HomePage />
}

export default App
