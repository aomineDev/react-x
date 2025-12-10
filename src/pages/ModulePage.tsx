import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Spinner } from '@/components/ui/spinner'
import SafeLayout from '@/layout/SafeLayout'
import { useAuth } from '@/store'
import { SpotlightCard } from '@/components/SpotlightCard'
import { SquareDashedBottomCodeIcon } from 'lucide-react'

interface ModuleConfig {
  moduleId: number
  title: string
  image: string
  levels: { id: number; title: string }[]
}

const ModulePage = () => {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [config, setConfig] = useState<ModuleConfig | null>(null)
  const { user } = useAuth()

  const url = `/modules/module-${moduleId}.json`

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
      <div
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: `url(${config.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-full max-w-6xl px-6 py-24 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg mb-12">
            {config.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {config.levels.map((level) => {
              if (!user) return null

              let completed = false
              let unlocked = false

              if (config.moduleId < user.currentLesson) {
                completed = true
                unlocked = true
              } else if (config.moduleId === user.currentLesson) {
                completed = level.id < user.currentLevel
                unlocked = level.id <= user.currentLevel
              } else {
                // módulos futuros → bloqueados
                completed = false
                unlocked = false
              }

              return (
                <SpotlightCard
                  key={level.id}
                  icon={<SquareDashedBottomCodeIcon />}
                  title={level.title}
                  disabled={!unlocked}
                  completed={completed}
                  onClick={() => unlocked && navigate(`/lesson/${config.moduleId}/${level.id}`)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </SafeLayout>
  )
}

export default ModulePage
