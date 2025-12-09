import { createBrowserRouter, redirect } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import Layout from '@/layout/AppLayout'
import LessonPage from '@/pages/LessonPage'
import QuizPage from '@/pages/QuizzPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import MarkdownPage from '@/pages/MarkdownPage'
import LandingPage from './pages/landing-page'
import ModulePage from './pages/ModulePage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'modulo/:moduleId',
        Component: ModulePage,
      },
      {
        path: 'lesson/:lessonId/:nivelId',
        Component: LessonPage,
      },
      {
        path: 'quizz/:lessonId/:quizzId',
        Component: QuizPage,
      },
      {
        path: 'markdown',
        Component: MarkdownPage,
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
  },
  {
    path: '/signup',
    Component: SignupPage,
  },
  {
    path: '*',
    loader: () => redirect('/'),
  },
])
