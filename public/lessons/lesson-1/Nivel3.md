# Expresiones JavaScript en JSX

Las llaves `{}` te permiten ejecutar código JavaScript dentro de JSX. Puedes usarlas para mostrar variables, realizar cálculos y hacer estilos dinámicos.

- **OBJETIVO:**
  En este nivel, crearás una tarjeta de producto dinámica y aprenderás a usar las llaves `{}` para insertar variables.

---

## <span class='custom-order'>1</span> Agrega el nombre del producto

Comienza creando un componente con el nombre del producto

```jsx showLineNumbers {2, 6}
export default function TarjetaProducto() {
  const nombre = 'Laptop HP'

  return (
    <div>
      <h2>{nombre}</h2>
    </div>
  )
}
```

> [!note]
> Las llaves `{}` te permiten insertar JavaScript dentro de JSX para mostrar el valor de variables.

---

## <span class='custom-order'>2</span> Agrega un precio al producto y realiza una operación matemática

Muestra el precio del producto y calcula el precio con IGV

```jsx showLineNumbers {3, 7, 8}
export default function TarjetaProducto() {
  const nombre = 'Laptop HP'
  const precio = 1500
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Precio con IGV: ${precio * 1.18}</p>
    </div>
  )
}
```

> [!tip]
> Dentro de `{}` puedes ejecutar operaciones matemáticas y cualquier expresión JavaScript válida.

---

## <span class='custom-order'>3</span> Agrega un stock y valida la disponibilidad con un ternario

Muestra un mensaje de disponibilidad que cambie según el stock:

```jsx showLineNumbers {4, 10}
export default function TarjetaProducto() {
  const nombre = 'Laptop HP'
  const precio = 1500
  const stock = 0
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Precio con IGV: ${precio * 1.18}</p>
      <p>{stock > 0 ? 'Disponible' : 'Agotado'}</p>
    </div>
  )
}
```

> [!important]
> El operador ternario `condición ? siTrue : siFalse` te permite mostrar contenido diferente según una condición. Si `stock > 0` muestra "Disponible", sino "Agotado".

---

## <span class='custom-order'>4</span> Agrega estilos dinámicos con doble llave

Aplica estilos en línea según la disponibilidad del producto:

```jsx showLineNumbers
<p style={{ color: stock > 0 ? 'green' : 'red' }}>{stock > 0 ? 'Disponible' : 'Agotado'}</p>
```

> [!note] > `{{}}` → la primera `{}` inserta JavaScript, la segunda `{}` es el objeto de estilos CSS.

---

## <span class='custom-order'>5</span> Resultado final

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

> [!tip]
> Combinar variables, operaciones matemáticas, condicionales y estilos dinámicos te permite crear interfaces completamente interactivas y reactivas.
