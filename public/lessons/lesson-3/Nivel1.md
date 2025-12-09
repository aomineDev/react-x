# Eventos (onClick, onChange, onSubmit)

En React, los eventos se manejan como funciones que se ejecutan cuando el usuario interactúa con la UI.

Son equivalentes a eventos del DOM, pero se escriben en camelCase y se pasan como funciones, no como strings.

> React NO modifica directamente el DOM, sino que recibe tu intención a través de handlers.

vamos a construir un pequeño “Formulario de saludo”.
Incluye 3 interacciones:

- Un botón que responde al clic (onClick)

- Un input que reacciona al texto que el usuario escribe (onChange)

- Un formulario que se envía sin recargar la página (onSubmit)

Todo terminará en un ejemplo final funcional.

## Paso 1 - Crear el componente base

Comenzamos con un componente vacío. Solo muestra un título y un input que todavía no hace nada.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
export default function App() {
  return (
    <div>
      <h1>Formulario de saludo</h1>

      <input type="text" placeholder="Escribe tu nombre..." />
      <button>Saludar</button>
    </div>
  )
}
```

## Paso 2 - Manejar un clic (onClick)

Queremos que el botón muestre un mensaje cuando el usuario haga clic.

- Declaramos la función `handleClick`.
- La pasamos al botón usando `onClick={handleClick}`.

```jsx showLineNumbers {2-4,11} title="App.tsx" /MarkdownHooks/
export default function App() {
  function handleClick() {
    alert('Botón presionado')
  }

  return (
    <div>
      <h1>Formulario de saludo</h1>

      <input type="text" placeholder="Escribe tu nombre..." />
      <button onClick={handleClick}>Saludar</button>
    </div>
  )
}
```

## Paso 3 - Detectar lo que el usuario escribe (onChange)

Queremos guardar lo que el usuario escribe en el input.

Añadimos:

- Una variable de estado `name`

```jsx showLineNumbers {4} title="App.tsx" /MarkdownHooks/
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  ...
}
```

Una vez implementado, añadimos:

- Un manejador handleChange que lee `event.target.value`

```jsx showLineNumbers {6-9,15} title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')

  function handleChange(event) {
    setName(event.target.value)
    console.log('Nuevo valor:', event.target.value)
  }

  return (
    <div>
      <h1>Formulario de saludo</h1>

      <input type="text" placeholder="Escribe tu nombre..." onChange={handleChange} />

      <button onClick={handleClick}>Saludar</button>
    </div>
  )
}
```

Ahora reconocemos lo que el usuario escribe.

## Paso 4 - Manejar el submit del formulario (onSubmit)

Ahora queremos que el saludo dependa del texto que escribió el usuario.

Añadimos:

- `handleSubmit`

- `event.preventDefault()` (para evitar que el navegador recargue la página)

```jsx showLineNumbers {5-8} title="App.tsx" /MarkdownHooks/
import { useState } from "react";

export default function App() {

  function handleSubmit(event) {
    event.preventDefault();
    alert("Hola " + name);
  }

  ...
}
```

Por ultimo, envolvemos el input en un formulario y usamos la función `handleSubmit`.

```jsx showLineNumbers {10} title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  function handleSubmit(event) {
    event.preventDefault()
    alert('Hola ' + name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulario de saludo</h1>

      <input type="text" placeholder="Escribe tu nombre..." onChange={handleChange} />

      <button>Enviar</button>
    </form>
  )
}
```

## Paso 5 — Unión de todos los pasos (Ejemplo final para Sandpack)

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')

  function handleClick() {
    alert('Hiciste clic en el botón de saludo')
  }

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert('Hola ' + name)
  }

  return (
    <div>
      <h1>Formulario de saludo</h1>

      {/* onSubmit */}
      <form onSubmit={handleSubmit}>
        {/* onChange */}
        <input type="text" placeholder="Escribe tu nombre..." onChange={handleChange} />

        {/* onClick */}
        <button onClick={handleClick}>Clic saludo</button>
        <button>Enviar</button>
      </form>
    </div>
  )
}
```

`Ahora es tu turno de implementarlo, gran trabajo`
