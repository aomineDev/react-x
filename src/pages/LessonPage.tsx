import Lesson from '@/components/lesson/Lesson'
import { Spinner } from '@/components/ui/spinner'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { type LessonConfig } from '@/types/interfaceConfig.d'
import SafeLayout from '@/layout/SafeLayout'

const LessonPage = () => {
  const { lessonId, nivelId } = useParams()
  const [loading, setLoading] = useState(true)
  const [config, setConfig] = useState<LessonConfig>({} as LessonConfig)
  const navigate = useNavigate()

  const nivel = `/lessons/lesson-${lessonId}/Nivel${nivelId}.json`

  useEffect(() => {
    fetch(nivel)
      .then((res) => res.json() as Promise<LessonConfig>)
      .then((data) => setConfig(data))
      .then(() => setLoading(false))
      .catch((err) => {
        navigate('/')
        console.error('Error al cargar lección:', err)
      })
  }, [nivel, navigate])

  if (loading)
    return (
      <div className="fixed w-full h-screen flex justify-center items-center">
        <Spinner className="scale-200" />
      </div>
    )

  return (
    <SafeLayout full>
      <Lesson {...config}></Lesson>
    </SafeLayout>
  )
}

export default LessonPage
