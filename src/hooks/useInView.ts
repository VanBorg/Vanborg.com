import { useCallback, useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  offset?: number
}

interface UseInViewResult<T extends Element> {
  ref: (node: T | null) => void
  isInView: boolean
}

/**
 * Simple scroll-based in-view detection without IntersectionObserver.
 * Sections start hidden and fade up once they enter the viewport.
 */
export function useInView<T extends Element = Element>(
  { offset = 0.3 }: UseInViewOptions = {},
): UseInViewResult<T> {
  const [isInView, setIsInView] = useState(false)
  const nodeRef = useRef<T | null>(null)

  const checkInView = useCallback(() => {
    const node = nodeRef.current
    if (!node) return

    if (typeof window === 'undefined' || !node.getBoundingClientRect) {
      setIsInView(true)
      return
    }

    const rect = node.getBoundingClientRect()
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight || 0

    const threshold = viewportHeight * (1 - offset)
    const isVisible = rect.top < threshold && rect.bottom > 0

    if (isVisible !== isInView) {
      setIsInView(isVisible)
    }
  }, [isInView, offset])

  const ref = useCallback(
    (node: T | null) => {
      nodeRef.current = node

      if (node) {
        checkInView()
      }
    },
    [checkInView],
  )

  useEffect(() => {
    if (isInView) {
      return
    }

    if (typeof window === 'undefined') {
      setIsInView(true)
      return
    }

    const handler = () => {
      checkInView()
    }

    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)

    // Initial check on mount
    handler()

    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [checkInView, isInView])

  return { ref, isInView }
}

