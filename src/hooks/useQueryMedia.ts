import { useEffect, useMemo, useState } from 'react'

interface useQueryProps {
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const useQueryMedia = ({ breakpoint }: useQueryProps) => {
  const query = useMemo(() => {
    if (breakpoint == 'sm') return '(min-width: 640px)'
    if (breakpoint == 'md') return '(min-width: 768px)'
    if (breakpoint == 'lg') return '(min-width: 1024px)'
    if (breakpoint == 'xl') return '(min-width: 1280px)'
    if (breakpoint == '2xl') return '(min-width: 1536px)'
    return ''
  }, [breakpoint])

  const [isQueryMatch, setIsQueryMatch] = useState(() => {
    if (typeof window !== 'undefined') return window.matchMedia(query).matches

    return false
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    const checkQuery = (e: MediaQueryListEvent) => setIsQueryMatch(e.matches)

    mediaQuery.addEventListener('change', checkQuery)

    return () => {
      mediaQuery.removeEventListener('change', checkQuery)
    }
  }, [query])

  return { isQueryMatch }
}
