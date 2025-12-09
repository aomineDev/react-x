import { config } from '@/config'
import type { NewUser, User } from '@/types'
import type { LoginResponse } from '@/types/loginResponse'

const { API_URL } = config
const service = '/api/auth'

interface Credentials {
  email: string
  password: string
}

export const authService = {
  login: async (credentials: Credentials) => {
    const response = await fetch(`${API_URL}${service}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      throw new Error('Error en la solicitud')
    }

    const data = await response.json()

    return data as LoginResponse
  },

  register: async (user: NewUser) => {
    const response = await fetch(`${API_URL}${service}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      throw new Error('Error en la solicitud')
    }

    const data = await response.json()

    return data as User
  },
}
