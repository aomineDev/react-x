import { useState } from 'react'
import { Button } from '../ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog'
import { ArrowRight, Trophy } from 'lucide-react'
import Confetti from '@/components/Confetti'
import { Link } from 'react-router-dom'
import CodeBlock from '../CodeBlock'
import type { OneSelectQuiz } from '@/types/quizConfig'

type EstadoRespuesta = 'pendiente' | 'correcto' | 'incorrecto'

export default function OneSelect({
  correcta,
  opciones,
  next,
  pregunta,
  nivel,
  codigo,
}: OneSelectQuiz) {
  const [seleccion, setSeleccion] = useState<string>('')
  const [estado, setEstado] = useState<EstadoRespuesta>('pendiente')
  const [showModal, setShowModal] = useState(false)

  const [success, setSuccess] = useState(false)
  if (!opciones) {
    return <div>No hay pregunta disponible</div>
  }

  const handleSelect = () => {
    if (!seleccion) return

    if (seleccion === correcta) {
      setEstado('correcto')
      setSuccess(true)
      setShowModal(true)
    } else {
      setEstado('incorrecto')
    }
  }

  const resetQuiz = () => {
    setSeleccion('')
    setEstado('pendiente')
  }

  const handleBotonPrincipal = () => {
    if (estado === 'incorrecto') {
      resetQuiz()
    } else {
      handleSelect()
    }
  }

  const getTextoBoton = () => {
    if (estado == 'correcto') {
      return '¡Correcto¡'
    }
    if (estado === 'incorrecto') {
      return 'Intentalo de nuevo'
    }
    return 'Verificar'
  }

  const getClaseOpcion = (clave: string) => {
    if (seleccion === clave) {
      if (estado === 'correcto')
        return 'border-green-500 dark:border-green-500 bg-green-500/10 dark:bg-green-500/10 text-green-500 hover:bg-green-500/10 dark:hover:bg-green-500/10 hover:text-green-500'
      else if (estado === 'incorrecto')
        return 'border-red-500 dark:border-red-500 bg-red-500/10 dark:bg-red-500/10 text-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/10 hover:text-red-500'
      else
        return 'border-blue-500 dark:border-blue-500 bg-blue-500/10 dark:bg-blue-500/10 text-blue-500 hover:bg-blue-500/10 dark:hover:bg-blue-500/10 hover:text-blue-500'
    }

    return ''
  }

  const getClaseBoton = () => {
    if (estado === 'correcto') {
      return ' bg-green-600 hover:bg-green-700'
    } else if (estado === 'incorrecto') {
      return ' bg-red-600 hover:bg-red-700'
    }
    return ' bg-blue-600 hover:bg-blue-700'
  }

  return (
    <>
      <div className="max-h-full flex flex-col gap-5 items-center overflow-auto p-5">
        <h1 className="text-4xl capitalize font-bold primary-gradient">Quizz {nivel}</h1>
        <h3>{pregunta}</h3>
        {codigo && <CodeBlock>{codigo.toString()}</CodeBlock>}
        <div className="flex flex-col gap-4 w-100">
          {opciones.map((opcion) => (
            <Button
              key={opcion.clave}
              className={`w-full border-2 transition-all duration-200 border-b-4 cursor-pointer ${getClaseOpcion(
                opcion.clave
              )}`}
              onClick={() => setSeleccion(opcion.clave)}
              disabled={estado !== 'pendiente'}
              variant="outline"
            >
              {opcion.texto}
            </Button>
          ))}
        </div>
        <Button
          className={`cursor-pointer text-white w-100 ${getClaseBoton()}`}
          size="lg"
          disabled={!seleccion}
          onClick={handleBotonPrincipal}
        >
          {getTextoBoton()}
        </Button>

        <AlertDialog open={showModal}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¡Reto Superado!</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="p-5 flex justify-center">
                  <Trophy className="text-yellow-500" size={75}></Trophy>
                </div>
                ¡Felicitaciones, has superado el reto! Puedes avanzar a la siguiente sección.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>
                <Link to={`${next}`} className="flex items-center gap-2">
                  Continuar <ArrowRight />
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Confetti show={success && showModal} />
        <Confetti show={success && showModal} fall />
      </div>
    </>
  )
}
