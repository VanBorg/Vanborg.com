import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const location = useLocation()
  const { pathname, hash, state } = location

  useEffect(() => {
    if ((state as any)?.preventScrollTop) return

    if (hash) {
      const id = hash.slice(1)
      const el = id ? document.getElementById(id) : null
      if (el) {
        const scroll = () => el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        const t = requestAnimationFrame(() => {
          requestAnimationFrame(scroll)
        })
        return () => cancelAnimationFrame(t)
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash, state])

  return null
}

