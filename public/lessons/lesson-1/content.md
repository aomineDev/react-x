
xx
# Challenge Final – Tienda de Videojuegos

### Introducción

GameZone está preparando su catálogo para el Black Friday y te han asignado la tarea de desarrollar un componente que muestre una lista de videojuegos con información clave como precio, stock, disponibilidad y una sección especial filtrada por categoría.

Tu objetivo es implementar un componente React que renderice la información correctamente, siguiendo las reglas de visualización y aplicando filtros.

---

### Reglas del Desafío

####  ~1~ El título principal debe ser **"Mi Tienda Online"** en un `<h1>`.
##### ~2~ Debes mostrar una lista completa de videojuegos (mínimo 4 juegos).
##### ~3~ Cada videojuego debe mostrar:
   - Nombre en un `<h3>`
   - Precio con el símbolo `$`
   - Estado: **"Disponible"** (verde) o **"Agotado"** (rojo)
   - Alerta de stock bajo si quedan menos de 5 unidades
##### ~4~ Crea una sección separada que muestre solo juegos de **"PlayStation"**.
##### ~5~ Usa estilos dinámicos con `style={{ color: ... }}` para los colores.
##### ~6~ Cada elemento de la lista debe tener una `key` única.

---

### Datos de Ejemplo

Cada videojuego tiene la siguiente estructura:
```javascript
{
  id: 1,
  nombre: "The Last of Us Part II",
  precio: 60,
  stock: 2,
  categoria: "PlayStation"
}
```

Crea al menos **4 videojuegos** con diferentes stocks y categorías.

---

### 💡 Pistas

#### ~1~ Mostrar precio con símbolo de dólar
```jsx
<p>Precio: ${precio}</p>
```

#### ~2~ Estado de disponibilidad con color dinámico
```jsx
<p style={{ color: stock > 0 ? 'green' : 'red' }}>
  {stock > 0 ? 'Disponible' : 'Agotado'}
</p>
```

#### ~3~ Alerta solo cuando el stock es bajo
```jsx
{stock < 5 && stock > 0 && (
  <p style={{ backgroundColor: 'orange', padding: '5px' }}>
    ¡Solo quedan {stock} unidades!
  </p>
)}
```

#### ~4~ Filtrar juegos de PlayStation
```jsx
<h2>Juegos de PlayStation</h2>
{juegos
  .filter((juego) => juego.categoria === "PlayStation")
  .map((juego) => (
    <div key={juego.id}>
      <h3>{juego.nombre}</h3>
      <p>Precio: ${juego.precio}</p>
    </div>
  ))
}
```

---

### ¡Comienza a programar!

Recuerda:
- Usa `.map()` para recorrer el array de juegos
- Usa `.filter()` para mostrar solo PlayStation
- Agrega `key={juego.id}` en cada elemento

¡Buena suerte! 🎮