# Nivel 5 — Estado con Objetos y Arrays en React

Hasta ahora manejaste estados simples: números y booleanos.
Pero en aplicaciones reales casi siempre trabajas con objetos y arreglos: usuarios, listas de tareas, formularios, etc.

En este nivel aprenderás:

- Cómo guardar objetos y arrays en el estado.

- Cómo actualizarlos sin mutarlos.

- Cómo usar prevState para actualizaciones seguras.

- Cómo hacer un ejemplo práctico estilo tutorial.

Queremos construir un pequeño ejemplo de lista de tareas, donde:

- Guardaremos un array en el estado.

- Podremos agregar nuevas tareas.

- Podremos marcar tareas como completadas.

## Paso 1 — Declarar un estado con un array

Usaremos `useState` para guardar una lista inicial de tareas:

```jsx
import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React', done: false },
    { id: 2, text: 'Practicar useState', done: false },
  ])

  return <div>Tareas: {tasks.length}</div>
}
```

- El estado contiene un array de objetos.
- Cada objeto representa una tarea.

## Paso 2 — Mostrar las tareas usando .map

Para renderizar la lista:

```jsx
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

## Paso 3 — Agregar una nueva tarea

Queremos un `input` y un botón que agregue una tarea.

- Creamos un estado para el texto actual.
- Creamos un `handler addTask`.
- Usamos el setter basado en `prevTasks`.

```jsx
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

```js
<input
  type="text"
  value={newTask}
  onChange={(e) => setNewTask(e.target.value)}
  placeholder="Nueva tarea..."
/>

<button onClick={addTask}>Agregar</button>
```

## Paso 4 — Marcar una tarea como completada

Necesitamos un handler que reciba el id y cambie solo esa tarea.

```js
function toggleTask(id) {
  setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)))
}
```

Luego conectamos el checkbox:

```js
<input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
```

## Paso 5 — Resultado final

```jsx
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

`Ahora es tu turno de implementarlo, gran trabajo`
