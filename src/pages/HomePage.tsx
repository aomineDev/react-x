import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Aprender React! 🚀</h1>
      <div>
        <h2>0. Fundamentos de react</h2>
        <Button asChild>
          <Link to="lesson/0/1">Tomar leccion</Link>
        </Button>
      </div>
      <div>
        <h2>1. Componentes</h2>
        <Button asChild>
          <Link to="lesson/1/1">Tomar leccion</Link>
        </Button>
      </div>
      <div>
        <h2>2. Props de un Componente</h2>
        <Button asChild>
          <Link to="lesson/2/1">Tomar leccion</Link>
        </Button>
      </div>

      <div>
        <h2>3. Eventos y estado</h2>
        <Button asChild>
          <Link to="lesson/3/1">Tomar leccion</Link>
        </Button>
      </div>

      <div>
        <h2>4. Formularios</h2>

        <Button asChild>
          <Link to="lesson/4/1">Tomar leccion</Link>
        </Button>
      </div>

      <div>
        <h2>5. Renderizado</h2>
        <Button asChild>
          <Link to="lesson/5/1">Tomar leccion</Link>
        </Button>
      </div>

      <div>
        <h2>6. Efectos secundarios</h2>
        <Button asChild>
          <Link to="lesson/6/1">Tomar leccion</Link>
        </Button>
      </div>

      <div>
        <h2>7. Hooks</h2>

        <Button asChild>
          <Link to="lesson/7/1">Tomar leccion</Link>
        </Button>
      </div>

      <div>
        <h2>8. Patornes y mejores practicas</h2>

        <Button asChild>
          <Link to="lesson/8/1">Tomar leccion</Link>
        </Button>
      </div>
    </>
  )
}

export default HomePage
