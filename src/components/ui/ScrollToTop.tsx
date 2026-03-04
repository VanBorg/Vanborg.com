import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const location = useLocation()
  const { pathname, state } = location

  useEffect(() => {
    if ((state as any)?.preventScrollTop) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, state])

  return null
}

