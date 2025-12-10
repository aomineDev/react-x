# Estado con Objetos y Arrays en React

Hasta ahora manejaste estados simples: números y booleanos.
Pero en aplicaciones reales casi siempre trabajas con objetos y arreglos: usuarios, listas de tareas, formularios, etc.

En este nivel aprenderás:

- Cómo guardar objetos y arrays en el estado.

- Cómo actualizarlos sin mutarlos.

- Cómo usar prevState para actualizaciones seguras.

- Cómo hacer un ejemplo práctico estilo tutorial.

> [!note]
> React **no permite mutar directamente** el estado. Siempre crea copias nuevas al actualizar arrays u objetos para que React detecte los cambios y vuelva a renderizar.

Queremos construir un pequeño ejemplo de lista de tareas, donde:

- Guardaremos un array en el estado.

- Podremos agregar nuevas tareas.

- Podremos marcar tareas como completadas.

## ~1~ Declarar un estado con un array

Usaremos `useState` para guardar una lista inicial de tareas:

```jsx showLineNumbers {4} title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React', done: false },
    { id: 2, text: 'Practicar useState', done: false },
  ])

  return <div>Tareas: {tasks.length}</div>
}
```

> [!note]
> Cada objeto representa una tarea. tasks es el array completo, setTasks actualiza el estado.

> [!tip]
> Puedes usar crypto.randomUUID() o cualquier generador de IDs para nuevas tareas, asegurando que cada elemento tenga un key único al renderizar.

## ~2~ Mostrar las tareas usando .map

Para renderizar la lista:

```jsx showLineNumbers {5} title="App.tsx" /MarkdownHooks/
return (
  <div>
    <h2>Mis tareas</h2>

    {tasks.map((task) => (
      <div key={task.id}>
        <input type="checkbox" checked={task.done} />
        {task.text}
      </div>
    ))}
  </div>
)
```

> [!important]
> Siempre usa key en elementos de listas renderizadas con .map. Esto ayuda a React a identificar elementos únicos y optimizar re-renderizados.

## ~3~ Agregar una nueva tarea

Queremos un `input` y un botón que agregue una tarea.

- Creamos un estado para el texto actual.
- Creamos un `handler addTask`.
- Usamos el setter basado en `prevTasks`.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
const [newTask, setNewTask] = useState('')

function addTask() {
  setTasks((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      text: newTask,
      done: false,
    },
  ])

  setNewTask('') // limpiar el input
}
```

JSX para escribir y agregar:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
<input
  type="text"
  value={newTask}
  onChange={(e) => setNewTask(e.target.value)}
  placeholder="Nueva tarea..."
/>

<button onClick={addTask}>Agregar</button>
```

> [!tip]
> Usar prevState (prev => [...prev, nuevaTarea]) es más seguro que usar directamente tasks, especialmente si varias actualizaciones ocurren casi al mismo tiempo.

> [!warning]
> No mutes el array original con push. Siempre crea un nuevo array con spread [...] para mantener la inmutabilidad.

## ~4~ Marcar una tarea como completada

Necesitamos un handler que reciba el id y cambie solo esa tarea.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function toggleTask(id) {
  setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)))
}
```

Luego conectamos el checkbox:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
<input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
```

> [!important]
> Nunca modifiques directamente task.done. Siempre crea un nuevo objeto usando spread { ...task, done: !task.done }.

> [!caution]
> Actualizaciones basadas en el estado previo (prev) evitan inconsistencias si React agrupa múltiples actualizaciones.

## ~5~ Resultado final

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React', done: false },
    { id: 2, text: 'Practicar useState', done: false },
  ])

  const [newTask, setNewTask] = useState('')

  function addTask() {
    if (newTask.trim() === '') return

    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: newTask,
        done: false,
      },
    ])

    setNewTask('')
  }

  function toggleTask(id) {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)))
  }

  return (
    <div>
      <h2>Mis tareas</h2>

      {tasks.map((task) => (
        <div key={task.id}>
          <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
          {task.text}
        </div>
      ))}

      <br />

      <input
        type="text"
        placeholder="Nueva tarea..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>Agregar</button>
    </div>
  )
}
```

> [!note]
> Ahora manejas arrays y objetos en el estado de manera segura, sin mutaciones, y usando prevState para evitar errores.

> [!tip]
> Puedes ampliar este ejemplo agregando eliminación de tareas, edición de texto, o filtros para mostrar solo tareas completadas.

> [!caution]
> Evita actualizar el estado directamente o mutar objetos. Siempre crea copias nuevas para que React detecte los cambios correctamente.

`Ahora es tu turno de implementarlo, gran trabajo`
