# Creando tu Primer Componente

En React, un componente es una función que devuelve parte de la interfaz de usuario (UI). Cada botón, tarjeta o página puede ser un componente.

- **OBJETIVO:**
  En este nivel, aprenderás cómo crear y exportar un componente.

---

## <span class='custom-order'>1</span> Define tu componente

Crea un componente llamado **Saludo** y agrega un **export** para poder reutilizarlo.

```jsx showLineNumbers /export/#i /Saludo/#s
export default function Saludo() {}
```

> [!note]
> Los nombres de componentes en React siempre empiezan con mayúscula. Esto los diferencia de las etiquetas HTML normales.

---

## <span class='custom-order'>2</span> Retorna contenido JSX

React requiere que cada componente retorne **un único elemento contenedor**, agrega un return con un `<div>`

```jsx showLineNumbers  /div/#i
export default function Saludo() {
  return (
    <div>
      <h1>Bienvenido a React</h1>
    </div>
  )
}
```

---

## <span class='custom-order'>3</span> Usa un Fragment en su lugar

Si no quieres un `<div>` extra en tu HTML, usa un **Fragment** `<></>`

```jsx showLineNumbers {3, 5}
export default function Saludo() {
  return (
    <>
      <h1>Bienvenido a React</h1>
    </>
  )
}
```

> [!tip]
> Los Fragments `<></>` mantienen tu DOM limpio sin agregar elementos HTML innecesarios. Son perfectos cuando solo necesitas agrupar elementos sin añadir estructura extra.

---

## <span class='custom-order'>4</span> Resultado final

```jsx showLineNumbers
export default function Saludo() {
  return (
    <>
      <h1>Bienvenido a React</h1>
    </>
  )
}
```
