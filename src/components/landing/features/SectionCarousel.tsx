import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Activity,
  BookOpen,
  Boxes,
  ChevronLeft,
  ChevronRight,
  FileInput,
  GalleryVertical,
  GitCompareArrows,
  Layers,
  MousePointerClick,
  Sparkles,
} from 'lucide-react'
import { BlurBlob } from '@/components/ui/blur-blob'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

const niveles = [
  {
    id: 0,
    titulo: 'Nivel 0 — Fundamentos',
    descripcion:
      'Conceptos básicos de programación, estructura de archivos y cómo funciona React al nivel más esencial.',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: 1,
    titulo: 'Nivel 1 — Componentes',
    descripcion:
      'Aprende qué es un componente, cómo se construye y cómo reutilizarlo eficientemente.',
    icon: <Boxes className="w-6 h-6" />,
  },
  {
    id: 2,
    titulo: 'Nivel 2 — Props de un Componente',
    descripcion:
      'Comunicación entre componentes, paso de datos y creación de interfaces dinámicas.',
    icon: <GitCompareArrows className="w-6 h-6" />,
  },
  {
    id: 3,
    titulo: 'Nivel 3 — Eventos y Estado',
    descripcion: 'Interactividad, manejo de eventos, useState y lógica reactiva.',
    icon: <MousePointerClick className="w-6 h-6" />,
  },
  {
    id: 4,
    titulo: 'Nivel 4 — Formularios',
    descripcion:
      'Inputs controlados, validación, manejo de datos y patrones para formularios limpios.',
    icon: <FileInput className="w-6 h-6" />,
  },
  {
    id: 5,
    titulo: 'Nivel 5 — Renderizado',
    descripcion: 'Re-render, reconciliación, key, listas, condicionales y optimización visual.',
    icon: <GalleryVertical className="w-6 h-6" />,
  },
  {
    id: 6,
    titulo: 'Nivel 6 — Efectos Secundarios',
    descripcion: 'Uso correcto de useEffect, dependencias, ciclos de vida y patrones estables.',
    icon: <Activity className="w-6 h-6" />,
  },
  {
    id: 7,
    titulo: 'Nivel 7 — Hooks',
    descripcion: 'Hooks fundamentales, hooks personalizados y composición de lógica avanzada.',
    icon: <Layers className="w-6 h-6" />,
  },
  {
    id: 8,
    titulo: 'Nivel 8 — Patrones y Mejores Prácticas',
    descripcion:
      'Clean code, arquitectura de componentes, buenas prácticas y escalabilidad en React.',
    icon: <Sparkles className="w-6 h-6" />,
  },
]

export const SectionCarousel = () => {
  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? niveles.length - 1 : prevIndex - 1))
  }

  const next = () => {
    setIndex((prevIndex) => (prevIndex === niveles.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section id="lecciones" className="py-28 anchor-section">
      <BlurBlob
        className="-translate-y-[calc(-250%)]"
        colorFrom="rgba(0,150,255,0.25)"
        colorMid="rgba(30,143,255,0.18)"
        colorTo="rgba(15,23,42,0.08)"
        blur={220}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Ruta de Aprendizaje</h2>
          <p className="text-muted-foreground mt-2">
            Aprende React paso a paso con un contenido claro, progresivo y orientado a proyectos.
          </p>
        </div>

        <div className="relative flex items-center justify-center w-full">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full shadow-md hidden sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Card */}
          <div className="w-full max-w-xl">
            <SpotlightCard
              icon={niveles[index].icon}
              title={niveles[index].titulo}
              description={niveles[index].descripcion}
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full shadow-md hidden sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {niveles.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-primary w-4' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
