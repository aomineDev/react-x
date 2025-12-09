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
import type { TrueFalseQuiz } from '@/types/quizConfig'
import { useCompleteQuizz } from '../hooks/useCompleteQuizz'

type EstadoRespuesta = 'pendiente' | 'correcto' | 'incorrecto'

export default function TrueFalse({ correcta, next, nivel, pregunta }: TrueFalseQuiz) {
  const [seleccion, setSeleccion] = useState<'V' | 'F' | ''>('')
  const [estado, setEstado] = useState<EstadoRespuesta>('pendiente')
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState(false)
  const { handleCompleteQuizz } = useCompleteQuizz()
  const { lessonId, quizzId } = useParams()

  const verificar = async () => {
    if (!seleccion) return

    if (seleccion === correcta) {
      setEstado('correcto')
      setSuccess(true)

      await handleCompleteQuizz(lessonId, quizzId, next)

      setShowModal(true)
    } else {
      setEstado('incorrecto')
    }
  }

  const reset = () => {
    setSeleccion('')
    setEstado('pendiente')
  }

  const handleBoton = () => {
    if (estado === 'incorrecto') reset()
    else verificar()
  }

  const getTextoBoton = () => {
    if (estado === 'correcto') return 'Correcto'
    if (estado === 'incorrecto') return 'Intentarlo de nuevo'
    return 'Verificar'
  }

  const getClaseBoton = () => {
    if (estado === 'correcto') return 'bg-green-600 hover:bg-green-700 text-white'
    if (estado === 'incorrecto') return 'bg-red-600 hover:bg-red-700 text-white'
    return 'bg-blue-600 hover:bg-blue-700 text-white'
  }

  const estiloOpcion = (clave: 'V' | 'F') => {
    let clases = 'w-full text-left border-2 py-3 transition-all duration-200'

    if (seleccion === clave) {
      if (estado === 'correcto') clases += ' border-green-500 bg-green-50 text-green-800'
      else if (estado === 'incorrecto') clases += ' border-red-500 bg-red-50 text-red-800'
      else clases += ' border-blue-500 bg-blue-50 text-blue-800'
    } else {
      clases += ' border-gray-300 hover:bg-gray-50 text-gray-700'
    }

    return clases
  }

  return (
    <div className="h-[calc(100vh-61px)]">
      <div className="max-h-full flex flex-col gap-6 items-center overflow-auto p-5">
        <h1 className="text-4xl capitalize font-bold primary-gradient">{nivel}</h1>
        <h3 className="text-lg">{pregunta}</h3>

        <div className="flex flex-col gap-4 w-full max-w-md">
          <Button
            variant="outline"
            className={estiloOpcion('V')}
            disabled={estado !== 'pendiente'}
            onClick={() => setSeleccion('V')}
          >
            Verdadero
          </Button>

          <Button
            variant="outline"
            className={estiloOpcion('F')}
            disabled={estado !== 'pendiente'}
            onClick={() => setSeleccion('F')}
          >
            Falso
          </Button>
        </div>

        <Button className={getClaseBoton()} size="lg" disabled={!seleccion} onClick={handleBoton}>
          {getTextoBoton()}
        </Button>

        {/* MODAL */}
        <AlertDialog open={showModal}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¡Reto Superado!</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="p-5 flex flex-col items-center text-center gap-3">
                  <Trophy className="text-yellow-500" size={75} />
                  <p>¡Excelente! Puedes avanzar a la siguiente sección.</p>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogAction>
                <Link to={next} className="flex items-center gap-2">
                  Continuar
                  <ArrowRight />
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Confetti show={success && showModal} />
        <Confetti show={success && showModal} fall />
      </div>
    </div>
  )
}
