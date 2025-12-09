import { create } from 'zustand'
import type { CurrentUser } from '@/types/currentUser'

interface AuthState {
  token: string | null
  user: CurrentUser | null
}

interface AuthActions {
  setToken: (token: string) => void
  setUser: (user: CurrentUser) => void
  completeQuizz: (level: number) => void
  completeLesson: () => void
  clear: () => void
}

interface AuthStore extends AuthState, AuthActions {}

const getInitialUser = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

const getInitialToken = () => {
  const token = localStorage.getItem('token')
  return token || null
}

const initialState: AuthState = {
  token: getInitialToken(),
  user: getInitialUser(),
}

export const useAuth = create<AuthStore>((set) => ({
  ...initialState,
  setToken: (token: string) => {
    localStorage.setItem('token', token)
    set({ token })
  },
  setUser: (user: CurrentUser) => {
    localStorage.setItem('user', JSON.stringify(user))
    set({ user })
  },
  completeQuizz: (level: number) => {
    set((state) => {
      const currentUser = state.user

      if (!currentUser) return state

      const user = {
        ...currentUser,
        currentLevel: level,
      }

      localStorage.setItem('user', JSON.stringify(user))

      return {
        ...state,
        user,
      }
    })
  },
  completeLesson: () => {
    set((state) => {
      const currentUser = state.user

      if (!currentUser) return state

      const user = {
        ...currentUser,
        currentLesson: currentUser.currentLesson + 1,
        currentLevel: 1,
      }

      localStorage.setItem('user', JSON.stringify(user))

      return {
        ...state,
        user,
      }
    })
  },
  clear: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    set({ token: null, user: null })
  },
}))
