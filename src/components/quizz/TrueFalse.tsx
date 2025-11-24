import { useState, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface Opciones {
  pregunta: string
  codigo?: ReactNode
  nivel: string
  opciones: { clave: string; texto: string }[]
  correcta: string
}

type EstadoRespuesta = 'pendiente' | 'correcto' | 'incorrecto'

export default function TrueFalse({ opciones }: { opciones?: Opciones }) {
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

  const resetQuiz = () => {
    setSeleccion('')
    setEstado('pendiente')
  }

  const handleBotonPrincipal = () => {
    if (estado === 'correcto') {
      console.log('Continuar al siguiente quiz')
      resetQuiz()
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

  return (
    <div className="h-[calc(100vh-61px)]">
      <div className="max-h-full flex flex-col gap-6 items-center overflow-auto p-5">
        {/* Nivel */}
        <h1 className="text-4xl capitalize font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          {nivel}
        </h1>

        {/* Pregunta */}
        <h3 className="text-lg text-center font-medium">{pregunta}</h3>

        {/* Código opcional */}
        {codigo && <div className="w-full bg-muted p-4 rounded-lg text-sm">{codigo}</div>}

        {/* Opciones */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          {listaOpciones.map((opcion) => {
            const esSeleccionada = seleccion === opcion.clave

            const color =
              estado === 'correcto' && esSeleccionada
                ? 'border-green-500 text-green-700'
                : estado === 'incorrecto' && esSeleccionada
                ? 'border-red-500 text-red-600'
                : ''

            return (
              <Button
                key={opcion.clave}
                variant="outline"
                disabled={estado !== 'pendiente'}
                onClick={() => setSeleccion(opcion.clave)}
                className={`w-full py-6 text-base justify-start ${color} ${
                  esSeleccionada ? 'bg-accent' : ''
                }`}
              >
                {opcion.texto}
              </Button>
            )
          })}
        </div>

        {/* Botón principal */}
        <Button
          disabled={!seleccion}
          onClick={handleBotonPrincipal}
          size="lg"
          className={`w-full max-w-md text-white text-lg py-6 ${
            estado === 'correcto'
              ? 'bg-green-500 hover:bg-green-600'
              : estado === 'incorrecto'
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {getTextoBoton()}
        </Button>
      </div>
    </div>
  )
}
