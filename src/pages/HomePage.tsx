import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <>
      <h1>Niveles</h1>
      <Button asChild>
        <Link to="lesson/0/1">Modulo 0</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/1/1">Modulo 1</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/2/1">Modulo 2</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/3/1">Modulo 3</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/4/1">Modulo 4</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/5/1">Modulo 5</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/6/1">Modulo 6</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/7/1">Modulo 7</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/8/1">Modulo 8</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/9/1">Modulo 9</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/10/1">Modulo 10</Link>
      </Button>
      <Button asChild>
        <Link to="lesson/11/1">Modulo 11</Link>
      </Button>
    </>
  )
}

export default HomePage
