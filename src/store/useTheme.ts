import { create } from 'zustand'

type Theme = 'dark' | 'light'

interface ThemeState {
  theme: Theme
}

interface ThemeActions {
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export type ThemeStore = ThemeState & ThemeActions

const getInitialTheme = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (isDark) document.documentElement.classList.add('dark')

  return isDark ? 'dark' : 'light'
}

const theme = getInitialTheme()

export const useTheme = create<ThemeStore>((set) => ({
  theme,
  setTheme: (theme: Theme) => set({ theme }),
  toggleTheme: () => {
    document.documentElement.classList.toggle('dark')

    return set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    }))
  },
}))
