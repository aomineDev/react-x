import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export const SectionAbout = () => {
  return (
    <section className="relative py-28" id="nosotros">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center md:justify-end">
          <img
            src="src/assets/images/landing/image.png"
            alt="Preview"
            className="rounded-xl shadow-xl w-[260px] sm:w-[300px] md:w-[380px] lg:w-[430px] object-cover"
          />
        </div>

        <div className="max-w-[520px] mx-auto text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Qué es esta plataforma?</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Nuestra plataforma no es simple documentación: son guías dinámicas e interactivas
            diseñadas para que aprendas React de forma práctica. Está creada para acompañarte desde
            cero, con contenido claro y progresivo.
            <br />
            <br />
            Incluye ejemplos ejecutables, ejercicios y proyectos reales, para que entiendas React de
            verdad.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
              <span className="text-sm text-muted-foreground">
                Guías paso a paso con ejemplos reales
              </span>
            </li>

            <li className="flex items-start gap-3 justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
              <span className="text-sm text-muted-foreground">
                Ejercicios interactivos y ejecución en vivo
              </span>
            </li>

            <li className="flex items-start gap-3 justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
              <span className="text-sm text-muted-foreground">
                Proyectos integrados para reforzar tus habilidades
              </span>
            </li>
          </ul>

          <Button size="lg" className="px-6 mx-auto md:mx-0">
            Saber más
          </Button>
        </div>
      </div>
    </section>
  )
}
