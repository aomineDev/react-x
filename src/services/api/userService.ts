import { fetchClient } from './fetchClient'

const service = '/api/users'

export const userService = {
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
