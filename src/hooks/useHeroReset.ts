import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useFadeUpContext } from '../components/ui/FadeUpProvider'

/**
 * Observe the hero section (#page-hero) and trigger a global fade-up reset
 * when the hero is (re)entered in the viewport.
 * Navigation with state.preventFadeReset skips the reset (e.g. map clicks).
 */
export function useHeroReset() {
  const { pathname, state } = useLocation()
  const { triggerReset } = useFadeUpContext()
  const hasResetForPath = useRef<string | null>(null)

  useEffect(() => {
    const preventFadeReset = (state as Record<string, unknown> | null)?.preventFadeReset === true
    if (preventFadeReset) return

    const hero = document.getElementById('page-hero')
    if (!hero) {
      return
    }

    hasResetForPath.current = null

    if (!('IntersectionObserver' in window)) {
      // Fallback: trigger a reset once per path when hero exists.
      if (hasResetForPath.current !== pathname) {
        triggerReset()
        hasResetForPath.current = pathname
      }
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasResetForPath.current !== pathname) {
            triggerReset()
            hasResetForPath.current = pathname
          }
        })
      },
      {
        threshold: 0.4,
      },
    )

    observer.observe(hero)

    return () => {
      observer.disconnect()
    }
  }, [pathname, state, triggerReset])
}

