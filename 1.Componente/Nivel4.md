# Nivel 4: Renderizado Condicional

## ¿Qué es el renderizado condicional?

Tus componenetes a menudo necesitan mostrar diferentes elementos segun alguna condicion que se le establezca entonces, se puede hacer esto con los siguientes operadores `? :` | `&&` | `if-else`

## Métodos para renderizar condicionalmente

### 1. Operador Ternario `? :`

El operador ternario es perfecto cuando quieres mostrar una cosa u otra.

**Sintaxis:**

```jsx
{
  {
    condición ? true : false;
  }
}
```

**Ejemplo:**

```jsx
function Saludo() {
  const edad = 20;

  return (
    <div>
      {edad >= 18 ? <p>Eres mayor de edad</p> : <p>Eres menor de edad</p>}
    </div>
  );
}
```

**Ventajas:**

- Perfecto para elegir entre dos opciones
- Código limpio y legible
- Puedes renderizar componentes completos

---

### 2. Operador Lógico `&&`

El operador `&&` es ideal cuando quieres mostrar algo solo si una condición es verdadera, y no mostrar nada si es falsa.

**Sintaxis:**

```jsx
{
  {
    condición && <Componente />;
  }
}
```

**Ejemplo:**

```jsx
function Notificaciones() {
  const mensajesNuevos = 5;

  return (
    <div>
      <h1>Bandeja de entrada</h1>
      {mensajesNuevos > 0 && <p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}
```

**Cómo funciona:**

- Si `mensajesNuevos > 0` es `true` → muestra el `<p>`
- Si `mensajesNuevos > 0` es `false` → no muestra nada

**Ventajas:**

- Código más corto que el ternario
- Perfecto para "mostrar o no mostrar"
- Muy usado en React

---

### 3. Variables condicionales

Puedes guardar elementos JSX en variables y decidir cuál renderizar.

**Ejemplo:**

```jsx
function Estado() {
  const estaConectado = true;

  let mensaje;

  if (estaConectado) {
    mensaje = <p style={{ color: "green" }}>● En línea</p>;
  } else {
    mensaje = <p style={{ color: "red" }}>● Desconectado</p>;
  }

  return <div>{mensaje}</div>;
}
```

**Ventajas:**

- Útil para lógica más compleja
- Puedes usar `if/else` normal
- Más fácil de leer en casos complicados
