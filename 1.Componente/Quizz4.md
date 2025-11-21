# QUIZZ: Renderizado Condicional - Predecor oupout

**¿Qué se mostrará en pantalla?**

```jsx
function Semaforo() {
  const color = "amarillo";

  let mensaje;

  if (color === "verde") {
    mensaje = "Avanza";
  } else if (color === "amarillo") {
    mensaje = "Precaución";
  } else {
    mensaje = "Detente";
  }

  return <p>{mensaje}</p>;
}
```

Opciones:

- A) Avanza
- B) Precaución
- C) Detente
- D) Nada
