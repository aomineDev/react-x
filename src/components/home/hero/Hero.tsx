import { Button } from '@/components/ui/button'
import { useTheme } from '@/store'
import { ArrowDown } from 'lucide-react'
import React, { useEffect } from 'react'
import Planet from './Planet'
import Arrow from '@/assets/images/background/arrow.png'

export const Hero: React.FC = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  const lessons = [
    { id: 0, img: 'src/assets/images/planets/planeta1.png', title: 'Fundamentos' },
    { id: 1, img: 'src/assets/images/planets/planeta2.png', title: 'Componentes' },
    { id: 2, img: 'src/assets/images/planets/planeta3.png', title: 'Props de un Componente' },
    { id: 3, img: 'src/assets/images/planets/planeta4.png', title: 'Eventos y estado' },
    { id: 4, img: 'src/assets/images/planets/planeta5.png', title: 'Formularios' },
    { id: 5, img: 'src/assets/images/planets/planeta6.png', title: 'Renderizado' },
    { id: 6, img: 'src/assets/images/planets/planeta7.png', title: 'Efectos secundarios' },
    { id: 7, img: 'src/assets/images/planets/planeta8.png', title: 'Hooks' },
    {
      id: 8,
      img: 'src/assets/images/planets/planeta9.png',
      title: 'Patrones y mejores practicas',
    },
    { id: 9, img: 'src/assets/images/planets/planeta6.png', title: 'Context' },
  ]

  return (
    <>
      <section className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/images/background/space1.png')" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg ">
            React X
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
            Aprende React de forma interactiva con quizzes, retos y desafíos que te ayudarán a
            dominar cada concepto paso a paso.
          </p>

          <div className="relative w-20 md:w-50 animate-float mt-20">
            <img
              src="src/assets/images/background/astronaut.png"
              alt="Astronauta"
              className="w-full"
            />
          </div>

          <Button
            size="lg"
            className="mt-8 border-2 ring dark:ring-white! flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:bg-white/10 rounded-full cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            variant="outline"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" /> Scroll
          </Button>
        </div>

        <div className="h-50 absolute bottom-0 left-0 w-full z-10 bg-linear-to-t from-background to-black/0"></div>
      </section>

      <div className="py-30 bg-background ">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="primary-gradient text-5xl font-bold mb-5 ">Explora las Lecciones</h2>
          <p className="text-lg w-3/4 mx-auto text-neutral-300 mb-5">
            Explora los módulos, practica tus habilidades y sigue tu progreso en tiempo real. ¡Tu
            aventura en React comienza aquí! 🚀
          </p>
          <img src={Arrow} alt="arrow" className="inline-block" />
        </div>
      </div>

      <section className="relative grid grid-cols-1 grid-rows-1">
        <div className="h-50 absolute top-0 left-0 w-full z-10 bg-linear-to-b from-background to-black/0 pointer-events-none"></div>

        <div
          className="col-1 row-1 sticky top-0 h-dvh bg-cover bg-center z-1 :"
          style={{ backgroundImage: "url('src/assets/images/background/space2.png')" }}
        />

        <div className="col-1 row-1 z-2 py-30 md:pb-100 grid grid-cols-1 md:grid-cols-2 gap-y-30  md:gap-y-60 container mx-auto px-4 md:px-6 lg:px-8 ">
          {lessons.map((planet) => (
            <Planet {...planet} />
          ))}
        </div>
      </section>
    </>
  )
}
