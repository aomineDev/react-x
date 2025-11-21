# Nivel 4: Renderizado Condicional

El renderizado condicional te permite mostrar diferentes elementos según una condición.

- OBJETIVO:

  En este nivel, crearás un sistema de carrito de compras con descuentos y alertas de stock, aprendiedo a usar las diferentes formas de mostrar contenido condicional.

---

1.  Muestra el precio con o sin descuento

Comienza creando una tarjeta de producto que muestra el precio con descuento si esque lo tiene, usando el operador ternario `? :`

```jsx
export default function Producto() {
  const tieneDescuento = true;

  return (
    <div>
      <h2>Laptop Gaming ROG</h2>
      {tieneDescuento ? (
        <div>
          <p style={{ textDecoration: "line-through", color: "gray" }}>
            S/1500
          </p>
          <p style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}>
            S/ {1500} - {1500 * 0.25} Descuento
          </p>
        </div>
      ) : (
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>S/1500</p>
      )}
    </div>
  );
}
```

El operador ternario `? :` te permite mostrar dos diseños completamente diferentes

---

2.  Mostrar alertas de stock bajo

Usa el operador `&&` cuando solo quieres mostrar algo si es verdadero

```jsx
{
  stock < 5 && stock > 0 && (
    <p
      style={{
        backgroundColor: "orange",
        color: "white",
        padding: "10px",
      }}
    >
      ¡Solo quedan {stock} unidades!
    </p>
  );
}
```
