# Nivel 2 — Distintos tipos de Inputs (select, checkbox, radio, textarea)

Los formularios reales rara vez usan solo `<input type="text">`.
React trabaja igual para todos: cada input tiene un value y un handler que actualiza el estado.

Es por ellos que vamos a aprender a manejar en React:

`<select>`

`<checkbox>`

`<radio>`

`<textarea>`

con sus diferencias en cómo actualizan el estado.

A continuación, vamos a crear un formulario de “Preferencias de Usuario” con 4 campos:

Nombre: `<input type="text">`

Rol: `<select>`

Acepta términos: `<input type="checkbox">`

Biografía: `<textarea>`

## Paso 1 — Definir el estado inicial

```jsx
import { useState } from "react";

export default function UserPreferences() {
  const [form, setForm] = useState({
    nombre: "",
    rol: "user",
    aceptaTerminos: false,
    bio: "",
  });

  // ...
}
```

## Paso 2 — Handler genérico para inputs de texto, select y textarea

```jsx
function handleChange(event) {
  const { name, value } = event.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
}
```

Este handler sirve para:

- `<input type="text">`
- `<select>`
- `<textarea>`

## Paso 3 — Handler especial para checkbox

(porque checkbox no usa **value**, sino **checked**)

```jsx
function handleCheckbox(event) {
  const { name, checked } = event.target;

  setForm((prev) => ({
    ...prev,
    [name]: checked,
  }));
}
```

## Paso 4 — Construir el formulario en JSX

```jsx
return (
  <div className="card">
    <h2>Preferencias del Usuario</h2>

    {/* Nombre */}
    <input
      type="text"
      name="nombre"
      placeholder="Tu nombre"
      value={form.nombre}
      onChange={handleChange}
    />

    {/* Rol */}
    <select name="rol" value={form.rol} onChange={handleChange}>
      <option value="user">Usuario</option>
      <option value="admin">Administrador</option>
      <option value="editor">Editor</option>
    </select>

    {/* Checkbox */}
    <label>
      <input
        type="checkbox"
        name="aceptaTerminos"
        checked={form.aceptaTerminos}
        onChange={handleCheckbox}
      />
      Acepto los términos
    </label>

    {/* Textarea */}
    <textarea
      name="bio"
      placeholder="Escribe una breve biografía"
      value={form.bio}
      onChange={handleChange}
    />

    <hr />
    <pre>{JSON.stringify(form, null, 2)}</pre>
  </div>
);
```

**Ahora es tu turno de implementarlo, gran trabajo**
