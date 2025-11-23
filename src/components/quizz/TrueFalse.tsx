import { useState, type ReactNode } from 'react'
import '../../assets/styles/Quizz1.css'

interface TrueFalseProps {
  pregunta: string
  codigo?: ReactNode
  nivel?: string
  correcta: 'true' | 'false'
}

export default function TrueFalse({ pregunta, codigo, nivel = 'Quiz', correcta }: TrueFalseProps) {
  const [seleccion, setSeleccion] = useState<'' | 'true' | 'false'>('')
  const [estado, setEstado] = useState<'' | 'correcto' | 'incorrecto'>('')
  const [botonTexto, setBotonTexto] = useState('Comprobar')

  function handleCheck() {
    if (!seleccion) return

    if (estado === 'incorrecto') {
      setSeleccion('')
      setEstado('')
      setBotonTexto('Comprobar')
      return
    }

    if (seleccion === correcta) {
      setEstado('correcto')
      setBotonTexto('Continuar')
    } else {
      setEstado('incorrecto')
      setBotonTexto('Intentarlo de nuevo')
    }
  }

  function handleSelect(value: 'true' | 'false') {
    if (estado === 'incorrecto') {
      setEstado('')
      setBotonTexto('Comprobar')
    }
    setSeleccion(value)
  }

  return (
    <div>
      <h1 id="quiz-nivel" className="nivel">
        {nivel}
      </h1>
      <div className="quizz-container" role="group" aria-labelledby="quiz-nivel">
        <h3>{pregunta}</h3>

        {codigo && <div className="code-block">{codigo}</div>}

        <div className="options-container" role="radiogroup" aria-label="Opciones Verdadero Falso">
          <button
            type="button"
            role="radio"
            disabled={estado === 'correcto'}
            aria-checked={seleccion === 'true'}
            className={`quizz-option ${seleccion === 'true' ? 'selected' : ''} ${
              seleccion === 'true' && estado === 'correcto' ? 'color-check' : ''
            } ${seleccion === 'true' && estado === 'incorrecto' ? 'color-err' : ''}`}
            onClick={() => handleSelect('true')}
          >
            Verdadero
          </button>

          <button
            type="button"
            role="radio"
            disabled={estado === 'correcto'}
            aria-checked={seleccion === 'false'}
            className={`quizz-option ${seleccion === 'false' ? 'selected' : ''} ${
              seleccion === 'false' && estado === 'correcto' ? 'color-check' : ''
            } ${seleccion === 'false' && estado === 'incorrecto' ? 'color-err' : ''}`}
            onClick={() => handleSelect('false')}
          >
            Falso
          </button>
        </div>

        <button
          className={`color-btn ${
            estado === 'correcto' ? 'color-check' : estado === 'incorrecto' ? 'color-err' : ''
          }`}
          onClick={handleCheck}
          disabled={!seleccion}
        >
          {botonTexto}
        </button>
      </div>
    </div>
  )
}
