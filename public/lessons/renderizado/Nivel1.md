# Nivel 1 — Renderizado Condicional en React

En React, el renderizado condicional te permite mostrar u ocultar partes de la UI según una condición.

Se usa cuando necesitas:

- Mostrar un loader

- Ocultar un formulario

- Cambiar de vista según el rol del usuario

- Mostrar mensajes de error

React no tiene una sintaxis especial como \*ngIf, sino que usa JavaScript directamente en el JSX. A continuación, los métodos principales:

|       Técnica | Uso ideal                                                |
| ------------: | :------------------------------------------------------- |
|            && | Mostrar algo solo cuando una condición es verdadera      |
|  Ternario ? : | Elegir entre 2 UI                                        |
| Early returns | Salir temprano de un componente si hay algo que bloquear |
|        switch | Cambiar vistas según un estado con varios casos          |

Vamos a construir un componente que dependiendo del estado muestre:

- `loading` → un <p>Cargando...</p>

- `guest` → un <button>Iniciar sesión</button>

- `user` → un <p>Bienvenido</p>

Además tendrá un mensaje especial usando `&&` solo si el usuario está logueado.

## Paso 1 — Crear el estado `mode`

```jsx showLineNumbers {4} title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [mode, setMode] = useState('loading') // "loading", "guest", "user"

  return <div>Panel</div>
}
```

## Paso 2 — Renderizado condicional básico con ternario

Para `loading` vs los demás:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
if (mode === 'loading') {
  return <p>Cargando...</p> // early return
}
```

> Este es el primer ejemplo de early return.

## Paso 3 — Mostrar vista según el estado con switch()

Después del early return:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
let content

switch (mode) {
  case 'guest':
    content = <button>Iniciar sesión</button>
    break

  case 'user':
    content = <p>Bienvenido</p>
    break

  default:
    content = <p>Modo desconocido</p>
}
```

## Paso 4 — Mostrar un mensaje extra solo si el usuario está logueado (&&)

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
{
  mode === 'user' && <p>🔥 Acceso premium desbloqueado</p>
}
```

## Paso 5 — Resultado final

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [mode, setMode] = useState('loading') // "loading", "guest", "user"

  // EARLY RETURN
  if (mode === 'loading') {
    return (
      <div>
        <p>Cargando...</p>
        <button onClick={() => setMode('guest')}>Simular carga</button>
      </div>
    )
  }

  // SWITCH PARA ELEGIR PANTALLA
  let content

  switch (mode) {
    case 'guest':
      content = <button onClick={() => setMode('user')}>Iniciar sesión</button>
      break

    case 'user':
      content = <p>Bienvenido</p>
      break

    default:
      content = <p>Modo desconocido</p>
  }

  return (
    <div>
      {content}

      {/* MOSTRAR EXTRA SOLO SI ES USER */}
      {mode === 'user' && <p>🔥 Acceso premium desbloqueado</p>}

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setMode('guest')}>Modo invitado</button>
        <button onClick={() => setMode('user')}>Modo usuario</button>
        <button onClick={() => setMode('loading')}>Modo loading</button>
      </div>
    </div>
  )
}
```

`Ahora es tu turno de implementarlo, gran trabajo`
