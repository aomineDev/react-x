import { useAuth } from '@/store'
import { userService } from '@/services/api/userService'
import { useCallback } from 'react'

export const useCompleteQuizz = () => {
  const { completeQuizz, user } = useAuth()

  const handleCompleteQuizz = useCallback(
    async (lessonId: string | undefined, quizzId: string | undefined, next: string) => {
      if (!(user && quizzId && lessonId)) return

      const lesson = parseInt(lessonId)
      const level = parseInt(quizzId)

      if (!(lesson === user.currentLesson && level === user.currentLevel)) return

      const isLastQuizz = next.includes('challenge')

      const newLevel = isLastQuizz ? 67 : level + 1
      completeQuizz(newLevel)

      await userService.completeQuizz(user.id, newLevel)
    },
    [user, completeQuizz]
  )

  return { handleCompleteQuizz }
}
