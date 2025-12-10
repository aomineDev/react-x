import { useState } from 'react'
import CodeBlock from '../CodeBlock'
import type { OneSelectConfig, QuizzProps, QuizzStatus } from '@/types'
import {
  QuizzButton,
  QuizzButtonGroup,
  QuizzDescription,
  QuizzOptionButton,
  QuizzTitle,
  Quizz,
} from '@/components/quizz'

interface OneSelectProps extends OneSelectConfig, QuizzProps {}

export default function OneSelect({
  correcta,
  opciones,
  pregunta,
  nivel,
  codigo,
  onContinue,
  onSuccess,
}: OneSelectProps) {
  const [selection, setSelection] = useState<string>('')
  const [status, setStatus] = useState<QuizzStatus>('idle')

  const verifySelection = async () => {
    if (!selection) return

    if (selection === correcta) {
      setStatus('success')

      await onSuccess()
    } else {
      setStatus('error')
    }
  }

  const resetQuizz = () => {
    setSelection('')
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
        {opciones.map(({ clave, texto }) => (
          <QuizzOptionButton<string>
            isSelected={selection === clave}
            status={status}
            id={clave}
            text={texto}
            onClick={setSelection}
            key={clave}
          />
        ))}

        <QuizzButton status={status} disabled={!selection} onClick={handleQuizzBtnClick} />
      </QuizzButtonGroup>
    </Quizz>
  )
}
