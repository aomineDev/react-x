import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Confetti from '@/components/Confetti'
import { highlight } from '@/util/highlight'
import { Spinner } from '../ui/spinner'
import parse, { type DOMNode, Element } from 'html-react-parser'
import CodeInput from './CodeInput'
import type { CompleteCodeQuizz } from '@/types/quizConfig'
import { Link, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import { useCompleteQuizz } from '../hooks/useCompleteQuizz'

type Answer = Record<string, string>

const regex = /___([^_]+)_([^}]+)___/gi

const CompleteCode = ({ code, answer, nivel, next }: CompleteCodeQuizz) => {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [html, setHtml] = useState('')
  const [correctAnswers, setCorrectAnswers] = useState<Answer>({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [quizzCompleted, setQuizzCompleted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { handleCompleteQuizz } = useCompleteQuizz()
  const { lessonId, quizzId } = useParams()

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
            quizzCompleted={quizzCompleted}
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

    setShowFeedback(false)
  }

  const checkAnswer = (id: string) => answers[id] === correctAnswers[id]

  const handleVerification = async () => {
    setShowFeedback(true)
    const keys = Object.keys(answers)

    const allCorrect = keys.length > 0 && Object.keys(correctAnswers).every((id) => checkAnswer(id))

    if (allCorrect) {
      await handleCompleteQuizz(lessonId, quizzId, next)

      setQuizzCompleted(true)
    }
  }

  if (loading) return <Spinner />

  return (
    <div className="flex flex-col items-center gap-5 py-6">
      <h1 className="text-4xl capitalize font-bold primary-gradient">Quizz {nivel}</h1>
      <p>{answer}</p>

      {parse(html, options)}

      {quizzCompleted ? (
        <div className="text-center">
          <Button
            size="lg"
            className="cursor-pointer text-white bg-green-500 border-b-4 border-b-green-900 hover:bg-green-600"
            asChild
          >
            <Link to={next}>Continuar</Link>
          </Button>
          <p className="text-lg mt-4">Quizz completado!</p>
        </div>
      ) : (
        <Button
          size="lg"
          className="cursor-pointer text-white bg-blue-500 border-b-4 border-b-blue-900 hover:bg-blue-600"
          onClick={handleVerification}
        >
          <span className="text-base flex items-center gap-2">
            Verificar <Check />
          </span>
        </Button>
      )}

      <Confetti show={quizzCompleted} fall />
      <Confetti show={quizzCompleted} />
    </div>
  )
}

export default CompleteCode
