import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const niveles = [
  {
    id: 0,
    titulo: 'Nivel 0 — Fundamentos',
    descripcion:
      'Conceptos básicos de programación, estructura de archivos y cómo funciona React al nivel más esencial.',
  },
  {
    id: 1,
    titulo: 'Nivel 1 — Componentes',
    descripcion:
      'Aprende qué es un componente, cómo se construye y cómo reutilizarlo en toda tu interfaz.',
  },
  {
    id: 2,
    titulo: 'Nivel 2 — Props',
    descripcion:
      'Comunicación entre componentes, paso de datos y creación de interfaces dinámicas.',
  },
  {
    id: 3,
    titulo: 'Nivel 3 — Estado y Hooks',
    descripcion: 'useState, useEffect y lógica interactiva para hacer apps realmente vivas.',
  },
  {
    id: 4,
    titulo: 'Nivel 4 — Rutas',
    descripcion: 'React Router, navegación por páginas, rutas dinámicas y estructura profesional.',
  },
  {
    id: 5,
    titulo: 'Nivel 5 — Consumo de APIs',
    descripcion: 'Fetch, Axios, loaders, manejo de errores y datos reales conectados a tu UI.',
  },
  {
    id: 6,
    titulo: 'Nivel 6 — Proyecto Final',
    descripcion:
      'Construye un proyecto completo aplicando todo lo aprendido, con buenas prácticas y despliegue.',
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
            <Card className="border border-white/10 bg-black/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{niveles[index].titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {niveles[index].descripcion}
                </p>
              </CardContent>
            </Card>
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
