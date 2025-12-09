export interface TrueFalseQuiz {
  type: 'truefalse'
  nivel: string
  pregunta: string
  correcta: 'V' | 'F'
  next: string
}

export interface OneSelectQuiz {
  type: 'one-select'
  pregunta: string
  codigo?: string
  nivel: string
  opciones: Record<'clave' | 'texto', string>[]
  correcta: string
  next: string
}

export interface CompleteCodeQuizz {
  type: 'complete-code'
  code: string[]
  answer: string
  nivel: string
  next: string
}

export interface MultiSelectQuiz {
  type: 'multi-select'
  pregunta: string
  codigo?: string[]
  nivel: string
  opciones: Record<'clave' | 'texto', string>[]
  correctas: string[]
  next: string
}

export type QuizConfig = TrueFalseQuiz | OneSelectQuiz | CompleteCodeQuizz | MultiSelectQuiz
