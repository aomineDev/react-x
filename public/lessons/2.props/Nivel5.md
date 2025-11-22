# Nivel 5: Callbacks como Props

Hasta ahora has pasado datos (strings, números, objetos) como props. Pero ¿cómo haces que un hijo le "avise" al padre cuando algo sucede? La respuesta, **funciones como props**.

- OBJETIVO:

En este nivel aprenderás cómo un componente hijo puede avisarle al padre usando funciones pasadas como props.
Construiremos un panel de notifaciones con botones que envían un mensaje al componente principal.

---

1.  Tu primer callback: El hijo ejecuta una funcion del padre

Comienza creando un botón que ejecuta una función del padre:

```jsx
export default function App() {
  function manejarNotificacion() {
    alert("Notificación enviada");
  }

  return (
    <div>
      <h1>Panel de Notificaciones</h1>
      <BotonNotificacion etiqueta="Enviar" accion={manejarNotificacion} />
    </div>
  );
}

function Boton({ accion }) {
  return <button onClick={accion}>Click aquí</button>;
}
```

El padre define `manejarNotificacion()`.
El hijo recibe la función como prop y la ejecuta con `onClick`.
Esto es comunicación hijo → padre

---

2.  Pasa datos desde el hijo al padre

Ahora haz que el botón le diga al padre QUÉ botón fue presionado:

```jsx
export default function App() {
  function manejarNotificacion(tipo) {
    alert("Notificación: " + tipo);
  }

  return (
    <div>
      <h1>Panel de Notificaciones</h1>

      <BotonNotificacion etiqueta="Mensaje" accion={manejarNotificacion} />
      <BotonNotificacion etiqueta="Alerta" accion={manejarNotificacion} />
      <BotonNotificacion etiqueta="Error" accion={manejarNotificacion} />
    </div>
  );
}

function BotonNotificacion({ etiqueta, accion }) {
  return <button onClick={() => accion(etiqueta)}>{etiqueta}</button>;
}
```

Cuando necesitas pasar argumentos, usas una función flecha: `onClick={() => accion(texto)}`. Esto llama a la función del padre con el dato específico. Cada botón envía su propio `texto` al padre cuando se presiona.

---
