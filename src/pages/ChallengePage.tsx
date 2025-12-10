import CodeChallenge from '@/components/challenge/CodeChallenge'
import QuizzChallenge from '@/components/challenge/QuizzChallenge'
import { useCompleteLesson } from '@/components/hooks/useCompleteLesson'
import { Spinner } from '@/components/ui/spinner'
import type { ChallengeConfig } from '@/types/challengeConfig'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { ArrowRight, Trophy } from 'lucide-react'
import Confetti from '@/components/Confetti'
import SafeLayout from '@/layout/SafeLayout'

const ChallengePage = () => {
  const { lessonId } = useParams()
  const navigate = useNavigate()

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const [config, setConfig] = useState<ChallengeConfig>({} as ChallengeConfig)

  const { handleCompleteLesson } = useCompleteLesson()

  const challengeFile = `/lessons/lesson-${lessonId}/challenge.json`

  useEffect(() => {
    fetch(challengeFile)
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .then(() => setLoading(false))
      .catch((err) => {
        navigate('/')
        console.error('Error al cargar quizz:', err)
      })
  }, [challengeFile, navigate])

  const handleSuccess = async () => {
    await handleCompleteLesson(lessonId)
    setSuccess(true)
  }

  const handleContinue = () => {
    navigate(config.next)
  }

  if (loading)
    return (
      <div className="fixed w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    )

  return (
    <>
      {config.type === 'code' && (
        <SafeLayout full>
          <CodeChallenge {...config} onSuccess={handleSuccess} />
        </SafeLayout>
      )}

      {config.type === 'quizz' && (
        <SafeLayout>
          <QuizzChallenge {...config} onSuccess={handleSuccess} onContinue={handleContinue} />
        </SafeLayout>
      )}

      <AlertDialog open={success}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¡Reto Superado!</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="p-5 flex justify-center">
                <Trophy className="text-yellow-500" size={75}></Trophy>
              </div>
              ¡Felicitaciones, has superado el reto! Puedes avanzar a la siguiente lección.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction asChild>
              <Link to={config.next} className="flex items-center gap-2">
                Continuar <ArrowRight />
              </Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Confetti show={success} />
      <Confetti show={success} fall />
    </>
  )
}

export default ChallengePage
