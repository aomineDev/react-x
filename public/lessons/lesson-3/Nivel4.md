# Actualización de Estado Basada en el Estado Anterior (prevState)

En este nivel aprenderás cómo actualizar estado usando el valor anterior, una técnica esencial cuando el nuevo estado depende directamente del estado previo.

La idea será construir un pequeño ejemplo práctico:

- un texto editable dentro de un `<div>`
- un botón que activa/desactiva la edición
- usando prevState para actualizar correctamente

Imagina que tienes un panel donde el usuario puede activar o desactivar la edición de un bloque de texto. El estado debe alternar entre editable y no editable, y la mejor manera de hacerlo es actualizando usando el valor previo:

```jsx showLineNumbers {1} title="App.tsx" /MarkdownHooks/
setIsEditable((prev) => !prev)
```

Esto evita errores cuando React agrupa o aplaza actualizaciones.

## Paso 1 - Declarar el estado inicial

Primero definimos la propiedad que controlaremos.

```jsx showLineNumbers {4} title="App.tsx" /MarkdownHooks/x
import { useState } from 'react'

export default function App() {
  const [isEditable, setIsEditable] = useState(true) // Estado inicial
}
```

- `isEditable` → indica si el contenido es editable
- `setIsEditable` → función para cambiarlo
- `useState(true)` → empieza como editable

## Paso 2 - Usar el estado en el JSX

Ahora queremos que el `<div>` sea editable solo cuando `isEditable` sea `true`.

```jsx showLineNumbers {5} title="App.tsx" /MarkdownHooks/
export default function App() {
  const [isEditable, setIsEditable] = useState(true)

  return (
    <div contentEditable={isEditable}>
      Puedes editar este texto cuando la edición esté activada.
    </div>
  )
}
```

## Paso 3 - Crear un handler que usa prevState

Para alternar el valor (toggle) es obligatorio usar la forma basada en el estado previo:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function toggleEditable() {
  setIsEditable((prev) => !prev)
}
```

Esto es más seguro que:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
setIsEditable(!isEditable)
```

Evitarlo cuando depende del estado anterior.

## Paso 4 — Unir todo (ejemplo final)

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [isEditable, setIsEditable] = useState(true)

  function toggleEditable() {
    setIsEditable((prev) => !prev) // actualización basada en prevState
  }

  return (
    <div>
      <div contentEditable={isEditable}>
        Puedes editar este texto cuando la edición esté activada.
      </div>

      <button onClick={toggleEditable}>
        {isEditable ? 'Desactivar edición' : 'Activar edición'}
      </button>
    </div>
  )
}
```

`Ahora es tu turno de implementarlo, gran trabajo`
