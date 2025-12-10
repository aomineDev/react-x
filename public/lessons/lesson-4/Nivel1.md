# Inputs Controlados

En React, un input controlado es un campo del formulario cuyo valor lo maneja React, no el DOM.

Eso significa:

- El valor del input viene del estado (useState).

- Cada vez que el usuario escribe, se ejecuta un onChange que actualiza ese estado.

- El JSX siempre muestra el valor actual del estado.

> React no deja el input “a la deriva”: tú controlas su valor.

Vamos a construir un pequeño formulario que muestre:

Un `<input>` controlado

Estado que refleja exactamente lo que el usuario escribe

Un mensaje dinámico debajo del input

## Paso 1 — Declarar estado para guardar lo que el usuario escribe

Creamos un estado llamado `nombre` para guardar el texto:

```jsx showLineNumbers {4} title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [nombre, setNombre] = useState('') // estado inicial vacío

  return <div></div>
}
```

## Paso 2 — Crear un input cuyo value dependa del estado

Ahora enlazamos:

- `value={nombre}` → React controla el valor.

- `onChange={handleChange}` → actualizamos el estado al escribir.

```jsx showLineNumbers {5,13-14} title="App.tsx" /MarkdownHooks/
export default function App() {
  const [nombre, setNombre] = useState('')

  function handleChange(event) {
    setNombre(event.target.value) // lo que escribe el usuario
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre} // input controlado
        onChange={handleChange} // manejar texto
      />
    </div>
  )
}
```

## Paso 3 — Mostrar en pantalla el valor del estado

Así comprobamos que el input está completamente controlado:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
export default function App() {
  const [nombre, setNombre] = useState('')

  function handleChange(event) {
    setNombre(event.target.value)
  }

  return (
    <div>
      <input type="text" placeholder="Escribe tu nombre" value={nombre} onChange={handleChange} />

      <p>Tu nombre es: {nombre || '—'}</p>
    </div>
  )
}
```

### Concepto clave

Un input controlado siempre sigue esta fórmula:

1. Un estado

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
const [value, setValue] = useState('')
```

2. El input muestra ese estado

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
value = { value }
```

3. El onChange actualiza el estado

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
onChange={(e) => setValue(e.target.value)}
```

Así React siempre sabe qué hay dentro del input.

`Ahora es tu turno de implementarlo, gran trabajo`
