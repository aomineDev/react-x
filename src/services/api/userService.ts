import { fetchClient } from './fetchClient'

const service = '/api/users'

export const userService = {
  updateProfile: (id: string, data: { name: string; surname: string; email: string }) =>
    fetchClient(`${service}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  completeQuizz: (id: string, level: number) =>
    fetchClient(`${service}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ currentLevel: level }),
    }),
  completeLesson: (id: string, lesson: number) =>
    fetchClient(`${service}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ currentLevel: 1, currentLesson: lesson }),
    }),
}
