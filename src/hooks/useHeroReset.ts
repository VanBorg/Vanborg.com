import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useFadeUpContext } from '../components/ui/FadeUpProvider'

/**
 * Trigger a global fade-up reset only when entering the home route.
 * Navigation with state.preventFadeReset skips the reset (e.g. map clicks).
 */
export function useHeroReset() {
  const { pathname, state } = useLocation()
  const { triggerReset } = useFadeUpContext()
  const hasResetForPath = useRef<string | null>(null)

  useEffect(() => {
    const preventFadeReset = (state as Record<string, unknown> | null)?.preventFadeReset === true
    if (preventFadeReset) return
    if (pathname !== '/') return
    if (hasResetForPath.current === pathname) return

    triggerReset()
    hasResetForPath.current = pathname
  }, [pathname, state, triggerReset])
}

