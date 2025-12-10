# Compartir Estado Entre Componentes en React

Cuando tienes dos o más componentes que necesitan acceder o modificar el mismo estado, NO debes duplicar ese estado.

> [!note]
> La solución correcta es “elevar el estado” (*lifting state up*). El estado debe vivir en el componente más cercano que necesite compartirlo.

Vamos a construir un ejemplo práctico, queremos dos componentes:

- `CounterButton` → suma +1 cada vez que lo presionas

- `InfoPanel` → muestra el valor actual del contador

Ambos dependen del mismo estado, por lo tanto el estado debe vivir en el componente padre.

## ~1~ Componente padre que guarda el estado

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CounterButton count={count} setCount={setCount} />
      <InfoPanel count={count} />
    </div>
  )
}
```

Aquí ocurre la magia:

- App es dueño del estado

- CounterButton recibe el estado y una función para actualizarlo

- InfoPanel recibe solo el valor para mostrarlo

> [!tip]
> Mantener el estado en un solo lugar evita inconsistencias y facilita el mantenimiento del código.

> [!important]
> El componente padre es el dueño del estado. Solo él debe actualizarlo directamente; los hijos reciben props para leer o modificar el estado.

## ~2~ Componente que modifica el estado

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function CounterButton({ count, setCount }) {
  function handleClick() {
    setCount(count + 1)
  }

  return <button onClick={handleClick}>Sumar (+1)</button>
}
```

> [!note]
> Este componente no tiene estado propio, solo modifica el que le llega desde el padre. Esto mantiene los datos sincronizados en toda la aplicación.

> [!warning]
> Evita crear un estado duplicado en el hijo. Si lo haces, los valores podrían desincronizarse.

## ~3~ Componente que solo lee el estado

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function InfoPanel({ count }) {
  return <p>Valor actual del contador: {count}</p>
}
```

> [!tip]
> Componentes que solo leen el estado son más fáciles de testear y reutilizar.

> [!caution]
> No intentes modificar el estado directamente desde un componente que solo lo lee. Siempre pasa funciones desde el padre si necesitas actualizarlo.

## ~4~ Resultado final

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CounterButton count={count} setCount={setCount} />
      <InfoPanel count={count} />
    </div>
  )
}

function CounterButton({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Sumar (+1)</button>
}

function InfoPanel({ count }) {
  return <p>Valor actual del contador: {count}</p>
}
```

> [!note]
> Ahora CounterButton y InfoPanel comparten el mismo estado de manera segura y consistente.

> [!tip]
> Este patrón es fundamental antes de usar Context o librerías de estado global. Siempre comienza elevando el estado a un ancestro común.

> [!caution]
> No dupliques lógica de estado entre componentes; centraliza el estado para mantener la fuente de la verdad única.

`Ahora es tu turno de implementarlo, gran trabajo`
