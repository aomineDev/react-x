import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-12 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <img
          src="src/assets/images/logo/logo-reactX.png"
          alt="ReactX"
          className="w-[200px] sm:w-[260px] md:w-[380px] mx-auto object-contain"
        />

        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Una plataforma moderna para aprender React paso a paso con ejemplos reales y contenido
          dinámico.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto">
            Regístrate
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Ver lecciones
          </Button>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-center mt-10 md:mt-16">
        <div className="relative flex justify-center items-center w-full">
          <img
            src="src/assets/images/landing/preview1.png"
            alt="Preview"
            className="rounded-xl shadow-2xl w-full max-w-[1000px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
