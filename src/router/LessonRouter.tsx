import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function LessonRouter() {
  const { lessonId, nivelId } = useParams()
  const [Component, setComponent] = useState<React.FC | null>(null)

  useEffect(() => {
    async function loadComponent() {
      try {
        const module = await import(`../pages/lesson${lessonId}/Level${nivelId}.tsx`)
        setComponent(() => module.default)
      } catch (err) {
        console.error(err)
        setComponent(() => () => <h2>Este nivel no existe.</h2>)
      }
    }

    loadComponent()
  }, [lessonId, nivelId])

  if (!Component) return <p>Cargando nivel...</p>

  return <Component />
}
