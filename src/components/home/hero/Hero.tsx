import { Button } from '@/components/ui/button'
import { useAuth } from '@/store'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Hero: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const goToModule = (id: number) => {
    navigate(`/modulo/${id}`)
  }

  const slides = [
    [
      { id: 0, img: 'src/assets/images/planets/planeta1.png', title: 'Fundamentos' },
      { id: 1, img: 'src/assets/images/planets/planeta2.png', title: 'Componentes' },
    ],
    [
      { id: 2, img: 'src/assets/images/planets/planeta3.png', title: 'Props de un Componente' },
      { id: 3, img: 'src/assets/images/planets/planeta4.png', title: 'Eventos y estado' },
    ],
    [
      { id: 4, img: 'src/assets/images/planets/planeta5.png', title: 'Formularios' },
      { id: 5, img: 'src/assets/images/planets/planeta6.png', title: 'Renderizado' },
    ],
    [
      { id: 6, img: 'src/assets/images/planets/planeta7.png', title: 'Efectos secundarios' },
      { id: 7, img: 'src/assets/images/planets/planeta8.png', title: 'Hooks' },
    ],
    [
      {
        id: 8,
        img: 'src/assets/images/planets/planeta9.png',
        title: 'Patrones y mejores practicas',
      },
      { id: 9, img: 'src/assets/images/planets/planeta6.png', title: 'Context' },
    ],
  ]

  return (
    <div className="w-full overflow-hidden">
      {/* SECTION 1 */}
      <section className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/images/background/space1.png')" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">React X</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
            Aprende React de forma interactiva con quizzes, retos y desafíos que te ayudarán a
            dominar cada concepto paso a paso.
          </p>
          <p className="mt-2 text-md md:text-lg text-white/80 max-w-xl">
            Explora los módulos, practica tus habilidades y sigue tu progreso en tiempo real. ¡Tu
            aventura en React comienza aquí!
          </p>

          <div className="relative w-20 md:w-30 animate-float mt-60">
            <img
              src="src/assets/images/background/astronaut.png"
              alt="Astronauta"
              className="w-full"
            />
          </div>

          <Button
            size="lg"
            className="mt-8"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            ↓ Scrollear abajo
          </Button>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative min-h-screen w-full">
        <div
          className="fixed inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('src/assets/images/background/space2.png')" }}
        />

        <div className="snap-y snap-mandatory scroll-smooth">
          {slides.map((pair, i) => (
            <div
              key={i}
              className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-6"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-62">
                {user &&
                  pair.map((planet) => {
                    const isActive = planet.id === user?.currentLesson
                    const isLocked = planet.id > user?.currentLesson

                    return (
                      <div
                        key={planet.id}
                        className={`relative flex flex-col items-center group pointer-events-auto ${
                          isLocked ? 'cursor-not-allowed' : 'cursor-pointer'
                        }`}
                        onClick={() => !isLocked && goToModule(planet.id)}
                      >
                        {isActive && (
                          <img
                            src="src/assets/images/background/nave.png"
                            alt="Nave"
                            className="absolute z-10 -top-10 w-12 md:w-36 animate-bounce"
                          />
                        )}

                        <img
                          src={planet.img}
                          alt={planet.title}
                          className={`w-32 sm:w-40 md:w-80 transition-transform group-hover:scale-110 
          ${isLocked ? 'filter grayscale' : ''}`}
                        />
                        <span
                          className={`mt-3 text-lg font-medium ${
                            isLocked ? 'text-white/50' : 'text-white'
                          }`}
                        >
                          {planet.title}
                        </span>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
