# Actualización de Estado Basada en el Estado Anterior (prevState)

En este nivel aprenderás cómo actualizar estado usando el valor anterior, una técnica esencial cuando el nuevo estado depende directamente del estado previo.

> [!note]
> React puede agrupar o aplazar actualizaciones de estado por eficiencia. Por eso, cuando el nuevo valor depende del anterior, **siempre usa la función basada en prevState**.

La idea será construir un pequeño ejemplo práctico:

- un texto editable dentro de un `<div>`
- un botón que activa/desactiva la edición
- usando prevState para actualizar correctamente

Imagina que tienes un panel donde el usuario puede activar o desactivar la edición de un bloque de texto. El estado debe alternar entre editable y no editable, y la mejor manera de hacerlo es actualizando usando el valor previo:

```jsx showLineNumbers {1} title="App.tsx" /MarkdownHooks/
setIsEditable((prev) => !prev)
```

Esto evita errores cuando React agrupa o aplaza actualizaciones.

## ~1~ Declarar el estado inicial

Primero definimos la propiedad que controlaremos.

```jsx showLineNumbers {4} title="App.tsx" /MarkdownHooks/x
import { useState } from 'react'

export default function App() {
  const [isEditable, setIsEditable] = useState(true) // Estado inicial
}
```

> [!note]
> - `isEditable` → indica si el contenido es editable
> - `setIsEditable` → función para cambiarlo
> - `useState(true)` → empieza como editable

> [!tip]
> Siempre inicializa el estado de manera clara según el comportamiento esperado. Esto ayuda a evitar errores en el render inicial.

## ~2~ Usar el estado en el JSX

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

> [!important]
> contentEditable es un atributo booleano. React actualizará automáticamente el DOM según el valor de isEditable.

## ~3~ Crear un handler que usa prevState

Para alternar el valor (toggle) es obligatorio usar la forma basada en el estado previo:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function toggleEditable() {
  setIsEditable((prev) => !prev)
}
```

> [!warning]
> Evita hacer esto cuando depende del estado anterior:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
setIsEditable(!isEditable)
```

> [!caution]
> Usar directamente !isEditable puede funcionar a veces, pero falla si React agrupa múltiples actualizaciones en un mismo render. Siempre usa prevState para cambios dependientes del estado anterior.

> [!tip]
> Esta técnica también es útil para toggles de checkboxes, modales, menús desplegables, o cualquier estado booleano que deba alternar.

## ~4~ Unir todo (ejemplo final)

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

> [!note]
> Ahora tu toggle es seguro y confiable incluso si React procesa varias actualizaciones a la vez.

> [!tip]
> Puedes combinar este patrón con otros estados para crear paneles complejos y ediciones condicionales.

> [!caution]
> No mezcles manipulaciones directas del DOM con contentEditable sin estado de React. Esto puede generar inconsistencias.

`Ahora es tu turno de implementarlo, gran trabajo`
