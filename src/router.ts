import { createBrowserRouter } from 'react-router'
import HomePage from '@/pages/HomePage'
import Layout from '@/layout/AppLayout'
import LessonPage from '@/pages/LessonPage'
import QuizPage from '@/pages/QuizzPage'
import LoginPage from '@/pages/LoginPage'
import MarkdownPage from '@/pages/MarkdownPage'

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
    path: '/login',
    Component: LoginPage,
  },
])
