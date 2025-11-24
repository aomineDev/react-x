# Nivel 4 — Optimización Básica en React (memo, useCallback, useMemo)

En este nivel vamos a aprender a evitar renders innecesarios y mejorar el rendimiento.

Para enseñar este tema, construiremos un caso real paso a paso:

Una lista grande de usuarios donde un botón que no tiene nada que ver con la lista… provoca que la lista entera se vuelva a renderizar inútilmente.

Vamos a construirlo primero sin optimizaciones, luego agregaremos memo, useCallback, y useMemo, paso por paso.

## Paso 1 — El Problema (Componente que se renderiza de más)

Queremos una lista con 1000 usuarios, y un contador independiente.

Cada vez que incrementamos el contador, React vuelve a renderizar toda la lista, aunque NO la necesitamos cambiar.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const users = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Usuario ${i}`,
  }))

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrementar contador ({count})</button>

      <UserList users={users} />
    </div>
  )
}

function UserList({ users }) {
  console.log('Renderizando <UserList>...')
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}
```

> Problema: cada vez que tocamos el contador, `<UserList>` vuelve a renderizar aunque la lista no cambió.

## Paso 2 — Solución 1: memo() para evitar renders innecesarios

`memo` funciona como un guardia:

> Si las props NO cambiaron, no vuelvo a renderizar el componente.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { memo } from 'react'

const UserList = memo(function UserList({ users }) {
  console.log('Renderizando <UserList>...')
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
})
```

Pero… hay un problema:

`users` se crea en cada render → es un ARRAY NUEVO → `memo` piensa que cambió.

La optimización no funciona todavía.

## Paso 3 — Solución 2: useMemo() para estabilizar datos

Creamos la lista una sola vez.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
const users = useMemo(() => {
  return Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Usuario ${i}`,
  }))
}, [])
```

Ahora:

- `memo` recibirá SIEMPRE la misma referencia

- `<UserList>` ya no se re-renderiza al cambiar el contador

## Paso 4 — Solución 3: useCallback() para estabilizar funciones

Para completar el ejemplo, agregamos una función para seleccionar usuarios.

Sin optimizar:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function selectUser(id) {
  console.log('Seleccionado:', id)
}
```

Cada render crea una función NUEVA → rompe el memo del hijo.

Solución:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
const selectUser = useCallback((id) => {
  console.log('Seleccionado:', id)
}, [])
```

Ahora React genera la función una sola vez, y memo funciona sin problemas.

## Paso 5 — Resultado final

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState, useMemo, useCallback, memo } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const users = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `Usuario ${i}`,
    }))
  }, [])

  const selectUser = useCallback((id) => {
    console.log('Seleccionado:', id)
  }, [])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrementar contador ({count})</button>

      <UserList users={users} onSelect={selectUser} />
    </div>
  )
}

const UserList = memo(function UserList({ users, onSelect }) {
  console.log('Renderizando <UserList>...')
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id} onClick={() => onSelect(u.id)}>
          {u.name}
        </li>
      ))}
    </ul>
  )
})
```

`Ahora es tu turno de implementarlo, gran trabajo`
