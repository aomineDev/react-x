import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Spinner } from '@/components/ui/spinner'
import SafeLayout from '@/layout/SafeLayout'

interface ModuleConfig {
  moduleId: number
  title: string
  image: string
  levels: { id: number; title: string }[]
}

const ModulePage = () => {
  const { moduleId } = useParams()
  const [loading, setLoading] = useState(true)
  const [config, setConfig] = useState<ModuleConfig | null>(null)

  const url = `/modules/module-${moduleId}.json`

  console.log(url)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .finally(() => setLoading(false))
  }, [url])

  if (loading)
    return (
      <div className="fixed w-full h-screen flex justify-center items-center">
        <Spinner className="scale-200" />
      </div>
    )

  if (!config) return <div className="text-white">No se encontró el módulo</div>

  return (
    <SafeLayout full>
      <div className="min-h-screen w-full p-8" style={{ backgroundImage: `url(${config.image})` }}>
        {/* TITULO */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
          {config.title}
        </h1>

        {/* LEVELS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {config.levels.map((level) => (
            <Link
              key={level.id}
              to={`/lesson/${config.moduleId}/${level.id}`}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl 
                         text-white font-medium text-lg shadow-xl hover:bg-white/20
                         transition transform hover:scale-105 hover:-translate-y-1"
            >
              {level.title}
            </Link>
          ))}
        </div>
      </div>
    </SafeLayout>
  )
}

export default ModulePage
