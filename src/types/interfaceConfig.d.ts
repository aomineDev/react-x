export interface LessonConfig {
  markdownUrl: string
  lesson: string
  nivel: string
  next: string
  prev?: string
  files?: Record<string, string>
}
