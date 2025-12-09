import { useAuth } from '@/store'
import { userService } from '@/services/api/userService'
import { useCallback } from 'react'

export const useCompleteLesson = () => {
  const { completeLesson, user } = useAuth()

  const handleCompleteLesson = useCallback(
    async (lessonId: string | undefined) => {
      if (!(user && lessonId)) return

      const lesson = parseInt(lessonId)

      if (!(lesson === user.currentLesson && user.currentLevel === 67)) return

      completeLesson()

      await userService.completeLesson(user.id, user.currentLesson + 1)
    },
    [user, completeLesson]
  )

  return { handleCompleteLesson }
}
