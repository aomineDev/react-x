# Nivel 1: Eventos (onClick, onChange, onSubmit)

En React, los eventos se manejan como funciones que se ejecutan cuando el usuario interactúa con la UI.

Son equivalentes a eventos del DOM, pero se escriben en camelCase y se pasan como funciones, no como strings.

```Nota
React NO modifica directamente el DOM, sino que recibe tu intención a través de handlers.
```

## OnClick — Evento de clic

Para agregar un controlador de evento, primero definirás una función y luego la pasarás como una prop a la etiqueta JSX apropiada.

Por ejemplo, este es un botón que no hace nada todavía:

```js
export default function Button() {
  return <button>No hago nada</button>;
}
```

Puedes hacer que muestre un mensaje cuando un usuario haga clic siguiendo estos tres pasos:

1. Declara una función llamada handleClick dentro de tu componente Button.
2. Implementa la lógica dentro de esa función (utiliza alert para mostrar el mensaje).
3. Agrega onClick={handleClick} al JSX del <button>.

```js
export default function Button() {
  function handleClick() {
    alert("¡Me hiciste clic!");
  }

  return <button onClick={handleClick}>Hazme clic</button>;
}
```

Definiste la función handleClick y luego la pasaste como una prop al button. handleClick es un controlador de evento. Las funciones controladoras de evento:

Usualmente están definidas dentro de tus componentes.
Tienen nombres que empiezan con handle, seguido del nombre del evento.

```Nota
Por convención, es común llamar a los controladores de eventos como handle seguido del nombre del evento. A menudo verás onClick={handleClick}, onMouseEnter={handleMouseEnter}, etcétera.
```

## onChange — Detectar cambios en inputs

onChange se ejecuta cuando el usuario escribe en un `<input>`, selecciona un `<select>` o marca un `<checkbox>`.

Es uno de los eventos del formulario que se actualiza cuando se modifica el campo de entrada.

```js
export default function InputExample() {
  function handleChange(event) {
    console.log("Nuevo valor:", event.target.value);
  }

  return (
    <input type="text" placeholder="Escribe algo..." onChange={handleChange} />
  );
}
```

¿Qué contiene event.target.value?

- Para inputs de texto → el texto que el usuario escribe

- Para checkboxes → event.target.checked

- Para selects → option seleccionada

## onSubmit — Manejar envíos de formularios

Cuando el usuario envía un formulario, React ejecuta la función asignada a onSubmit.

Es importante evitar el comportamiento por defecto del navegador (refrescar la página):

```js
event.preventDefault();
```

formulario que evita refresh

```js
export default function FormExample() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Formulario enviado");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tu nombre" />
      <button>Enviar</button>
    </form>
  );
}
```

```Nota
Siempre usa preventDefault() dentro de formularios en React, a menos que desees un comportamiento tradicional del navegador.
```
