import { config } from '@/config'
import { useAuth } from '@/store'

type Options = Omit<RequestInit, 'headers'> & {
  headers?: HeadersInit
}

const { API_URL } = config

export const fetchClient = async <T>(path: string, options: Options = {}): Promise<T> => {
  const { token } = useAuth.getState()

  const headers = new Headers(options.headers)
  headers.set('Content-Type', 'application/json')
  headers.set('Authorization', `Bearer ${token}`)

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error('Error en la solicitud')
  }
  const contentType = response.headers.get('content-type')
  const hasJsonContent = contentType?.includes('application/json')

  if (response.status === 204 || !hasJsonContent) {
    return undefined as T
  }

  const data = await response.json()

  return data as T
}
