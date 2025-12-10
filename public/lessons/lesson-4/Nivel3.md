# Validación Básica de Formularios en React

En este nivel aprenderás a realizar validaciones simples directamente desde el componente, sin librerías externas.

Esto es ideal para formularios pequeños o para entender los fundamentos antes de usar herramientas más avanzadas como React Hook Form o Formik.

> [!note]
> La validación en el componente es suficiente para formularios simples. Para formularios grandes o con reglas complejas, considera librerías especializadas.

A continuación, vamos a construir un formulario donde:

- El nombre es obligatorio

- El email debe contener un "@"

- Si algún campo es inválido → mostramos un mensaje de error

- Solo enviamos si todo está correcto

## ~1~ Crear estados para los inputs y los errores

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // estado para errores
  const [errors, setErrors] = useState({})

  // ...
}
```

> [!tip]
> Mantener los errores en un estado separado permite mostrar mensajes dinámicamente y mantener el JSX limpio.

> [!important]
> No mezcles valores de input y errores en un solo estado. Esto facilita la gestión de formularios complejos.

## ~2~ Handlers que actualizan los valores

Inputs controlados:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

> [!note]
> Cada input controlado necesita su value y onChange. Esto asegura que React sea la fuente de la verdad.

> [!caution]
> Evita usar defaultValue si quieres que React controle completamente el input, de lo contrario puedes tener inputs inconsistentes.

## ~3~ Validar en el onSubmit

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function handleSubmit(e) {
  e.preventDefault()

  const newErrors = {}

  if (!name.trim()) {
    newErrors.name = 'El nombre es obligatorio'
  }

  if (!email.includes('@')) {
    newErrors.email = 'El correo debe contener @'
  }

  setErrors(newErrors)

  // si hay errores, no enviamos
  if (Object.keys(newErrors).length > 0) return

  alert('Formulario válido ✨')
}
```

> [!tip]
> Puedes expandir esta función para validar más campos, patrones de regex, o incluso integrar validaciones asíncronas.

> [!warning]
> Siempre usa e.preventDefault() para evitar que el formulario recargue la página.

## ~4~ Mostrar errores debajo de cada input

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
{
  errors.name && <p style={{ color: 'red' }}>{errors.name}</p>
}
{
  errors.email && <p style={{ color: 'red' }}>{errors.email}</p>
}
```

> [!important]
> Mostrar los errores cerca del input mejora la experiencia del usuario.

> [!caution]
> No modifiques el DOM directamente para mostrar errores. React se encarga de actualizarlo de manera eficiente.

## ~5~ Resultado final

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = 'El nombre es obligatorio'
    }

    if (!email.includes('@')) {
      newErrors.email = 'El correo debe contener @'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    alert('Formulario válido ✨')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label>Correo:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <button>Enviar</button>
    </form>
  )
}
```

> [!note]
> Ahora tienes un formulario con validación básica y mensajes de error dinámicos, sin librerías externas.

> [!tip]
> Puedes mejorar este ejemplo agregando validación en tiempo real (onChange) para una mejor experiencia de usuario.

> [!caution]
> Nunca confíes solo en la validación del frontend. Siempre valida los datos también en el servidor.

`Ahora es tu turno de implementarlo, gran trabajo`
