# QUIZZ: Renderizado de Listas - Predecir salida de oupout

**¿Qué se mostrará en pantalla?**

```jsx
function Productos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
  ];

  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>
          {producto.nombre} - ${producto.precio}
        </li>
      ))}
    </ul>
  );
}
```

**Opciones:**

- A) Solo "Laptop - $1200"
- B) Ambos productos con sus precios
- C) Solo los nombres sin precios
- D) Error porque falta el índice en map
