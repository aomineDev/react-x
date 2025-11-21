# Nivel 5 : Renderizado de listas

El renderizado de listas te permite mostrar múltiples elementos de manera dinámica, sin escribir cada uno manualmente.

- OBJETIVO:
  En este nivel crearas una lista de tus videojuegos favoritos y la mostraras como tarjetas dinamicas usando `.map()` y filtros para personalizar resultados.

---

1. Agrega un array de videojuegos

Primero define un arreglo que contenga información de tus juegos favoritos. Cada juego debe tener un id único; esto será importante más adelante

```jsx
export default function ListaJuegos() {
  const juegos = [
    { id: 1, nombre: "The Legend of Zelda", consola: "Nintendo" },
    { id: 2, nombre: "God of War", consola: "PlayStation" },
    { id: 3, nombre: "Halo Infinite", consola: "Xbox" },
  ];

  return (
    <div className="contenedor">
      <h1> Mis Juegos Favoritos</h1>
    </div>
  );
}
```

Aquí todavía no estás renderizando la lista. Solo la preparas para usarla.

2. Renderiza la lista con `.map()`

Agrega una lista y renderiza la lista usando la funcion .map()

```jsx
<ul>
  {juegos.map((juego) => (
    <li key={juego.id}>{juego.nombre}</li>
  ))}
</ul>
```

¿Por qué key={juego.id}?

Cada elemento necesita una key única para que React pueda identificar cuál cambiar, agregar o eliminar sin volver a renderizar tod

3. Filtra solamente los juegos de Xbox porque es tu consola preferida

```jsx
<ul>
  {juegos
    .filter((juego) => juego.consola === "Xbox")
    .map((juego) => (
      <li key={juego.id}>{juego.nombre}</li>
    ))}
</ul>
```

Con esta combinación de `.filter()` + `.map()` puedes mostrar listas dinámicas y personalizadas, dependiendo de la lógica que necesites.
