import { createBrowserRouter, redirect } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import Layout from '@/layout/AppLayout'
import LessonPage from '@/pages/LessonPage'
import QuizPage from '@/pages/QuizzPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import LandingPage from '@/pages/landing-page'
import {
  ChallengeLoader,
  LessonLoader,
  moduleLoader,
  protectedLoader,
  publicOnlyLoader,
  QuizzLoader,
} from './guard'
import ChallengePage from '@/pages/ChallengePage'
import ModulePage from '@/pages/ModulePage'

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    loader: protectedLoader,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'modulo/:moduleId',
        Component: ModulePage,
        loader: moduleLoader,
      },
      {
        path: 'lesson/:lessonId/:nivelId',
        Component: LessonPage,
        loader: LessonLoader,
      },
      {
        path: 'quizz/:lessonId/:quizzId',
        Component: QuizPage,
        loader: QuizzLoader,
      },
      {
        path: 'challenge/:lessonId',
        Component: ChallengePage,
        loader: ChallengeLoader,
      },
    ],
  },
  {
    path: '/landing',
    Component: LandingPage,
  },
  {
    path: '/login',
    Component: LoginPage,
    loader: publicOnlyLoader,
  },
  {
    path: '/signup',
    Component: SignupPage,
    loader: publicOnlyLoader,
  },
  {
    path: '*',
    loader: () => redirect('/login'),
  },
])
