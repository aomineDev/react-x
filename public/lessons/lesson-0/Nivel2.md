# DOM y Virtual DOM

## ¿Qué es el DOM?

El DOM (Document Object Model) es una representación estructurada del documento HTML que el navegador crea para poder leerlo, modificarlo y manipularlo mediante JavaScript.

Piensa en el DOM como un árbol genealógico de tu página web, donde cada etiqueta HTML es un nodo conectado con otros.

### Ejemplo de HTML
```html
<div>
  <h1>Hola mundo</h1>
  <h2>Usando React</h2>
</div>
```

### Representación en árbol del DOM
```
div (raíz)
├── h1
│   └── "Hola mundo"
└── h2
    └── "Usando React"
```

Cada elemento HTML se convierte en un nodo, y estos nodos se organizan en una estructura de árbol que el navegador puede entender y manipular.

---

## ¿Qué es el Virtual DOM?

El Virtual DOM es una **copia virtual y ligera del DOM real**. 

Es como tener un boceto de tu dibujo antes de hacerlo en el papel definitivo. React lo usa para simular cómo debería verse la interfaz después de los cambios, sin tocar aún el DOM real.

### ¿Por qué es importante?

Manipular el DOM real es **lento y costoso** para el navegador. Cada vez que modificas algo, el navegador tiene que:
-  Recalcular estilos
-  Reorganizar elementos
- Volver a pintar la página

¡Esto consume muchos recursos! Especialmente si tienes que actualizar muchas cosas a la vez.

## ¿Por qué React usa el Virtual DOM?

React usa el Virtual DOM para **optimizar el rendimiento** mediante un proceso inteligente:

### El proceso de actualización
 
#### ~1~ Cambio detectado: Algo cambia en tu aplicación (un clic, nuevos datos, etc.)
#### ~2~ Crea una copia: React crea una nueva versión del Virtual DOM con los cambios
#### ~3~ Compara versiones: Compara la versión nueva con la anterior (esto se llama "diffing")
#### ~4~ Detecta diferencias: Identifica exactamente qué cambió
#### ~5~ Actualiza selectivamente: Actualiza solo las partes del DOM real que necesitan cambiar

---

## Beneficios del Virtual DOM

### Ahorro de recursos
React evita actualizaciones innecesarias del DOM real, lo que significa menos trabajo para el navegador.

### Velocidad en aplicaciones grandes
Cuando tienes miles de elementos (como el feed de Facebook o la interfaz de Netflix), el Virtual DOM hace que todo funcione sin ralentizarse.

### Actualizaciones por lotes
React puede agrupar múltiples cambios y aplicarlos todos de una vez, en lugar de actualizar uno por uno.

---



**En el siguiente nivel:** Aprenderás sobre JSX y cómo escribir componentes de React en la práctica.