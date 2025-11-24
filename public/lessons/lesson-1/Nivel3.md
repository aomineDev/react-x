# Expresiones JavaScript en JSX

Las llaves `{}` te permiten ejecutar código JavaScript dentro de JSX. Puedes usarlas para mostrar variables, realizar cálculos y hacer estilos dinámicos.

- OBJETIVO:

  En este nivel, crearás una tarjeta de producto dinámica y aprenderas a usar las llaves `{}` para insertar variables.

---

## Paso 1 - Agrega el nombre del producto

Comienza creando un componenente con el nombre del producto

```jsx showLineNumbers {2 , 6 }
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

---

## Paso 2 - Agrega un precio al producto y realiza una operacion matemática

Muestra el precio del producto y calcula el precio con IGV

```jsx showLineNumbers {3, 7,8}
export default function TarjetaProducto() {
  const nombre = 'Laptop HP'
  const precio = 1500
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: {precio}</p>
      <p>Precio con IGV: {precio * 1.18}</p>
    </div>
  )
}
```

Dentro de `{}` puedes ejecutar operaciones matemáticas.

---

## Paso 3 - Agrega un stock y valida la disponibilidad con un ternario

Muestra un mensaje de disponibilidad que cambie según el stock:

```jsx showLineNumbers {4, 10}
export default function TarjetaProducto() {
  const nombre = 'Laptop HP'
  const precio = 1500
  const stock = 0
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: {precio}</p>
      <p>Precio con IGV: {precio * 1.18}</p>
      <p>{stock > 0 ? 'Disponible' : 'Agotado'}</p>
    </div>
  )
}
```

El operador ternario `condición ? siTrue : siFalse` te permite mostrar contenido diferente según una condición. Si `stock > 0` muestra "Disponible", sino "Agotado".

---

## Paso 4 - Agrega estilos dinámicos con doble llave

Aplica estilos en línea según la disponibilidad del producto:

```jsx showLineNumbers
<p style={{ color: stock > 0 ? 'green' : 'red' }}>{stock > 0 ? 'Disponible' : 'Agotado'}</p>
```

`{{}}` → la primera `{}` inserta JavaScript, la segunda `{}` es el objeto de estilos.

---

## Paso 5 - Resultado final

```jsx showLineNumbers
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
