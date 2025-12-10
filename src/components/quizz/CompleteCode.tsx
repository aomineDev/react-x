import { useEffect, useState } from 'react'
import { highlight } from '@/util/highlight'
import { Spinner } from '../ui/spinner'
import parse, { type DOMNode, Element } from 'html-react-parser'
import CodeInput from './CodeInput'
import type { CompleteCodeConfig, QuizzProps, QuizzStatus } from '@/types'
import {
  QuizzButton,
  QuizzButtonGroup,
  QuizzDescription,
  QuizzTitle,
  Quizz,
} from '@/components/quizz'

type Answer = Record<string, string>

interface CompleteCodeProps extends CompleteCodeConfig, QuizzProps {}

const regex = /___([^_]+)_(.*?)___/gi

const CompleteCode = ({ code, answer, nivel, onSuccess, onContinue }: CompleteCodeProps) => {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [html, setHtml] = useState('')
  const [correctAnswers, setCorrectAnswers] = useState<Answer>({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [status, setStatus] = useState<QuizzStatus>('idle')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getHighlighted() {
      const html = await highlight(code.join('\n'))
      const processedHtml = html.replace(regex, (_match, id, answer) => {
        const width = Math.max(answer.length * 11, 64)
        setCorrectAnswers((prev) => ({
          ...prev,
          [id]: answer,
        }))
        return `<my-slot data-id="${id}" data-width="${width}"></my-slot>`
      })

      setHtml(processedHtml)

      setLoading(false)
    }

    getHighlighted()
  }, [code])

  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.name === 'my-slot') {
        const { 'data-id': id, 'data-width': width } = domNode.attribs

        return (
          <CodeInput
            id={id}
            width={width}
            showFeedback={showFeedback}
            readOnly={status !== 'idle'}
            handleInputChange={handleInputChange}
            checkAnswer={checkAnswer}
          />
        )
      }
    },
  }

  const handleInputChange = (id: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const resetQuizz = () => {
    setAnswers((prev) => {
      const keys = Object.keys(answers)
      return keys.reduce((acc, key) => ({ ...acc, [key]: checkAnswer(key) ? prev[key] : '' }), {})
    })
    setShowFeedback(false)
    setStatus('idle')
  }

  const checkAnswer = (id: string) => answers[id] === correctAnswers[id]

  const verifyAnswers = async () => {
    setShowFeedback(true)
    const keys = Object.keys(answers)

    const allCorrect = keys.length > 0 && Object.keys(correctAnswers).every((id) => checkAnswer(id))

    if (allCorrect) {
      await onSuccess()

      setStatus('success')
    } else {
      setStatus('error')
    }
  }

  const handleQuizzBtnClick = () => {
    if (status === 'success') onContinue()
    else if (status === 'error') resetQuizz()
    else verifyAnswers()
  }

  const allFilled = Object.keys(correctAnswers).every((id) => answers[id]?.trim())

  if (loading) return <Spinner />

  return (
    <Quizz>
      <QuizzTitle>Quizz {nivel}</QuizzTitle>
      <QuizzDescription>{answer}</QuizzDescription>

      {parse(html, options)}

      <QuizzButtonGroup>
        <QuizzButton status={status} disabled={!allFilled} onClick={handleQuizzBtnClick} />
      </QuizzButtonGroup>
    </Quizz>
  )
}

export default CompleteCode
