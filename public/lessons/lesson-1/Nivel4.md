# Nivel 4: Renderizado Condicional

El renderizado condicional te permite mostrar diferentes elementos según una condición.

- OBJETIVO:

En este nivel crearás un componente de Producto que sera para una labtop, donde aplicarás descuentos y alertas de stock.

---

## Paso 1 - Define la variable del descuento

Empieza creando una variable booleana para controlar el ternario

```jsx
let tieneDescuento = true
```

---

## Paso 2 - Aplica el opeador ternario `: ? `

Crea el ternario para controlar el descuento del producto

```jsx
{
  tieneDescuento ? (
    <p style={{ color: 'red' }}>S/ {1500 - 1500 * 0.25} Con descuento</p>
  ) : (
    <p>S/1500</p>
  )
}
```

```
Añade estilos para apresiar mejor el descuento, el precio puede ser estatico o puede ser dinamico depende de ti, juega con las variables
```

---

## Paso 3 - Define una variable para controlar el descuento

Ahora crea una variable numerica para controlar si el producto tiene bajo stock

```jsx
let stock = 2
```

---

## Paso 4 - Aplica el operador `&&`

Crea el operador `&&` para controlar el stock del producto

```jsx
{
  stock < 5 && stock > 0 && (
    <p
      style={{
        backgroundColor: 'orange',
        color: 'white',
        padding: '10px',
      }}
    >
      ¡Solo quedan {stock} unidades!
    </p>
  )
}
```

```
Añade estilos para apreciar mejor el stock disponible
```

---

## 5 - Resultado final

```jsx
export default function Producto() {
  const tieneDescuento = true
  const stock = 2
  return (
    <div>
      <h2>Laptop Gaming ROG</h2>

      {tieneDescuento ? (
        <p style={{ color: 'red' }}>S/ {1500 - 1500 * 0.25} Con descuento</p>
      ) : (
        <p>S/1500</p>
      )}
      {stock < 5 && stock > 0 && (
        <p
          style={{
            backgroundColor: 'orange',
            color: 'white',
            padding: '10px',
          }}
        >
          ¡Solo quedan {stock} unidades!
        </p>
      )}
    </div>
  )
}
```
