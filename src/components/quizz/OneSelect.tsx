import { useState, type ReactNode } from 'react'
import '../../assets/styles/Quizz1.css'
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
    <div>
      <h1 className="nivel">{nivel}</h1>
      <div className="quizz-container">
        <h3>{pregunta}</h3>
        {codigo && <div>{codigo}</div>}

        <div className="options-container">
          {listaOpciones.map((opcion) => (
            <button
              key={opcion.clave}
              className={getClaseOpcion(opcion.clave)}
              onClick={() => setSeleccion(opcion.clave)}
              disabled={estado !== 'pendiente'}
            >
              {opcion.texto}
            </button>
          ))}
        </div>

        <button className={getClaseBoton()} disabled={!seleccion} onClick={handleBotonPrincipal}>
          {getTextoBoton()}
        </button>
      </div>
    </div>
  )
}
