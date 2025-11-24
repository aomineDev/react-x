import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import Layout from './layout/AppLayout'
import Markdown from './pages/Markdown'
import CodeChallengue from './pages/CodeChallengePage'
import LessonPage from '@/pages/LessonPage'
import Lesson1Quizz1 from '@/pages/quizz/lesson1Quizz/Lesson1Quizz1'
import QuizPage from './pages/QuizzPage'

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
        path: 'challenge',
        Component: CodeChallengue,
      },
      {
        path: 'form',
        Component: FormPage,
      },
      {
        path: 'markdown',
        Component: Markdown,
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
        path: 'quizz/1/1',
        Component: Lesson1Quizz1,
      },
    ],
  },
])
