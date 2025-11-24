# Callbacks como Props

Hasta ahora has pasado datos (strings, números, objetos) como props. Pero ¿cómo haces que un hijo le "avise" al padre cuando algo sucede? La respuesta, **funciones como props**.

- OBJETIVO:

En este nivel aprenderás cómo un componente hijo puede avisarle al padre usando funciones pasadas como props.
Construiremos un panel de notifaciones con botones que envían un mensaje al componente principal.

---

## Paso 1 - Tu primer callback, el hijo ejecuta una funcion del padre

Comienza creando un botón que ejecuta una función del padre:

```jsx showLineNumbers
export default function Boton({ accion }) {
  return <button onClick={accion}>Click aquí</button>
}
```

y en componenete padre `App()` pasa lo siguiente:

- Se define `manejarNotificacion()`.
- El hijo recibe la función como prop y la ejecuta con `onClick`.
- Esto es comunicación hijo → padre

```jsx
import Boton from './Boton.jsx'

export default function App() {
  function manejarNotificacion() {
    alert('Notificación enviada')
  }

  return (
    <div>
      <h1>Panel de Notificaciones</h1>
      <Boton etiqueta="Enviar" accion={manejarNotificacion} />
    </div>
  )
}
```

---

## Paso 2 - Pasa datos desde el hijo al padre

Ahora haz que el botón le diga al padre que boton fue presionado

```jsx showLineNumbers
export default function Boton({ etiqueta, accion }) {
  return <button onClick={() => accion(etiqueta)}>{etiqueta}</button>
}
```

y en `App.tsx`

```jsx showLineNumbers
import Boton from './Boton.jsx'

export default function App() {
  function manejarNotificacion(tipo) {
    alert('Notificación: ' + tipo)
  }

  return (
    <div>
      <h1>Panel de Notificaciones</h1>

      <Boton etiqueta="Mensaje" accion={manejarNotificacion} />
      <Boton etiqueta="Alerta" accion={manejarNotificacion} />
      <Boton etiqueta="Error" accion={manejarNotificacion} />
    </div>
  )
}
```

Cuando necesitas pasar argumentos, usas una función flecha: `onClick={() => accion(texto)}`. Esto llama a la función del padre con el dato específico. Cada botón envía su propio `texto` al padre cuando se presiona.

---

## Paso 3 - Resultado final en `App.js`

```jsx showLineNumbers
import Boton from './Boton.jsx'

export default function App() {
  function manejarNotificacion(tipo) {
    alert('Notificación: ' + tipo)
  }

  return (
    <div>
      <h1>Panel de Notificaciones</h1>

      <Boton etiqueta="Mensaje" accion={manejarNotificacion} />
      <Boton etiqueta="Alerta" accion={manejarNotificacion} />
      <Boton etiqueta="Error" accion={manejarNotificacion} />
    </div>
  )
}
```

---

## Paso 4 - Resultado final en `Boton.tsx`

```jsx showLineNumbers
export default function Boton({ etiqueta, accion }) {
  return <button onClick={() => accion(etiqueta)}>{etiqueta}</button>
}
```
