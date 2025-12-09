import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Hero: React.FC = () => {
  const navigate = useNavigate()

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
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/images/background/space0.png')" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">React X</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
            Aprende react de forma interactiva con quizzes y retos.
          </p>
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
              className="snap-start h-screen w-full flex flex-col items-center justify-center px-6"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-62">
                {/* izquierda */}
                <button
                  onClick={() => goToModule(pair[0].id)}
                  className="flex flex-col items-center group pointer-events-auto cursor-pointer"
                >
                  <img
                    src={pair[0].img}
                    alt={pair[0].title}
                    className="w-32 sm:w-40 md:w-48 transition-transform group-hover:scale-110"
                  />
                  <span className="mt-3 text-white/90 text-lg font-medium">{pair[0].title}</span>
                </button>

                {/* derecha */}
                <button
                  onClick={() => goToModule(pair[1].id)}
                  className="flex flex-col items-center group pointer-events-auto cursor-pointer"
                >
                  <img
                    src={pair[1].img}
                    alt={pair[1].title}
                    className="w-32 sm:w-40 md:w-48 transition-transform group-hover:scale-110"
                  />
                  <span className="mt-3 text-white/90 text-lg font-medium">{pair[1].title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
