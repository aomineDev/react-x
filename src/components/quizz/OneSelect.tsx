import { useState, type ReactNode } from 'react'
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
import { Link } from 'react-router'
interface Opciones {
  pregunta: string
  codigo?: ReactNode
  nivel: string
  opciones: { clave: string; texto: string }[]
  correcta: string
  next: string
}

type EstadoRespuesta = 'pendiente' | 'correcto' | 'incorrecto'

export default function OneSelect({ opciones }: { opciones?: Opciones }) {
  const [seleccion, setSeleccion] = useState<string>('')
  const [estado, setEstado] = useState<EstadoRespuesta>('pendiente')
  const [showModal, setShowModal] = useState(false)

  const [success, setSuccess] = useState(false)
  if (!opciones) {
    return <div>No hay pregunta disponible</div>
  }

  const { pregunta, nivel, codigo, opciones: listaOpciones, correcta, next } = opciones

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
      return 'Correcto'
    }
    if (estado === 'incorrecto') {
      return 'Intentarlo de nuevo'
    }
    return 'Verificar'
  }
  const getClaseOpcion = (clave: string) => {
    let clases = 'w-full text-left border-2 transition-all duration-200'

    if (seleccion === clave) {
      if (estado === 'correcto') {
        clases += ' border-green-500 bg-green-50 text-green-800'
      } else if (estado === 'incorrecto') {
        clases += ' border-red-500 bg-red-50 text-red-800'
      } else {
        clases += ' border-blue-500 bg-blue-50 text-blue-800'
      }
    } else {
      clases += ' border-gray-300 bg-white hover:bg-gray-50 text-gray-700'
    }

    return clases
  }

  const getClaseBoton = () => {
    if (estado === 'correcto') {
      return 'bg-green-600 hover:bg-green-700 text-white w-100'
    } else if (estado === 'incorrecto') {
      return 'bg-red-600 hover:bg-red-700 text-white w-100'
    }
    return 'bg-blue-600 hover:bg-blue-700 text-white w-100'
  }
  return (
    <div className="h-[calc(100vh-61px)]">
      <div className="max-h-full flex flex-col gap-5  items-center overflow-auto p-5">
        <h1 className="text-4xl capitalize font-bold primary-gradient">{nivel}</h1>
        <h3>{pregunta}</h3>
        {codigo && <div>{codigo}</div>}
        <div className="flex flex-col gap-4 w-100">
          {listaOpciones.map((opcion) => (
            <Button
              key={opcion.clave}
              className={getClaseOpcion(opcion.clave)}
              onClick={() => setSeleccion(opcion.clave)}
              disabled={estado !== 'pendiente'}
              variant="outline"
            >
              {opcion.texto}
            </Button>
          ))}
        </div>
        <Button
          className={getClaseBoton()}
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
    </div>
  )
}
