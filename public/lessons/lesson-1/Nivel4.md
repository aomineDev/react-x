# Renderizado Condicional

El renderizado condicional te permite mostrar diferentes elementos según una condición.

- **OBJETIVO:**
  En este nivel crearás un componente de Producto que será para una laptop, donde aplicarás descuentos y alertas de stock.

---

## ~1~ Agrega una variable descuento

Empieza creando una variable booleana para controlar el ternario

```jsx showLineNumbers
let tieneDescuento = true
```

---

## ~2~ Aplica el operador ternario `? :`

Crea el ternario para controlar el descuento del producto

```jsx showLineNumbers {2, 4}
{
  tieneDescuento ? (
    <p style={{ color: 'red' }}>S/ {1500 - 1500 * 0.25} Con descuento</p>
  ) : (
    <p>S/1500</p>
  )
}
```

> [!tip]
> Añade estilos para apreciar mejor el descuento. El precio puede ser estático o dinámico dependiendo de ti, juega con las variables.

---

## ~3~ Agrega una variable para controlar el stock del producto

Ahora crea una variable numérica para controlar si el producto tiene bajo stock

```jsx showLineNumbers
let stock = 2
```

---

## ~4~ Aplica el operador `&&`

Crea el operador `&&` para controlar el stock del producto

```jsx showLineNumbers {2}
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

> [!important]
> El operador `&&` renderiza el componente solo si **todas** las condiciones son verdaderas. Si cualquiera es falsa, no se muestra nada.

---

## ~5~ Resultado final

```jsx showLineNumbers
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
