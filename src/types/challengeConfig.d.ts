import type { QuizConfig } from './quizConfig'

export interface CodeChallengeConfig {
  type: 'code'
  markdownUrl: string
  files: Record<string, string>
  testFiles: Record<string, string>
  next: string
  showTest?: boolean
}

export interface QuizzChallengeConfig {
  type: 'quizz'
  quizzes: QuizConfig[]
  next: string
}

export type ChallengeConfig = CodeChallengeConfig | QuizzChallengeConfig
