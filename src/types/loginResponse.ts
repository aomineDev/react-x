import type { CurrentUser } from './currentUser'

export interface LoginResponse {
  token: string
  user: CurrentUser
}
