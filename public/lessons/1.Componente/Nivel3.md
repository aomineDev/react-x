# Nivel 3: Expresiones JavaScript en JSX

## ¿Qué son las llaves `{}`?

Las llaves `{}` te permiten ejecutar código JavaScript dentro de JSX. Puedes usarlas para mostrar variables, realizar cálculos, llamar funciones y mucho más.

```jsx
const nombre = "Hedy";
return <h1>Hola {nombre}</h1>; // Resultado: Hola Hedy
```

---

## ¿Dónde usar llaves?

Puedes usar llaves en tres lugares:

### 1. Como contenido de elementos

```jsx
const titulo = "Mi Aplicación";
return <h1>{titulo}</h1>;
```

### 2. En atributos

```jsx
const urlImagen = "https://i.imgur.com/yXOvdOSs.jpg";
const descripcion = "Foto de perfil";

return <img src={urlImagen} alt={descripcion} />;
```

### 3. Para acceder a propiedades de objetos

```jsx
const usuario = {
  nombre: "Ana",
  edad: 25,
};

return (
  <div>
    <h1>Hola {usuario.nombre}</h1>
    <p>Tienes {usuario.edad} años</p>
  </div>
);
```

---

## ¿Qué puedes poner dentro de las llaves?

### Expresiones (devuelven un valor):

**Variables:**

```jsx
const mensaje = "Bienvenido"
<p>{mensaje}</p>
```

**Operaciones matemáticas:**

```jsx
const precio = 100
<p>Precio con IGV: ${precio * 1.18}</p>
```

**Operaciones con strings:**

```jsx
const nombre = "juan"
<p>{nombre.toUpperCase()}</p>  // JUAN
```

**Operador ternario:**

```jsx
const edad = 20
<p>{edad >= 18 ? "Mayor de edad" : "Menor de edad"}</p>
```

**Llamadas a funciones:**

```jsx
function obtenerFecha() {
  return new Date().toLocaleDateString();
}

<p>Fecha: {obtenerFecha()}</p>;
```

---

### Reglas:

No puedes usar directamente:

- `if/else` → Usa operador ternario `? :`
- `for/while` → Usa `.map()`
- `switch` → Usa operador ternario u objetos

**Incorrecto:**

```jsx
return (
  <div>
    {if (edad >= 18) {
      <p>Mayor de edad</p>
    }}
  </div>
)
```

**Correcto:**

```jsx
return <div>{edad >= 18 ? <p>Mayor de edad</p> : <p>Menor de edad</p>}</div>;
```

Nota

```
El renderizado condicional sera detallado en el siguienete nivel :D
```

---

## ¿Cuándo usar doble llave `{{}}`?

Las dobles llaves aparecen cuando pasas un objeto literal en JSX. La primera llave dice "aquí va JavaScript", la segunda define el objeto.

**Casos comunes:**

### Estilos en línea:

```jsx
<div style={{ color: "red", fontSize: "20px", padding: "10px" }}>
  Texto con estilo
</div>
```

### Pasando objetos:

```jsx
const datosUsuario = {nombre: 'Carlos', edad: 30}
<Perfil datos={datosUsuario} />

// O directamente:
<Perfil datos={{nombre: 'Carlos', edad: 30}} />
```
