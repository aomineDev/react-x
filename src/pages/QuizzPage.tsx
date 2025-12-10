import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { QuizzConfig } from '@/types/quizConfig'
import SafeLayout from '@/layout/SafeLayout'
import { TrueFalse, OneSelect, MultiSelect, CompleteCode } from '@/components/quizz'
import SpinnerPage from '@/components/SpinnerPage'
import Confetti from '@/components/Confetti'
import { useCompleteQuizz } from '@/components/hooks/useCompleteQuizz'

export default function QuizPage() {
  const { lessonId, quizzId } = useParams()
  const [config, setConfig] = useState<QuizzConfig>({} as QuizzConfig)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const { handleCompleteQuizz } = useCompleteQuizz()
  const quizzFile = `/lessons/lesson-${lessonId}/Quizz${quizzId}.json`

  useEffect(() => {
    fetch(quizzFile)
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .then(() => setLoading(false))
      .catch((err) => {
        navigate('/')
        console.error('Error al cargar quizz:', err)
      })
  }, [quizzFile, navigate])

  const handleSuccess = async () => {
    await handleCompleteQuizz(lessonId, quizzId, config.next)
    setSuccess(true)
  }

  const handleContinue = () => {
    navigate(config.next)
  }

  if (loading) return <SpinnerPage />

  return (
    <>
      <SafeLayout>
        {config.type === 'truefalse' && (
          <TrueFalse {...config} onSuccess={handleSuccess} onContinue={handleContinue} />
        )}
        {config.type === 'one-select' && (
          <OneSelect {...config} onSuccess={handleSuccess} onContinue={handleContinue} />
        )}
        {config.type === 'complete-code' && (
          <CompleteCode {...config} onSuccess={handleSuccess} onContinue={handleContinue} />
        )}
        {config.type === 'multi-select' && (
          <MultiSelect {...config} onSuccess={handleSuccess} onContinue={handleContinue} />
        )}
      </SafeLayout>

      <Confetti show={success} />
      <Confetti show={success} fall />
    </>
  )
}
