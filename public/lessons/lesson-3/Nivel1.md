# Eventos (onClick, onChange, onSubmit)

En React, los eventos se manejan como funciones que se ejecutan cuando el usuario interactúa con la UI.

Son equivalentes a eventos del DOM, pero se escriben en **camelCase** y se pasan como funciones, no como *strings*.

> [!note]
> React **NO** modifica directamente el DOM, sino que recibe tu intención a través de *handlers* (manejadores de eventos). Esto es parte del concepto de **DOM Virtual**.

Vamos a construir un pequeño “Formulario de saludo”.
Incluye 3 interacciones:

- Un botón que responde al clic (`onClick`)
- Un *input* que reacciona al texto que el usuario escribe (`onChange`)
- Un formulario que se envía sin recargar la página (`onSubmit`)

Todo terminará en un ejemplo final funcional.

---

## ~1~ - Crear el componente base

Comenzamos con un componente vacío. Solo muestra un título y un *input* que todavía no hace nada.

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

## ~2~ - Manejar un clic (onClick) 

Queremos que el botón muestre un mensaje cuando el usuario haga clic.

- Declaramos la función `handleClick`.
- La pasamos al botón usando `onClick={handleClick}`.

> [!tip]
> El nombre de la función `handleClick` es una **convención común** en React para indicar que es un manejador de un evento de clic. Intenta seguir esta convención para mejorar la legibilidad del código.

> [!important]
> Cuando pasas el manejador al *prop* `onClick`, **debes pasar la función en sí** (`handleClick`), y **no invocarla** (`handleClick()`). Si usaras `handleClick()`, la función se ejecutaría inmediatamente durante el renderizado, no al hacer clic.

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

## ~3~ - Detectar lo que el usuario escribe (onChange)

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

> [!note]
> useState te permite mantener información entre renderizados. Aquí guardamos el valor del input en name.

> [!tip]
> Siempre que quieras depurar el valor de un input, console.log es tu amigo. Recuerda eliminarlo antes de producción.

## ~4~ - Manejar el submit del formulario (onSubmit)

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

> [!important]
> event.preventDefault() evita que el formulario recargue la página. Sin esto, perderías el estado del input.

> [!warning]
> No olvides envolver tus inputs en un `<form>` si planeas usar onSubmit. Solo usar onClick en botones no es suficiente para enviar formularios de forma semántica.

> [!caution]
> Si tienes varios botones dentro del formulario, type="submit" es importante para que se ejecute el onSubmit. Por defecto, un `<button>` dentro de un form es submit.

## ~5~ — Unión de todos los pasos (Ejemplo final para Sandpack)

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
