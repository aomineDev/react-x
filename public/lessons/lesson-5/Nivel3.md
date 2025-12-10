# ¿Cuándo React renderiza algo?

En React, un render es cuando tu componente se vuelve a ejecutar para “calcular” el nuevo JSX que debería mostrarse en pantalla.

Renderizar NO significa que React actualice el DOM; solo significa que React decide qué debería mostrarse.
Luego compara ese resultado con el DOM actual para ver qué debe cambiar.

React renderiza un componente solo cuando es necesario, siguiendo 3 grandes reglas.

## Regla 1: Render por cambio de estado (setState / useState)

Cuando llamas un setter de estado:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
setCount(count + 1)
```

React vuelve a ejecutar solo ese componente (y sus hijos) porque su estado cambió.

> Si el nuevo estado es igual al anterior, React evita el render.

## Regla 2: Render por cambio de props

Si un componente recibe nuevas props:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
<Profile name={userName} />
```

y userName cambia, entonces Profile vuelve a renderizar.

> Esto incluye cambios de referencias, como objetos o funciones nuevas.

## Regla 3: Render por re-render del padre

Si un componente padre se vuelve a renderizar:

- todos sus hijos se vuelven a renderizar también,

- aunque sus props no hayan cambiado.

Por eso existen optimizaciones como:

- `React.memo()`

- `useCallback()`

- `useMemo()`

Vamos a construir un ejemplo paso a paso, el objetivo es entender cuándo React renderiza.
V
amos a usar un contador y un componente hijo para ver quién se re-renderiza y en qué momento.

## Paso 1 — Crear el componente raíz con estado

Creamos un contador simple:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
    </div>
  )
}
```

- Cada vez que llames a `setCount()`, React programa un re-renderizado.

- No actualiza el DOM de inmediato; solo “pide a la cocina” un nuevo pedido.

## Paso 2 — Agregar un componente hijo para observar su renderizado

Creamos un hijo que imprime un `console.log`.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function Child() {
  console.log('Child fue renderizado')

  return <p>Soy el hijo</p>
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Sumar</button>

      <Child />
    </div>
  )
}
```

Comprobación:

> Cada vez que presiones el botón, verás:

```
Child fue renderizado
```

> Cuando un componente padre se renderiza, todos sus hijos se vuelven a renderizar también (a menos que optimices).

## Paso 3 — Mostrar que renderizar no siempre cambia el DOM

Agregamos un `<input>`. Aunque el componente se renderiza, React no lo borra ni pierde su valor.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function Child() {
  console.log('Child fue renderizado')
  return (
    <>
      <p>Soy el hijo</p>
      <input placeholder="Escribe algo..." />
    </>
  )
}
```

Ahora prueba:

1. Escribe texto en el input

2. Haz click en "Sumar"

> El input NO se borra, aunque Child() se renderizó otra vez.
> React detecta que el `<input>` es el mismo nodo en la misma posición: no lo toca.

## Paso 4 — Mostrar un rerender por props

Ahora hacemos que el hijo reciba un valor:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function Child({ count }) {
  console.log('Child render con count:', count)
  return <p>Hijo recibe: {count}</p>
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Sumar</button>

      <Child count={count} />
    </div>
  )
}
```

- Cada vez que cambia `count`, React vuelve a llamar al hijo

- El hijo vuelve a renderizar

- React confirma los cambios mínimos en el DOM

## Paso 5 — Resultado final

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

function Child({ count }) {
  console.log('Child render con count:', count)

  return (
    <>
      <p>Hijo recibe: {count}</p>
      <input placeholder="Escribe algo..." />
    </>
  )
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Sumar</button>

      <Child count={count} />
    </div>
  )
}
```

`Ahora es tu turno de implementarlo, gran trabajo`
