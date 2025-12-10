
xx
# Challenge Final – Sistema de Reseñas de Películas

### Introducción

CineMax necesita un sistema de reseñas donde los usuarios puedan calificar películas. Tu tarea es crear un componente de tarjeta de película que reciba información mediante props y otro componente de botón de calificación que se comunique con el padre.

Aplicarás todos los conceptos de props: datos básicos, objetos, arrays, desestructuración, children y callbacks.

---

### Reglas del Desafío

#### ~1~ El título principal debe ser **"CineMax - Sistema de Reseñas"** en un `<h1>`.
#### ~2~ Debes crear **mínimo 3 tarjetas de películas** usando el componente `TarjetaPelicula`.
#### ~3~ Cada película debe recibir mediante props:
   - **titulo**: string
   - **año**: número
   - **generos**: array de strings
   - **director**: objeto con `nombre` y `nacionalidad`
   - **calificacion**: número del 1-10
#### ~4~ Debes usar **desestructuración** en los parámetros del componente.
#### ~5~ Usa **children** para envolver contenido adicional (sinopsis).
#### ~6~ Implementa una funcion que permita cambiar la calificación cuando se haga clic en un botón.
#### ~7~ La calificación debe mostrarse con color dinámico:
   - Verde si es ≥ 7
   - Naranja si es entre 5-6
   - Rojo si es < 5
---

### Estructura de los componentes

Debes crear **dos componentes**:

#### **App.js** (Componente padre)
- Renderiza el título principal
- Renderiza 3 tarjetas de películas
- Define la función que maneja el cambio de calificación

#### **TarjetaPelicula.js** (Componente hijo)
- Recibe todas las props
- Usa desestructuración
- Muestra la información de la película
- Renderiza el children (sinopsis)
- Incluye un botón que ejecuta el callback                     

---

### Datos de Ejemplo

Usa estas 3 películas (o crea las tuyas):
```javascript
// Película 1...
{
  titulo: "Inception",
  año: 2010,
  generos: ["Ciencia Ficción", "Thriller"],
  director: { nombre: "Christopher Nolan", nacionalidad: "Británico" },
  calificacion: 9
}
```

---

### 💡 Pistas

#### ~1~ Desestructuración de props
```jsx
export default function TarjetaPelicula({
  titulo,
  año,
  generos,
  director,
  calificacion = 5, // valor por defecto
  onCambiarCalificacion,
  children
}) {
  // Ahora puedes usar titulo, año, etc. directamente
}
```

#### ~2~ Mostrar array de géneros
```jsx
<div>
  <strong>Géneros:</strong>
  {generos.map((genero, index) => (
    <span key={index}>{genero}{index < generos.length - 1 ? ', ' : ''}</span>
  ))}
</div>
```

#### ~3~ Acceder a propiedades de objeto
```jsx
<p>Director: {director.nombre} ({director.nacionalidad})</p>
```

#### ~4~ Color dinámico según calificación
```jsx
<p style={{ 
  color: calificacion >= 7 ? 'green' : calificacion >= 5 ? 'orange' : 'red',
  fontWeight: 'bold'
}}>
  Calificación: {calificacion}/10
</p>
```

#### ~5~ Renderizar children
```jsx
<div style={{ fontStyle: 'italic', marginTop: '10px' }}>
  {children}
</div>
```

#### ~6~ Ejecuta la funcion al hacer clic
```jsx
<button onClick={() => onCambiarCalificacion(titulo, 10)}>
  ⭐ Calificar con 10
</button>
```

---

### ¡Comienza a programar!

¡Buena suerte! 🎬