export interface TrueFalseQuiz {
  type: 'truefalse'
  pregunta: string
  correcta: 'V' | 'F'
  next: string
}

export interface OneSelectQuiz {
  type: 'one-select'
  pregunta: string
  opciones: { clave: string; texto: string }[]
  correcta: string | string[]
  next: string
}

export type QuizConfig = TrueFalseQuiz | OneSelectQuiz | MultiSelectQuiz | OrderCodeQuiz
