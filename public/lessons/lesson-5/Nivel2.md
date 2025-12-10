# Listas en React: keys, filtros y ordenamiento

Renderizar listas es una de las tareas más comunes en interfaces dinámicas. En React, esto se hace combinando:

- El método `.map()` para transformar listas en JSX

- La prop `key` para que React identifique cada elemento

- Métodos como `.filter()` y `.sort()` para modificar la lista antes de renderizarla

Hoy aprenderás a:

- Renderizar una lista con `.map()`

- Usar `keys` únicas para mejorar el rendimiento

- `Filtrar` una lista

- `Ordenar` una lista

- Aplicar todo en un ejemplo paso a paso

## Paso 1 — Crear una lista y renderizarla con .map()

Queremos mostrar una lista de estudiantes. Luego agregaremos:

- Un filtro para mostrar solo los aprobados

- Un botón que ordene alfabéticamente

En React, no escribes un `<li>` por cada elemento.
Transformas un array en JSX usando `.map()`.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
export default function App() {
  const students = ['Ana', 'Carlos', 'Beto']

  return (
    <ul>
      {students.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  )
}
```

> React generará 3 <li> automáticamente.

## Paso 2 — Usar keys (muy importante)

React necesita saber cuál elemento pertenece a cuál dato, especialmente cuando la lista cambia.

```jsx showLineNumbers {3} title="App.tsx" /MarkdownHooks/
<ul>
  {students.map((name) => (
    <li key={name}>{name}</li>
  ))}
</ul>
```

> La key debe ser estable y única

## Paso 3 — Filtrar listas antes de renderizar

Queremos mostrar solo estudiantes aprobados.

```jsx showLineNumbers {7} title="App.tsx" /MarkdownHooks/
const students = [
  { name: 'Ana', grade: 18 },
  { name: 'Luis', grade: 11 },
  { name: 'Carla', grade: 15 },
]

const approved = students.filter((s) => s.grade >= 14)
```

Y renderizamos:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
<ul>
  {approved.map((s) => (
    <li key={s.name}>
      {s.name} - {s.grade}
    </li>
  ))}
</ul>
```

## Paso 4 — Ordenar listas

Queremos ordenar por nombre.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
const sorted = [...students].sort((a, b) => a.name.localeCompare(b.name))
```

## Paso 5 — Resultado final

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function StudentList() {
  const [students] = useState([
    { name: 'Ana', grade: 18 },
    { name: 'Luis', grade: 11 },
    { name: 'Carla', grade: 15 },
  ])

  const approved = students.filter((s) => s.grade >= 14)
  const sortedApproved = [...approved].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div>
      <h2>Estudiantes aprobados (ordenados)</h2>

      <ul>
        {sortedApproved.map((s) => (
          <li key={s.name}>
            {s.name} — {s.grade}
          </li>
        ))}
      </ul>
    </div>
  )
}
```

`Ahora es tu turno de implementarlo, gran trabajo`
