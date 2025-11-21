# JSX

## ¿Que es JSX?

JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que se utiliza principalmente en React. Permite escribir código HTML dentro de JavaScript, es la principal forma de crear componentes, todo en un mismo lugar sin separar la logica

JSX es más estricto que HTML, por lo que tiene reglas específicas al crear componentes.

Reglas principales de JSX

1. Añadir estilos- usar className -> en lugar de class

```js
return (
  <div>
    <h1 className="message">Hola Mundo</h1>
  </div>
);
```

2. Formularios-usar htmlFor -> en lugar de for

```js
return (
  <div>
    <input className="form-control" type="text" id="name" />
    <label htmlFor="name">Ingresa tu nombre</label>
  </div>
);
```

3. Todas las etiquetas deben estar cerradas

JSX es más estricto que HTML, por lo que tiene reglas específicas al crear componentes.

```js
return (
  <div>
    <h1>Hola mundo</h1>
  </div>
);
```

4. Devolver un solo elemento

Para devolver múltiples elementos de un componente, envuélvelos con una sola etiqueta principal.

```
Ya lo viste en los diferentes tipos de contenedores en el nivel componente
```
