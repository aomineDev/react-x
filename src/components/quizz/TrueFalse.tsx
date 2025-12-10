import { useState } from 'react'
import type { TrueFalseConfig, QuizzProps, QuizzStatus } from '@/types'
import {
  QuizzButton,
  QuizzButtonGroup,
  QuizzDescription,
  QuizzOptionButton,
  QuizzTitle,
  Quizz,
} from '@/components/quizz'

interface TrueFalseProps extends TrueFalseConfig, QuizzProps {}

type Selection = 'V' | 'F' | ''

export default function TrueFalse({
  correcta,
  nivel,
  pregunta,
  onContinue,
  onSuccess,
}: TrueFalseProps) {
  const [selection, setSelection] = useState<Selection>('')
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

      <QuizzButtonGroup>
        <QuizzOptionButton<Selection>
          isSelected={selection === 'V'}
          status={status}
          id="V"
          text="Verdadero"
          onClick={setSelection}
        />
        <QuizzOptionButton<Selection>
          isSelected={selection === 'F'}
          status={status}
          id="F"
          text="Falso"
          onClick={setSelection}
        />

        <QuizzButton status={status} disabled={!selection} onClick={handleQuizzBtnClick} />
      </QuizzButtonGroup>
    </Quizz>
  )
}
