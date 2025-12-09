import { BookOpen, Code2, FileEdit, Layers, NotebookText } from 'lucide-react'
import { BlurBlob } from '@/components/ui/blur-blob'
import { SpotlightCard } from '@/components/SpotlightCard'

export const SectionCharacteristics = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Lecciones interactivas',
      description: 'Aprende mientras haces, no solo leyendo.',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Ejemplos ejecutables',
      description: 'Prueba el código y mira el resultado al instante.',
    },
    {
      icon: <FileEdit className="w-6 h-6" />,
      title: 'Markdown + vista previa en tiempo real',
      description: 'Escribe, edita y visualiza sin perder el ritmo.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Proyectos prácticos',
      description: 'Aplica lo aprendido con retos reales.',
    },
    {
      icon: <NotebookText className="w-6 h-6" />,
      title: 'Contenido organizado por niveles',
      description: 'Avanza desde lo básico hasta lo avanzado.',
    },
  ]

  return (
    <section id="caracteristicas" className="py-28 anchor-section">
      <BlurBlob className="-translate-x-[calc(65%)] -translate-y-[calc(-150%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Características principales</h2>
          <p className="text-muted-foreground mt-2">
            Herramientas diseñadas para acelerar tu aprendizaje.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.slice(0, 2).map((f) => (
            <SpotlightCard key={f.title} {...f} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {features.slice(2).map((f) => (
            <SpotlightCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
