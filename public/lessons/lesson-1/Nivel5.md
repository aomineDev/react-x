# Renderizado de listas

El renderizado de listas te permite mostrar múltiples elementos de manera dinámica, sin escribir cada uno manualmente.

- OBJETIVO:
  En este nivel crearas una lista de tus videojuegos favoritos y la mostraras como tarjetas dinamicas usando `.map()` y filtros para personalizar resultados.

---

## Paso 1 - Agrega un array de videojuegos

Primero define un arreglo que contenga información de tus juegos favoritos. Cada juego debe tener un id único; esto será importante más adelante

```jsx showLineNumbers
const juegos = [
  { id: 1, nombre: 'The Legend of Zelda', consola: 'Nintendo' },
  { id: 2, nombre: 'God of War', consola: 'PlayStation' },
  { id: 3, nombre: 'Halo Infinite', consola: 'Xbox' },
  { id: 4, nombre: 'The last of us', consola: 'Xbox' },
  { id: 5, nombre: 'GTA V', consola: 'Xbox' },
]
```

> Aquí todavía no estás renderizando la lista. Solo la preparas para usarla.

---

## Paso 2 - Renderiza la lista con `.map()`

Agrega una lista y renderiza la lista usando la funcion .map()

```jsx showLineNumbers {3,4}
<h3>Todos tus juegos</h3>
<ul>
  {juegos.map((juego) => (
    <li key={juego.id}>{juego.nombre}</li>
  ))}
</ul>
```

> Cada elemento necesita una key única para que React pueda identificar cuál cambiar, agregar o eliminar sin volver a renderizar todo

---

## Paso 3 - Agrega un filtro para que filte solo las consolas xbox

Usa `.filter()` + `.map()` para poder hacer este filtro

```jsx showLineNumbers {4}
<ul>
  <h3>Juegos de xbox</h3>
  {juegos
    .filter((juego) => juego.consola === 'Xbox')
    .map((juego) => (
      <li key={juego.id}>{juego.nombre}</li>
    ))}
</ul>
```

> Con esta combinación puedes mostrar listas dinámicas y personalizadas, dependiendo de la lógica que necesites.

---

## Paso 4 - Resultado final

```jsx showLineNumbers
export default function VideoJuego() {
  const juegos = [
    { id: 1, nombre: 'The Legend of Zelda', consola: 'Nintendo' },
    { id: 2, nombre: 'God of War', consola: 'PlayStation' },
    { id: 3, nombre: 'Halo Infinite', consola: 'Xbox' },
    { id: 4, nombre: 'The last of us', consola: 'Xbox' },
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
      <ul>
        <h3>Juegos de xbox</h3>
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
