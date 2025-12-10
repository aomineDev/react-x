# ¿Cuándo React renderiza algo?

En React, un render es cuando tu componente se vuelve a ejecutar para “calcular” el nuevo JSX que debería mostrarse en pantalla.

> [!note]
> Renderizar **NO significa actualizar el DOM**; React compara el resultado del render con el DOM actual y solo realiza los cambios necesarios.

React renderiza un componente solo cuando es necesario, siguiendo 3 grandes reglas.

## Render por cambio de estado (setState / useState)

Cuando llamas un setter de estado:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
setCount(count + 1)
```

React vuelve a ejecutar solo ese componente (y sus hijos) porque su estado cambió.

> [!tip]
> Si el nuevo estado es igual al anterior, React evita el render para optimizar el rendimiento.

> [!important]
> Siempre usa los setters (setCount) para actualizar el estado, nunca modifiques directamente la variable.

## Render por cambio de props

Si un componente recibe nuevas props:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
<Profile name={userName} />
```

y userName cambia, entonces Profile vuelve a renderizar.

> [!note]
> Esto incluye cambios de referencias, como objetos o funciones nuevas. React compara la referencia, no el contenido interno.

> [!warning]
> Pasar un objeto o función inline como prop puede causar renders innecesarios si no usas useMemo o useCallback.

## Render por re-render del padre

Si un componente padre se vuelve a renderizar:

- todos sus hijos se vuelven a renderizar también,

- aunque sus props no hayan cambiado.

Por eso existen optimizaciones como:

- `React.memo()`

- `useCallback()`

- `useMemo()`

> [!tip]
> Estas herramientas ayudan a evitar renders innecesarios y mejorar el rendimiento en aplicaciones grandes.

Vamos a construir un ejemplo paso a paso, el objetivo es entender cuándo React renderiza.
V
amos a usar un contador y un componente hijo para ver quién se re-renderiza y en qué momento.

## ~1~ Crear el componente raíz con estado

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

## ~2~ Agregar un componente hijo para observar su renderizado

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

> [!tip]
> Cada vez que el componente padre se renderiza, sus hijos también lo hacen, a menos que uses optimizaciones.

## ~3~ Mostrar que renderizar no siempre cambia el DOM

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

> [!note]
> El input no se borra, aunque Child se haya renderizado otra vez. React detecta que el `<input>` es el mismo nodo en la misma posición.

## ~4~ Mostrar un rerender por props

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

## ~5~ Resultado final

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

> [!note]
> React renderiza de forma inteligente, recalculando JSX y actualizando solo lo necesario en el DOM.

> [!tip]
> Usa console.log para observar renders y entender cómo React decide qué actualizar.

> [!caution]
> Evita re-renderizados innecesarios pasando objetos o funciones inline sin useMemo o useCallback.

`Ahora es tu turno de implementarlo, gran trabajo`
