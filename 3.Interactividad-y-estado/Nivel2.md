# Nivel 2: Handlers (Funciones manejadoras de eventos)

Los handlers son funciones que React ejecuta cuando ocurre un evento en la UI.

Son el puente entre la interacción del usuario y la lógica del componente.

Un handler puede leer datos, actualizar el estado, validar información o ejecutar cualquier lógica que necesites.

```
React no llama automáticamente a la función: tú le pasas la función, y React decide cuándo ejecutarla.

```

Los handlers:

- Se definen dentro del componente (por lo general).
- Su nombre empieza con handle por convención.
- Son puentes entre la UI y la lógica del componente.

Ejemplos comunes:

- handleClick
- handleChange
- handleSubmit
- handleKeyDown
- handleMouseEnter

## Declarar handlers dentro del componente

```js
export default function Button() {
  function handleClick() {
    alert("Hiciste clic");
  }

  return <button onClick={handleClick}>Clic</button>;
}
```

Esto sigue el patrón recomendado:

- Declaras la función dentro del componente.
- La pasas al JSX sin ejecutarla (sin paréntesis).
- React la ejecuta cuando ocurre el evento.

## Por qué los handlers se definen dentro del componente?

Porque así pueden acceder a:

- props
- estado
- valores derivados
- otras funciones del componente

Ejemplo:

```js
export default function Welcome({ nombre }) {
  function handleGreet() {
    alert("Hola " + nombre);
  }

  return <button onClick={handleGreet}>Saludar</button>;
}
```
