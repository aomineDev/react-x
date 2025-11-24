import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import Layout from './layout/AppLayout'
import Markdown from './pages/Markdown'
import CodeChallengue from './pages/CodeChallengePage'
import LessonPage from '@/pages/LessonPage'
import Lesson1Quizz1 from '@/pages/quizz/lesson1Quizz/Lesson1Quizz1'
import Lesson3Quizz6 from '@/pages/quizz/lesson3Quizz/Lesson3Quizz6'
import Lesson1Quizz2 from './pages/quizz/lesson1Quizz/Lesson1Quizz2'
import Lesson1Quizz4 from './pages/quizz/lesson1Quizz/Lesson1Quizz4'
import Lesson1Quizz5 from './pages/quizz/lesson1Quizz/Lesson1Quizz5'

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
        path: 'quizz/1/1',
        Component: Lesson1Quizz1,
      },
      {
        path: 'quizz/1/2',
        Component: Lesson1Quizz2,
      },
      {
        path: 'quizz/1/4',
        Component: Lesson1Quizz4,
      },
      {
        path: 'quizz/1/5',
        Component: Lesson1Quizz5,
      },
      {
        path: 'quizz2',
        Component: Lesson3Quizz6,
      },
    ],
  },
])
