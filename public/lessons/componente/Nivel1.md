# Nivel 1: Creando tu Primer Componente

En React, un componente es una función que devuelve parte de la interfaz de usuario (UI). Cada botón, tarjeta o página puede ser un componente.

- OBJETIVO:

  En este nivel, aprenderás cómo crear y exportar un componente.

## 1. Define tu componente

Crea un componente llamado `Saludo`.

```jsx
export default function Saludo() {}
```

Los nombres de componentes **deben empezar con mayúscula**. El `export default` lo hace reutilizable en otras partes de tu aplicación.

## 2. Retorna contenido JSX

React requiere que cada componente retorne **un único elemento contenedor**. Agrega un return:

```jsx
return (
  <div>
    <h1>Bienvenido a React</h1>
  </div>
);
```

El `<div>` envuelve tu contenido. Sin un contenedor, React mostrará un error.

## 3. Usa un Fragment en su lugar

Si no quieres un `<div>` extra en tu HTML, usa un **Fragment** (`<></>`):

```jsx
return (
  <>
    <h1>Bienvenido a React</h1>
  </>
);
```

Los Fragments mantienen tu DOM limpio sin agregar elementos HTML innecesarios.

## 4 - Union de todos los pasos

```jsx
export default function Saludo() {
  return (
    <>
      <h1>Bienvenido a React</h1>
    </>
  );
}
```

```
¡Has creado tu primer componente de React! A continuación, aprenderás cómo hacerlo dinámico con JSX.
```
