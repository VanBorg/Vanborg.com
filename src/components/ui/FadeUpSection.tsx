import type { HTMLAttributes, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

type FadeUpSectionProps = {
  children: ReactNode
  as?: 'section' | 'div'
  delayMs?: number
} & HTMLAttributes<HTMLElement>

export function FadeUpSection({
  children,
  as: Wrapper = 'section',
  className = '',
  delayMs,
  style,
  ...rest
}: FadeUpSectionProps) {
  const { ref, isInView } = useInView()

  const mergedStyle =
    delayMs != null
      ? { ...(style || {}), ['--fade-delay' as string]: `${delayMs}ms` }
      : style

  const wrapperClasses = ['section', className].filter(Boolean).join(' ')

  const contentClasses = [
    'fade-up-content',
    isInView ? 'fade-up-content--visible' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Wrapper className={wrapperClasses} {...rest}>
      <div ref={ref as any} className={contentClasses} style={mergedStyle}>
        {children}
      </div>
    </Wrapper>
  )
}

