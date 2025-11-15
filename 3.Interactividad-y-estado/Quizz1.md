# QUIZZ

Completa el código faltante en este componente.
Debe cumplir:

1. Mostrar una alerta cuando se haga clic en el botón

2. Mostrar en consola lo que escribe el usuario

3. Evitar el refresh al enviar el formulario y mostrar un mensaje en consola

Llena los espacios marcados con /_ ??? _/.

```js
export default function Eventos() {
  function handleClick() {
    alert("Botón presionado");
  }

  function handleChange(event) {
    console.log("Escribiendo:" /* ??? */);
  }

  function handleSubmit(/* ??? */) {
    /* ??? */ // evita recargar la página
    console.log("Formulario enviado");
  }

  return (
    <form /* ??? */>
      <input
        type="text"
        placeholder="Escribe aquí"
        /* ??? */
      />

      <button /* ??? */>Enviar</button>
    </form>
  );
}
```
