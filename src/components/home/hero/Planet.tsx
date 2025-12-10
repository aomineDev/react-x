import { useAuth } from '@/store'
import { useNavigate } from 'react-router-dom'

interface PlanetProps {
  id: number
  img: string
  title: string
}

const Planet = ({ id, img, title }: PlanetProps) => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const goToModule = (id: number) => {
    navigate(`/modulo/${id}`)
  }

  const isActive = id === user?.currentLesson
  const isLocked = user && id > user?.currentLesson

  return (
    <div
      className={`relative flex flex-col items-center md:even:translate-y-60 ${
        isLocked ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={() => !isLocked && goToModule(id)}
    >
      {isActive && (
        <img
          src="src/assets/images/background/nave.png"
          alt="Nave"
          className="absolute z-10 -top-10 w-12 md:w-36 animate-bounce "
        />
      )}

      <img
        src={img}
        alt={title}
        className={`w-32 sm:w-40 md:w-70 transition-transform hover:scale-110 my-planet ${
          isLocked ? 'filter grayscale' : ''
        }`}
      />
      <h4
        className={`mt-5 text-xl font-bold uppercase tracking-[6px] text-shadow-lg text-shadow-indigo-400  ${
          isLocked ? 'text-white/50' : 'text-gray-200'
        }`}
      >
        {title}
      </h4>
    </div>
  )
}

export default Planet
