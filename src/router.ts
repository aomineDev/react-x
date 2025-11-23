import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import Layout from './layout/AppLayout'
import Markdown from './pages/Markdown'
import CodeChallengue from './pages/CodeChallengePage'
import LessonRouter from './router/LessonRouter'
import Lesson1Quizz1 from './pages/lesson1Quizz/Lesson1Quizz1'

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
        Component: LessonRouter,
      },
      {
        path: 'quizz1',
        Component: Lesson1Quizz1,
      },
    ],
  },
])
