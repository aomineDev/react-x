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
import { Link, useParams } from 'react-router-dom'
import CodeBlock from '../CodeBlock'
import type { MultiSelectQuiz } from '@/types/quizConfig'
import { useCompleteQuizz } from '../hooks/useCompleteQuizz'

type EstadoRespuesta = 'pendiente' | 'correcto' | 'incorrecto'

interface MultiSelectProps extends MultiSelectQuiz {
  onComplete?: () => void
}

export default function MultiSelect({
  correctas,
  opciones,
  next,
  pregunta,
  nivel,
  codigo,
  onComplete,
}: MultiSelectProps) {
  const [selecciones, setSelecciones] = useState<string[]>([])
  const [estado, setEstado] = useState<EstadoRespuesta>('pendiente')
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState(false)
  const { handleCompleteQuizz } = useCompleteQuizz()
  const { lessonId, quizzId } = useParams()

  const toggleSeleccion = (clave: string) => {
    if (estado !== 'pendiente') return

    setSelecciones((prev) => {
      if (prev.includes(clave)) {
        return prev.filter((item) => item !== clave)
      } else {
        return [...prev, clave]
      }
    })
  }

  const handleSelect = async () => {
    if (selecciones.length === 0) return

    const seleccionesOrdenadas = [...selecciones].sort()
    const correctasOrdenadas = [...correctas].sort()

    const esCorrect =
      seleccionesOrdenadas.length === correctasOrdenadas.length &&
      seleccionesOrdenadas.every((val, index) => val === correctasOrdenadas[index])

    if (esCorrect) {
      setEstado('correcto')
      setSuccess(true)

      await handleCompleteQuizz(lessonId, quizzId, next)

      // Si hay callback (está en carousel), úsalo en lugar del modal
      if (onComplete) {
        onComplete()
      } else {
        // Si no hay callback (quiz individual), muestra el modal
        setShowModal(true)
      }
    } else {
      setEstado('incorrecto')
    }
  }

  const resetQuiz = () => {
    setSelecciones([])
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
      return '¡Correcto!'
    }
    if (estado === 'incorrecto') {
      return 'Intentalo de nuevo'
    }
    return 'Verificar'
  }

  const getClaseOpcion = (clave: string) => {
    if (selecciones.includes(clave)) {
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
        <p className="text-sm text-gray-500">Selecciona todas las respuestas correctas</p>
        <div className="flex flex-col gap-4 w-100">
          {opciones.map((opcion) => (
            <Button
              key={opcion.clave}
              className={`
    w-full
    border-2
    border-b-4
    transition-all
    duration-200
    cursor-pointer
    whitespace-normal
    wrap-break-words
    text-left
    p-6
    ${getClaseOpcion(opcion.clave)}
  `}
              onClick={() => toggleSeleccion(opcion.clave)}
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
          disabled={selecciones.length === 0}
          onClick={handleBotonPrincipal}
        >
          {getTextoBoton()}
        </Button>

        {/* Solo mostrar modal si NO está en carousel */}
        {!onComplete && (
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
        )}

        <Confetti show={success && (showModal || !!onComplete)} />
        <Confetti show={success && (showModal || !!onComplete)} fall />
      </div>
    </>
  )
}
