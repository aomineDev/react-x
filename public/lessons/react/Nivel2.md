# Nivel 2: Dom

## ¿Que es el Dom?

El DOM (Document Object Model) es una representación estructurada del documento HTML que el navegador crea para poder leerlo, modificarlo y manipularlo mediante JavaScript.

- Html

```html
<div>
  <h1>Hola mundo</h1>
  <h2>Usando react</h2>
</div>
```

- Dom, es representado como un rabol

```html
--
<div>
  |-
  <h1>Hola mundo</h1>
  |-
  <h2>Usando react</h2>
</div>
```

## ¿Que es el virtual Dom?

El Virtual DOM es una copia virtual y ligera del DOM real.
React lo usa para simular cómo debería verse la UI después de cambios, sin tocar aún el DOM real.

## ¿Porque React usa el virtual DOM?

React usa el Virtual DOM para optimizar el rendimiento:

- Cuando algo cambia en el documento, React crea una copia del virtual DOM
- Compara la copia nueva con la version anterior
- Detecta solo los cambios
- Actualiza solo las partes que fueron actualizadas.

Esto hace que react:

- Ahorre recursos
- Sea rapido en apps grandes

falta buscar imagen referencia no ay xd
