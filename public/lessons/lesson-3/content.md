
xx
# Challenge Final – Gestor de Tareas Interactivo

### Introducción

¡Bienvenido a tu primer gestor de tareas interactivo! 
Vas a crear un componente React donde los usuarios podrán:

- Agregar nuevas tareas
- Marcar tareas como completadas
- Ver la lista completa y una sección filtrada solo con las tareas completadas

Este challenge combinará **Eventos (onClick, onChange)**, **Handlers**, **useState**, **prevState**, y manejo de **arrays y objetos en el estado**.

---

### Reglas del Desafío

#### ~1~ El título principal debe ser **"Mi Lista de Tareas"** en un `<h1>`  
#### ~2~ Debes mostrar una lista de tareas inicial (mínimo 2 tareas)  
#### ~3~ Cada tarea debe mostrar:  
- El texto de la tarea en un `<span>`  
- Un checkbox que indique si está completada  
- Texto tachado (`line-through`) si la tarea está completada  
#### ~4~ Debes permitir **agregar nuevas tareas** mediante un input controlado y un botón  
#### ~5~ Debes usar **prevState** para actualizar el array de tareas al agregar o marcar como completada  
#### ~6~ Crear una sección separada que solo muestre las **tareas completadas**  
#### ~7~ Cada elemento de la lista debe tener una `key` única  

---

### Datos de ejemplo

El estado inicial puede ser:

```jsx  
[
  { id: 1, text: "Aprender React", done: false },
  { id: 2, text: "Practicar useState", done: false }
]
```

- `id` → número único

- `text` → texto de la tarea

- `done` → booleano, indica si está completada

---

### 💡 Pistas

#### ~1~ Input controlado
```jsx 
<input
  type="text"
  value={newTask}
  onChange={(e) => setNewTask(e.target.value)}
  placeholder="Nueva tarea..."
/>
```

#### ~2~ Agregar tarea usando prevState
```jsx 
setTasks(prev => [...prev, { id: crypto.randomUUID(), text: newTask, done: false }])
```

#### ~3~ Marcar tarea como completada
```jsx 
setTasks(prev => prev.map(task => task.id === id ? { ...task, done: !task.done } : task))
```

#### ~4~ Mostrar tareas completadas
```jsx 
tasks.filter(task => task.done).map(task => <div key={task.id}>{task.text}</div>)
```

#### ~5~ Estilos dinámicos
```jsx 
<span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
  {task.text}
</span>
```

### Objetivo final

- Lista inicial de tareas renderizada

- Input controlado para agregar nuevas tareas

- Checkbox para marcar como completadas

- Sección separada con solo tareas completadas

- Uso de prevState al actualizar el estado

- Cada elemento tiene key única

¡Manos a la obra! 🚀


