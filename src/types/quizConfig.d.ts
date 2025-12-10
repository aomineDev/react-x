export interface TrueFalseConfig {
  type: 'truefalse'
  nivel: string
  pregunta: string
  correcta: 'V' | 'F'
  next: string
}

export interface OneSelectConfig {
  type: 'one-select'
  pregunta: string
  codigo?: string
  nivel: string
  opciones: Record<'clave' | 'texto', string>[]
  correcta: string
  next: string
}

export interface CompleteCodeConfig {
  type: 'complete-code'
  code: string[]
  answer: string
  nivel: string
  next: string
}

export interface MultiSelectConfig {
  type: 'multi-select'
  pregunta: string
  codigo?: string[]
  nivel: string
  opciones: Record<'clave' | 'texto', string>[]
  correctas: string[]
  next: string
}

export type QuizzConfig = TrueFalseConfig | OneSelectConfig | CompleteCodeConfig | MultiSelectConfig
