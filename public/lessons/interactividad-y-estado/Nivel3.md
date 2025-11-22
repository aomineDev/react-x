# Nivel 3 — Estado en React con useState

En muchos componentes necesitas manejar información que cambia a medida que el usuario interactúa. React maneja estos cambios usando estado, una especie de pequeña “memoria viva” dentro del componente.

Cuando el estado cambia, React vuelve a renderizar el componente para mostrar la nueva información.

## Paso 1 - Importar useState

Primero traemos el hook desde React:

```jsx
import { useState } from 'react'
```

## Paso 2 - Declarar estado

Construyamos un pequeño contador de `Likes`, como si estuviéramos armando un prototipo para una app social.

Declaramos el estado dentro del componente:

```jsx
import { useState } from 'react'

export default function App() {
  const [likes, setLikes] = useState(0)

  return <button>Likes: {likes}</button>
}
```

- `likes` es el valor actual
- `setLikes` es la función que cambia ese valor
- `useState(0)` indica que el contador inicia en 0

> La convención es nombrar variables de estado como `[algo, setAlgo]` usando desestructuración de arrays.

## Paso 3 — Actualizar estado al hacer clic

Ahora le damos vida real: cuando el usuario hace clic, incrementamos los likes.

```jsx
import { useState } from 'react'

export default function App() {
  const [likes, setLikes] = useState(0)

  function handleLike() {
    setLikes(likes + 1)
  }

  return <button onClick={handleLike}>Likes: {likes}</button>
}
```

Aquí pasa algo crucial:

- Llamas a setLikes(likes + 1)
- El estado cambia
- React vuelve a renderizar
- El botón muestra el nuevo número

`Ahora es tu turno de implementarlo, gran trabajo`
