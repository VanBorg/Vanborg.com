import { useState, useRef, useCallback, useEffect } from 'react'

interface ImageComparisonProps {
  before: string
  after: string
  className?: string
}

const AUTO_ANIMATION_DURATION_MS = 7000
const AUTO_ANIMATION_START = 20
const AUTO_ANIMATION_END = 85

export function ImageComparison({ before, after, className = '' }: ImageComparisonProps) {
  const [position, setPosition] = useState(AUTO_ANIMATION_START)
  const [isDragging, setIsDragging] = useState(false)
  const [userHasInteracted, setUserHasInteracted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoAnimationRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null)
  const startTimeRef = useRef<number | null>(null)

  const updatePosition = useCallback(
    (clientX: number) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = clientX - rect.left
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setPosition(pct)
    },
    []
  )

  const stopAutoAnimation = useCallback(() => {
    if (autoAnimationRef.current != null) {
      cancelAnimationFrame(autoAnimationRef.current)
      autoAnimationRef.current = null
    }
    startTimeRef.current = null
  }, [])

  const handleUserInteraction = useCallback(() => {
    setUserHasInteracted(true)
    stopAutoAnimation()
  }, [stopAutoAnimation])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      handleUserInteraction()
      setIsDragging(true)
    },
    [handleUserInteraction]
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      handleUserInteraction()
      setIsDragging(true)
      if (e.touches[0]) updatePosition(e.touches[0].clientX)
    },
    [updatePosition, handleUserInteraction]
  )

  useEffect(() => {
    if (userHasInteracted) return
    const step = (timestamp: number) => {
      if (startTimeRef.current == null) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(1, elapsed / AUTO_ANIMATION_DURATION_MS)
      const pct = AUTO_ANIMATION_START + progress * (AUTO_ANIMATION_END - AUTO_ANIMATION_START)
      setPosition(pct)
      if (progress < 1) {
        autoAnimationRef.current = requestAnimationFrame(step)
      } else {
        startTimeRef.current = null
      }
    }
    autoAnimationRef.current = requestAnimationFrame(step)
    return () => {
      if (autoAnimationRef.current != null) cancelAnimationFrame(autoAnimationRef.current)
    }
  }, [userHasInteracted])

  useEffect(() => {
    if (!isDragging) return
    const onMove = (e: MouseEvent) => updatePosition(e.clientX)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) updatePosition(e.touches[0].clientX)
    }
    const onEnd = () => setIsDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onEnd)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onEnd)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onEnd)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onEnd)
    }
  }, [isDragging, updatePosition])

  return (
    <div className={`flex w-full flex-col gap-3 ${className}`.trim()}>
      {/* Badges boven de kaart: links Voor, rechts Na */}
      <div className="flex items-center justify-between px-1">
        <span className="comparison-badge" aria-hidden>
          Toen we begonnen
        </span>
        <span className="comparison-badge" aria-hidden>
          Na 90 dagen
        </span>
      </div>
      <div
        ref={containerRef}
        className="comparison-card-border comparison-card-shadow relative w-full overflow-hidden bg-white"
        aria-label="Vergelijking: links toen we begonnen, rechts na 90 dagen"
      >
        {/* Sizer: bepaalt hoogte van de container op basis van de afbeelding, geen wit vlak meer */}
        <img
          src={before}
          alt=""
          className="block w-full h-auto pointer-events-none invisible"
          aria-hidden
        />
        {/* Bottom layer: before (heatmap-1) – zelfde doos, zelfde uitlijning als after */}
        <img
          src={before}
          alt="Heatmap weergave 1"
          className="absolute inset-0 h-full w-full object-contain object-left-top"
        />
        {/* Top layer: after (heatmap-2), clipped by position – identiek gepositioneerd; z-[1] onder de divider */}
        <div
          className="absolute inset-y-0 left-0 z-[1] overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={after}
            alt="Heatmap weergave 2"
            className="h-full w-full object-contain object-left-top"
            style={{
              width: position > 0 ? `${(100 / position) * 100}%` : '100%',
              maxWidth: 'none',
            }}
          />
        </div>
        {/* Divider: eigen compositorlaag (translateZ(0)), afgeronde positie = solid, geen knipperen */}
        <div
          className="comparison-divider-line absolute inset-y-0 z-10"
          style={{
            left: `${Math.round(position * 100) / 100}%`,
            transform: 'translateX(-50%) translateZ(0)',
          }}
          aria-label="Vergelijk afbeeldingen, sleep om de tweede afbeelding te tonen"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={(e) => {
          handleUserInteraction()
          if (e.key === 'ArrowLeft') {
            e.preventDefault()
            setPosition((p) => Math.max(0, p - 5))
          } else if (e.key === 'ArrowRight') {
            e.preventDefault()
            setPosition((p) => Math.min(100, p + 5))
          }
        }}
        >
          <div className="comparison-divider-handle">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M7.5 21L3 12l4.5-9" />
              <path d="M16.5 21l4.5-9-4.5-9" />
              <path d="M3 12h18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
