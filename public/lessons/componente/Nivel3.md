# Nivel 3: Expresiones JavaScript en JSX

Las llaves `{}` te permiten ejecutar código JavaScript dentro de JSX. Puedes usarlas para mostrar variables, realizar cálculos y hacer estilos dinámicos.

- OBJETIVO:

  En este nivel, crearás una tarjeta de producto dinámica y aprenderas a usar las llaves `{}` para insertar variables.

---

## 1 - Muestra el nombre del producto con una variable

Comienza creando una tarjeta con el nombre del producto usando una variable:

```jsx
export default function TarjetaProducto() {
  const nombre = 'Laptop HP'

  return (
    <div>
      <h2>{nombre}</h2>
    </div>
  )
}
```

Las llaves `{}` te permiten insertar JavaScript dentro de JSX.

## 2 - Agrega el precio y realiza una operacion matemática

Ahora agrega el precio del producto y calcula el precio con IGV:

```jsx
<p>Precio: ${precio}</p>
<p>Precio con IGV: ${precio * 1.18}</p>
```

Dentro de `{}` puedes ejecutar operaciones matemáticas.

---

## 3 - Muestra disponibilidad con un ternario

Agrega un mensaje de disponibilidad que cambie según el stock:

```jsx
<p>{stock > 0 ? 'Disponible' : 'Agotado'}</p>
```

El operador ternario `condición ? siTrue : siFalse` te permite mostrar contenido diferente según una condición. Si `stock > 0` muestra "Disponible", sino "Agotado".

## 4 - Agrega estilos dinámicos con doble llave

Aplica estilos en línea según la disponibilidad del producto:

```jsx
<p style={{ color: stock > 0 ? 'green' : 'red' }}>{stock > 0 ? 'Disponible' : 'Agotado'}</p>
```

`{{}}` → la primera `{}` inserta JavaScript, la segunda `{}` es el objeto de estilos.

## 5 - Uniendo todas las partes

```jsx
export default function TarjetaProducto() {
  const nombre = 'Laptop HP'
  const precio = 1500
  const stock = 0
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Precio con IGV: ${precio * 1.18}</p>
      <p style={{ color: stock > 0 ? 'green' : 'red' }}>{stock > 0 ? 'Disponible' : 'Agotado'}</p>
    </div>
  )
}
```
