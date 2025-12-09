import { redirect, type LoaderFunctionArgs } from 'react-router-dom'
import { isAuthenticated, canAccess, canAccessChallenge, canAccessModule } from '@/util/authHelpers'

export const protectedLoader = () => {
  if (!isAuthenticated()) {
    return redirect('/login')
  }

  return null
}

export const publicOnlyLoader = () => {
  if (isAuthenticated()) {
    return redirect('/')
  }

  return null
}

export const moduleLoader = ({ params }: LoaderFunctionArgs) => {
  const { moduleId } = params

  if (canAccessModule(moduleId)) {
    return null
  }

  return redirect('/')
}

export const LessonLoader = ({ params }: LoaderFunctionArgs) => {
  const { lessonId, nivelId } = params

  if (canAccess(lessonId, nivelId)) {
    return null
  }

  return redirect('/')
}
export const QuizzLoader = ({ params }: LoaderFunctionArgs) => {
  const { lessonId, quizzId } = params

  if (canAccess(lessonId, quizzId)) {
    return null
  }

  return redirect('/')
}

export const ChallengeLoader = ({ params }: LoaderFunctionArgs) => {
  const { lessonId } = params

  if (canAccessChallenge(lessonId)) {
    return null
  }

  return redirect('/')
}
