# Introducción a useEffect

Ejecutar código después de que un componente se renderice es una tarea común en el desarrollo de aplicaciones React. Muchas veces necesitas realizar operaciones adicionales como registrar información, hacer cálculos, o sincronizar datos una vez que el componente aparece en pantalla.

Para ejecutar código después del render, React utiliza el hook `useEffect`.

El hook que permite ejecutar efectos secundarios es `useEffect`. Aquí un ejemplo de cómo utilizar `useEffect` en un componente:

## ~1~ Importar los Hooks

```javascript
import { useState, useEffect } from 'react'
```

> [!important]
> Debes importar `useEffect` desde React junto con otros hooks

## ~2~ Crear el efecto con `useEffect`

```javascript showLineNumbers {4-6}
function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('El efecto se ejecutó. Contador:', contador);
  });
```

- Por defecto, el código dentro de `useEffect` se ejecuta después de cada render
- Muestra en consola el valor actual del contador.
- No tiene array de dependencias, por eso se ejecuta siempre.

## ~3~ Render y actualización del estado

```javascript showLineNumbers {2}
  return (
    <button onClick={() => setContador(contador + 1)}>
      Clicks: {contador}
    </button>
  );
}
```

- El botón aumenta el contador cada vez que se hace clic.
  Cada actualización vuelve a renderizar el componente, lo cual también vuelve a ejecutar el efecto anterior.

---

## Implementar el useEffect

Agrega un `useEffect` después del estado `clicks` que actualice el mensaje. Usa el siguiente código como implementación:

```javascript showLineNumbers {2}
useEffect(() => {
  setMensaje(`El botón fue clickeado ${clicks} veces`)
})
```

> [!note]
> Agrega tu código para completar la funcionalidad.

---

Has creado tu primer efecto en React. A continuación aprenderás a controlar cuándo se ejecuta un efecto.
