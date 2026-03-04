import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface FadeUpContextValue {
  resetToken: number
  triggerReset: () => void
}

const FadeUpContext = createContext<FadeUpContextValue | undefined>(undefined)

interface FadeUpProviderProps {
  children: ReactNode
}

export function FadeUpProvider({ children }: FadeUpProviderProps) {
  const [resetToken, setResetToken] = useState(0)

  const triggerReset = useCallback(() => {
    setResetToken((prev) => prev + 1)
  }, [])

  const value = useMemo(
    () => ({
      resetToken,
      triggerReset,
    }),
    [resetToken, triggerReset],
  )

  return <FadeUpContext.Provider value={value}>{children}</FadeUpContext.Provider>
}

export function useFadeUpContext(): FadeUpContextValue {
  const ctx = useContext(FadeUpContext)
  if (!ctx) {
    throw new Error('useFadeUpContext must be used within a FadeUpProvider')
  }
  return ctx
}

