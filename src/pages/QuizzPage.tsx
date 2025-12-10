import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Spinner } from '@/components/ui/spinner'
import TrueFalse from '@/components/quizz/TrueFalse'
import OneSelect from '@/components/quizz/OneSelect'
import type { QuizConfig } from '@/types/quizConfig.d'
import SafeLayout from '@/layout/SafeLayout'
import CompleteCode from '@/components/quizz/CompleteCode'
import MultiSelect from '@/components/quizz/MultipleSelect'

export default function QuizPage() {
  const { lessonId, quizzId } = useParams()

  const [loading, setLoading] = useState(true)
  const [config, setConfig] = useState<QuizConfig>({} as QuizConfig)
  const navigate = useNavigate()
  const quizFile = `/lessons/lesson-${lessonId}/Quizz${quizzId}.json`

  useEffect(() => {
    fetch(quizFile)
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .then(() => setLoading(false))
      .catch((err) => {
        navigate('/')
        console.error('Error al cargar quizz:', err)
      })
  }, [quizFile, navigate])

  if (loading)
    return (
      <div className="fixed w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    )

  switch (config.type) {
    case 'truefalse':
      return (
        <SafeLayout>
          <TrueFalse {...config} />
        </SafeLayout>
      )

    case 'one-select':
      return (
        <SafeLayout>
          <OneSelect {...config} />
        </SafeLayout>
      )

    case 'complete-code':
      return (
        <SafeLayout>
          <CompleteCode {...config} />
        </SafeLayout>
      )
    case 'multi-select':
      return (
        <SafeLayout>
          <MultiSelect {...config} />
        </SafeLayout>
      )

    default:
      return <div>Tipo de quiz no soportado</div>
  }
}
