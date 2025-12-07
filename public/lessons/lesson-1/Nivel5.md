# Renderizado de Listas

El renderizado de listas te permite mostrar múltiples elementos de manera dinámica, sin escribir cada uno manualmente.

- **OBJETIVO:**
  En este nivel crearás una lista de tus videojuegos favoritos y la mostrarás como tarjetas dinámicas usando `.map()` y filtros para personalizar resultados.

---

## <span class='custom-order'>1</span> Agrega un array de videojuegos

Primero define un arreglo que contenga información de tus juegos favoritos. Cada juego debe tener un id único; esto será importante más adelante

```jsx showLineNumbers
const juegos = [
  { id: 1, nombre: 'The Legend of Zelda', consola: 'Nintendo' },
  { id: 2, nombre: 'God of War', consola: 'PlayStation' },
  { id: 3, nombre: 'Halo Infinite', consola: 'Xbox' },
  { id: 4, nombre: 'The Last of Us', consola: 'PlayStation' },
  { id: 5, nombre: 'GTA V', consola: 'Xbox' },
]
```

> [!note]
> Aquí todavía no estás renderizando la lista. Solo la preparas para usarla en los siguientes pasos.

---

## <span class='custom-order'>2</span> Renderiza la lista con `.map()`

Agrega una lista y renderiza los elementos usando la función `.map()`

```jsx showLineNumbers {3, 4}
<h3>Todos tus juegos</h3>
<ul>
  {juegos.map((juego) => (
    <li key={juego.id}>{juego.nombre}</li>
  ))}
</ul>
```

> [!important]
> Cada elemento necesita una `key` única para que React pueda identificar cuál cambiar, agregar o eliminar sin volver a renderizar todo.

---

## <span class='custom-order'>3</span> Agrega un filtro para mostrar solo las consolas Xbox

Usa `.filter()` + `.map()` para poder hacer este filtro

```jsx showLineNumbers {4}
<ul>
  <h3>Juegos de Xbox</h3>
  {juegos
    .filter((juego) => juego.consola === 'Xbox')
    .map((juego) => (
      <li key={juego.id}>{juego.nombre}</li>
    ))}
</ul>
```

> [!tip]
> Con esta combinación puedes mostrar listas dinámicas y personalizadas, dependiendo de la lógica que necesites.

---

## <span class='custom-order'>4</span> Resultado final

```jsx showLineNumbers
export default function VideoJuego() {
  const juegos = [
    { id: 1, nombre: 'The Legend of Zelda', consola: 'Nintendo' },
    { id: 2, nombre: 'God of War', consola: 'PlayStation' },
    { id: 3, nombre: 'Halo Infinite', consola: 'Xbox' },
    { id: 4, nombre: 'The Last of Us', consola: 'PlayStation' },
    { id: 5, nombre: 'GTA V', consola: 'Xbox' },
  ]
  return (
    <>
      <h3>Todos tus juegos</h3>
      <ul>
        {juegos.map((juego) => (
          <li key={juego.id}>{juego.nombre}</li>
        ))}
      </ul>
      <h3>Juegos de Xbox</h3>
      <ul>
        {juegos
          .filter((juego) => juego.consola === 'Xbox')
          .map((juego) => (
            <li key={juego.id}>{juego.nombre}</li>
          ))}
      </ul>
    </>
  )
}
```
