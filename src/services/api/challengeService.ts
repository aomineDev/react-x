import type { Challenge, NewChallenge } from '@/types'
import { fetchClient } from './fetchClient'

const service = '/api/challenges'

export const challengeService = {
  getOneByLesson: (lesson: number) => fetchClient<Challenge>(`${service}/lesson/${lesson}`),
  create: (data: NewChallenge) =>
    fetchClient(service, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: string, data: { files: Record<string, string> }) =>
    fetchClient(`${service}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
}
