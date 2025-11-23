import Lesson from '@/components/lesson/Lesson'
import { Spinner } from '@/components/ui/spinner'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { type LessonConfig } from '@/types/interfaceConfig.d'

const LessonPage = () => {
  const { lessonId, nivelId } = useParams()
  const [loading, setLoading] = useState(true)
  const [config, setConfig] = useState<LessonConfig>({} as LessonConfig)

  const nivel = `/lessons/lesson-${lessonId}/Nivel${nivelId}.json`
  console.log(nivel)
  useEffect(() => {
    fetch(nivel)
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .catch((err) => console.error('Error al cargar Marckdown:', err))
      .finally(() => setLoading(false))
  }, [nivel])

  if (loading)
    return (
      <div className="fixed w-full h-screen flex justify-center items-center">
        <Spinner className="scale-200" />
      </div>
    )
  return <Lesson config={config}></Lesson>
}

export default LessonPage
