import { create } from 'zustand'
import type { CurrentUser } from '@/types/currentUser'

type AuthState = {
  token: string | null
  user: CurrentUser | null
}

type AuthActions = {
  setToken: (token: string) => void
  setUser: (user: CurrentUser) => void
  logout: () => void
}

type AuthStore = AuthState & AuthActions

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
  logout: () => set({ token: null, user: null }),
}))
