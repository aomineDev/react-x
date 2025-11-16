# Nivel 5: Renderizado de Listas

## ¿Qué es el renderizado de listas?

En React, es muy común que necesites mostrar múltiples elementos similares: una lista de tareas, productos, usuarios, comentarios, etc. En lugar de escribir cada elemento manualmente, usas el método **`.map()`** para transformar un array de datos en un array de componentes JSX.

**Antes (sin listas dinámicas):**

```jsx
<ul>
  <li>Tarea 1</li>
  <li>Tarea 2</li>
  <li>Tarea 3</li>
</ul>
```

**Ahora (con listas dinámicas):**

```jsx
const tareas = ["Tarea 1", "Tarea 2", "Tarea 3"]

<ul>
  {tareas.map((tarea, index) => (
    <li key={index}>{tarea}</li>
  ))}
</ul>
```
