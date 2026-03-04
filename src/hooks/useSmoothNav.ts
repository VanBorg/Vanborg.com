import { useCallback, type MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Smooth-scroll navigation for internal links.
 * - Hash links (#contact): scroll to that element on the current page.
 * - Page links (/ranking): navigate there and scroll to top.
 * - Same-page link (/ranking while on /ranking): smooth scroll to top.
 */
export function useSmoothNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      const isHash = href.startsWith('#')
      const targetPath = isHash ? pathname : href

      if (targetPath === pathname) {
        e.preventDefault()
        if (isHash) {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else if (!isHash) {
        e.preventDefault()
        navigate(href)
        // On cross-page navigation, jump directly to top to avoid
        // playing scroll-based animations while the viewport scrolls up.
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    },
    [pathname, navigate],
  )
}
