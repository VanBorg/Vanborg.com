import { useCallback, useEffect, useRef, useState } from 'react'
import { useFadeUpContext } from '../components/ui/FadeUpProvider'

interface UseInViewOptions {
  offset?: number
}

interface UseInViewResult<T extends Element> {
  ref: (node: T | null) => void
  isInView: boolean
}

/**
 * IntersectionObserver-based in-view detection.
 * Sections start hidden and fade up once they enter the viewport.
 */
export function useInView<T extends Element = Element>(
  { offset = 0.3 }: UseInViewOptions = {},
): UseInViewResult<T> {
  const [isInView, setIsInView] = useState(false)
  const nodeRef = useRef<T | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const { resetToken } = useFadeUpContext()

  const observe = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }

    const node = nodeRef.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }

    const rootMargin = `0px 0px -${Math.round(offset * 100)}% 0px`

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observerRef.current?.disconnect()
          observerRef.current = null
        }
      },
      { rootMargin, threshold: 0 },
    )

    observerRef.current.observe(node)
  }, [offset])

  const ref = useCallback(
    (node: T | null) => {
      nodeRef.current = node
      observe()
    },
    [observe],
  )

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  useEffect(() => {
    if (resetToken === 0) return
    setIsInView(false)
    observe()
  }, [resetToken, observe])

  return { ref, isInView }
}
