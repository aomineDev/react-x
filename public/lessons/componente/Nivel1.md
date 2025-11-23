# Nivel 1: Creando tu Primer Componente

En React, un componente es una función que devuelve parte de la interfaz de usuario (UI). Cada botón, tarjeta o página puede ser un componente.

- OBJETIVO:

  En este nivel, aprenderás cómo crear y exportar un componente.

---

## Paso 1 - Define tu componente

Crea un componente llamado `Saludo`.

```jsx
export default function Saludo() {}
```

---

## Paso 2 - Retorna contenido JSX

React requiere que cada componente retorne **un único elemento contenedor**. Agrega un return:

```jsx
return (
  <div>
    <h1>Bienvenido a React</h1>
  </div>
)
```

---

## Paso 3 - Usa un Fragment en su lugar

Si no quieres un `<div>` extra en tu HTML, usa un **Fragment** `<></>`

```jsx
return (
  <>
    <h1>Bienvenido a React</h1>
  </>
)
```

`Los Fragments mantienen tu DOM limpio sin agregar elementos HTML innecesarios. `

---

## Paso 4 - Resultado final

```jsx
export default function Saludo() {
  return (
    <>
      <h1>Bienvenido a React</h1>
    </>
  )
}
```
