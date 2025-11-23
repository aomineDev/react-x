import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <>
      <h1>Niveles</h1>
      <Button asChild>
        <Link to="lesson/1/1">Nivel 1</Link>
      </Button>
    </>
  )
}

export default HomePage
