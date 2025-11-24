import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Spinner } from '@/components/ui/spinner'
import TrueFalse from '@/components/quizz/TrueFalse'
import OneSelect from '@/components/quizz/OneSelect'
import type { QuizConfig } from '@/types/quizConfirg'

export default function QuizPage() {
  const { lessonId, quizzId } = useParams()

  const [loading, setLoading] = useState(true)
  const [config, setConfig] = useState<QuizConfig | null>(null)

  const quizFile = `/lessons/lesson-${lessonId}/Quizz${quizzId}.json`

  useEffect(() => {
    fetch(quizFile)
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .finally(() => setLoading(false))
  }, [quizFile])

  if (loading)
    return (
      <div className="fixed w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    )

  if (!config) return <div>No se encontró el quiz</div>

  switch (config.type) {
    case 'truefalse':
      return <TrueFalse data={config} />

    case 'one-select':
      return <OneSelect opciones={config} />

    default:
      return <div>Tipo de quiz no soportado</div>
  }
}
