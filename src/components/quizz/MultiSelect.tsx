import { useState } from 'react'
import CodeBlock from '../CodeBlock'
import type { MultiSelectConfig, QuizzProps, QuizzStatus } from '@/types'
import {
  QuizzButton,
  QuizzButtonGroup,
  QuizzDescription,
  QuizzOptionButton,
  QuizzTitle,
  Quizz,
} from '@/components/quizz'

interface MultiSelectProps extends MultiSelectConfig, QuizzProps {}

export default function MultiSelect({
  correctas,
  opciones,
  pregunta,
  nivel,
  codigo,
  onSuccess,
  onContinue,
}: MultiSelectProps) {
  const [selections, setSelections] = useState<string[]>([])
  const [status, setStatus] = useState<QuizzStatus>('idle')

  const toggleSelection = (id: string) => {
    if (status !== 'idle') return

    setSelections((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const verifySelection = async () => {
    if (selections.length === 0) return

    if (
      selections.length === correctas.length &&
      correctas.every((val) => selections.includes(val))
    ) {
      setStatus('success')

      await onSuccess()
    } else {
      setStatus('error')
    }
  }

  const resetQuizz = () => {
    setSelections([])
    setStatus('idle')
  }

  const handleQuizzBtnClick = () => {
    if (status === 'success') onContinue()
    else if (status === 'error') resetQuizz()
    else verifySelection()
  }

  return (
    <Quizz>
      <QuizzTitle>Quizz {nivel}</QuizzTitle>
      <QuizzDescription>{pregunta}</QuizzDescription>
      {codigo && <CodeBlock>{codigo.toString()}</CodeBlock>}

      <QuizzButtonGroup>
        <p className="text-sm text-gray-500">Selecciona todas las respuestas correctas</p>
        {opciones.map(({ clave, texto }) => (
          <QuizzOptionButton<string>
            isSelected={selections.includes(clave)}
            status={status}
            id={clave}
            text={texto}
            onClick={toggleSelection}
            key={clave}
          />
        ))}
        <QuizzButton
          status={status}
          disabled={selections.length === 0}
          onClick={handleQuizzBtnClick}
        />
      </QuizzButtonGroup>
    </Quizz>
  )
}
