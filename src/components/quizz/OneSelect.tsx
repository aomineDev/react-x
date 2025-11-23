import { useState, type ReactNode } from 'react'
import '../../assets/styles/Quizz1.css'
import { Button } from '../ui/button'
interface Opciones {
  pregunta: string
  codigo?: ReactNode
  nivel: string
  opciones: { clave: string; texto: string }[]
  correcta: string
}

type EstadoRespuesta = 'pendiente' | 'correcto' | 'incorrecto'

export default function OneSelect({ opciones }: { opciones?: Opciones }) {
  const [seleccion, setSeleccion] = useState<string>('')
  const [estado, setEstado] = useState<EstadoRespuesta>('pendiente')

  if (!opciones) {
    return <div>No hay pregunta disponible</div>
  }

  const { pregunta, nivel, codigo, opciones: listaOpciones, correcta } = opciones

  const handleSelect = () => {
    if (!seleccion) return

    if (seleccion === correcta) {
      setEstado('correcto')
    } else {
      setEstado('incorrecto')
    }
  }

  const handleContinuar = () => {
    console.log('Continuar al siguiente quiz')
    resetQuiz()
  }

  const resetQuiz = () => {
    setSeleccion('')
    setEstado('pendiente')
  }

  const handleBotonPrincipal = () => {
    if (estado === 'correcto') {
      handleContinuar()
    } else if (estado === 'incorrecto') {
      resetQuiz()
    } else {
      handleSelect()
    }
  }

  const getTextoBoton = () => {
    switch (estado) {
      case 'correcto':
        return 'Continuar'
      case 'incorrecto':
        return 'Intentarlo de nuevo'
      default:
        return 'Verificar'
    }
  }

  const getClaseOpcion = (clave: string) => {
    const clases = ['quizz-option']

    if (seleccion === clave) {
      clases.push('selected')

      if (estado === 'correcto') {
        clases.push('color-check')
      } else if (estado === 'incorrecto') {
        clases.push('color-err')
      }
    }

    return clases.join(' ')
  }

  const getClaseBoton = () => {
    const clases = ['color-btn']

    if (estado === 'correcto') {
      clases.push('color-check')
    } else if (estado === 'incorrecto') {
      clases.push('color-err')
    }

    return clases.join(' ')
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
              className=""
              onClick={() => setSeleccion(opcion.clave)}
              disabled={estado !== 'pendiente'}
              variant="outline"
            >
              {opcion.texto}
            </Button>
          ))}
        </div>
        <Button
          className="bg-green-500 hover:bg-green-600 text-white w-100 cursor-pointer"
          size="lg"
          disabled={!seleccion}
          onClick={handleBotonPrincipal}
        >
          {getTextoBoton()}
        </Button>
      </div>
    </div>
  )
}
