import { useAuth } from '@/store'

export const isAuthenticated = () => !!useAuth.getState().token

export const canAccess = (lessonStr: string | undefined, levelStr: string | undefined) => {
  const { user } = useAuth.getState()

  if (!(user && lessonStr && levelStr)) return false

  const lesson = parseInt(lessonStr)
  const level = parseInt(levelStr)

  if (user.currentLesson > lesson) return true
  if (user.currentLesson === lesson && user.currentLevel >= level) return true

  return false
}

export const canAccessChallenge = (lessonStr: string | undefined) => canAccess(lessonStr, '67')
