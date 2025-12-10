# Listas en React: keys, filtros y ordenamiento

Renderizar listas es una de las tareas más comunes en interfaces dinámicas. En React, esto se hace combinando:

- El método `.map()` para transformar listas en JSX

- La prop `key` para que React identifique cada elemento

- Métodos como `.filter()` y `.sort()` para modificar la lista antes de renderizarla

> [!note]
> React necesita **keys únicas y estables** para optimizar la actualización del DOM virtual. Nunca uses índices como key si la lista puede cambiar de orden o eliminar elementos.

Hoy aprenderás a:

- Renderizar una lista con `.map()`

- Usar `keys` únicas para mejorar el rendimiento

- `Filtrar` una lista

- `Ordenar` una lista

- Aplicar todo en un ejemplo paso a paso

## ~1~ Crear una lista y renderizarla con .map()

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

> [!tip]
> .map() transforma un array de datos en un array de elementos JSX. Esto evita escribir elementos manualmente y facilita el render dinámico.

> [!note]
> React generará 3 <li> automáticamente.

## ~2~ Usar keys (muy importante)

React necesita saber cuál elemento pertenece a cuál dato, especialmente cuando la lista cambia.

```jsx showLineNumbers {3} title="App.tsx" /MarkdownHooks/
<ul>
  {students.map((name) => (
    <li key={name}>{name}</li>
  ))}
</ul>
```

> [!important]
> La key debe ser única y estable para cada elemento de la lista. React usa la key para identificar cambios y evitar renders innecesarios.

> [!caution]
> Evita usar índices de .map() como key si la lista puede reordenarse o eliminar elementos. Esto puede causar errores en el DOM virtual.

## ~3~ Filtrar listas antes de renderizar

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

> [!tip]
> .filter() te permite mostrar solo los elementos que cumplen cierta condición, manteniendo la lista original intacta.

## ~4~ Ordenar listas

Queremos ordenar por nombre.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
const sorted = [...students].sort((a, b) => a.name.localeCompare(b.name))
```

> [!note]
> Usamos el operador [...] para clonar el array antes de ordenar, evitando mutar el estado original.

> [!warning]
> Mutar directamente el estado (students.sort()) puede causar bugs inesperados en React.

## ~5~ Resultado final

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

> [!note]
> Ahora puedes filtrar, ordenar y renderizar listas dinámicamente de forma segura y eficiente.

> [!tip]
> Este patrón es la base para listas más complejas como tareas, productos o usuarios.

> [!caution]
> Siempre asegúrate de que cada key sea única, incluso si los datos provienen de un backend.

`Ahora es tu turno de implementarlo, gran trabajo`
