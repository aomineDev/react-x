# Callbacks como Props

Hasta ahora has pasado datos (strings, números, objetos) como props. Pero ¿cómo haces que un hijo le "avise" al padre cuando algo sucede? La respuesta: **funciones como props**.

- **OBJETIVO:**
  En este nivel aprenderás cómo un componente hijo puede avisarle al padre usando funciones pasadas como props. Construiremos un panel de notificaciones con botones que envían un mensaje al componente principal.

---

## <span class='custom-order'>1</span> Tu primer callback: el hijo ejecuta una función del padre

Comienza creando un botón que ejecuta una función del padre:

```jsx showLineNumbers {2}
export default function Boton({ accion }) {
  return <button onClick={accion}>Click aquí</button>
}
```

Y en el componente padre `App.jsx` pasa lo siguiente:

```jsx showLineNumbers {4, 11}
import Boton from './Boton.jsx'

export default function App() {
  function manejarNotificacion() {
    alert('Notificación enviada')
  }

  return (
    <div>
      <h1>Panel de Notificaciones</h1>
      <Boton accion={manejarNotificacion} />
    </div>
  )
}
```

> [!important]
> Esto es comunicación hijo → padre:
>
> - Se define `manejarNotificacion()` en el padre.
> - El hijo recibe la función como prop y la ejecuta con `onClick`.
> - Cuando haces clic, el hijo "avisa" al padre ejecutando su función.

---

## <span class='custom-order'>2</span> Pasa datos desde el hijo al padre

Ahora haz que el botón le diga al padre qué botón fue presionado

```jsx showLineNumbers {2}
export default function Boton({ etiqueta, accion }) {
  return <button onClick={() => accion(etiqueta)}>{etiqueta}</button>
}
```

Y en `App.jsx`

```jsx showLineNumbers {4, 12, 13, 14}
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

> [!tip]
> Cuando necesitas pasar argumentos, usas una función flecha: `onClick={() => accion(etiqueta)}`. Esto llama a la función del padre con el dato específico. Cada botón envía su propia `etiqueta` al padre cuando se presiona.

---

## <span class='custom-order'>3</span> Resultado final en `App.jsx`

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

## <span class='custom-order'>4</span> Resultado final en `Boton.jsx`

```jsx showLineNumbers
export default function Boton({ etiqueta, accion }) {
  return <button onClick={() => accion(etiqueta)}>{etiqueta}</button>
}
```
