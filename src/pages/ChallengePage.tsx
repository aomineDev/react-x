import CodeChallenge from '@/components/challenge/CodeChallengue'
import CarouselChallenge from '@/components/quizz/CarouselChallenge'
import { Spinner } from '@/components/ui/spinner'
import type { ChallengeConfig } from '@/types/challengeConfig'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ChallengePage = () => {
  const { lessonId } = useParams()

  const [loading, setLoading] = useState(true)
  const [config, setConfig] = useState<ChallengeConfig>({} as ChallengeConfig)
  const navigate = useNavigate()
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

  if (loading)
    return (
      <div className="fixed w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    )

  if (config.type === 'code') return <CodeChallenge {...config}></CodeChallenge>

  if (config.type === 'quizz') {
    return <CarouselChallenge {...config}> </CarouselChallenge>
  }
}

export default ChallengePage
