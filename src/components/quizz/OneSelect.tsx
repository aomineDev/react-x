import { useState, type ReactNode } from 'react'
import '../../assets/styles/Quizz1.css'
interface Opciones {
  pregunta: string
  codigo?: ReactNode
  nivel: string
  opciones: { clave: string; texto: string }[]
  correcta: string
}

export default function OneSelect({ opciones }: { opciones: Opciones }) {
  const { pregunta, nivel, codigo, opciones: listaOpciones, correcta } = opciones
  const [seleccion, setSeleccion] = useState('')
  const [estado, setEstado] = useState('')
  const [nombre, setNombre] = useState('Check')
  const [color, setColor] = useState('color-btn')
  console.log(color)
  const handleSelect = () => {
    if (seleccion === null) return
    if (seleccion === correcta) {
      setEstado('correcto')
      setColor('color-check')
      setNombre('Continuar')
    } else {
      setEstado('incorrecto')
      setColor('color-err')
      setNombre('Intentalo de nuevo ')
    }
  }

  return (
    <div>
      <h1 className="nivel">{nivel}</h1>
      <div className="quizz-container">
        <h3>{pregunta}</h3>
        <h1>{codigo}</h1>
        <div className="options-container">
          {listaOpciones.map((o) => (
            <button
              key={o.clave}
              className={`quizz-option 
    ${seleccion === o.clave ? 'selected' : ''} 
    ${seleccion === o.clave && estado === 'correcto' ? 'color-check' : ''} 
    ${seleccion === o.clave && estado === 'incorrecto' ? 'color-err' : ''}`}
              onClick={() => setSeleccion(o.clave)}
            >
              {o.texto}
            </button>
          ))}
        </div>

        <button
          className={`color-btn ${
            estado === 'correcto' ? 'color-check' : estado === 'incorrecto' ? 'color-err' : ''
          }`}
          disabled={!seleccion}
          onClick={handleSelect}
        >
          {nombre}
        </button>
      </div>
    </div>
  )
}
