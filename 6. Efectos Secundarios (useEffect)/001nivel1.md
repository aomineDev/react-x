## Nivel 1: Introducción a useEffect

### ¿Qué es un efecto secundario?

En React, un **efecto secundario** es cualquier operación que afecta algo fuera del componente:

- Hacer peticiones HTTP a una API
- Configurar timers o intervalos
- Sincronizar datos con localStorage
- Registrar información en consola para debugging

### El Problema que Resuelve

Si quieres ejecutar código cuando cambia un estado, no puedes ponerlo directamente en el cuerpo del componente porque se ejecutaría en cada render de manera descontrolada.

`useEffect` te permite ejecutar código **después de que React actualice el DOM**, de manera predecible.

### Sintaxis de useEffect
```javascript
import { useEffect } from 'react';

useEffect(() => {
  // Código del efecto
  console.log('Este efecto se ejecutó');
});
```

### Ejecución por Defecto

Por defecto, `useEffect` se ejecuta:
- Después del **primer render**
- Después de **cada actualización**

---

## TAREA PRÁCTICA

Implementa un `useEffect` que cambie automáticamente el **color de fondo de la página** cada vez que el contador cambie.

### Pasos:
1. Importa `useEffect` desde React.
2. Agrega un `useEffect` debajo del `useState`.
3. Dentro del efecto, cambia el color de fondo del `<body>` así:
   ```js
   document.body.style.backgroundColor = clicks % 2 === 0 ? "lightblue" : "lightyellow";

**Resultado esperado:**
Cada vez que hagas clic, el fondo de la página cambiará automáticamente de color. Esto te permitirá verificar visualmente que el `useEffect` se ejecuta cada vez que el contador cambia.

---

## Próximo Nivel

Ejecutar un efecto después de CADA render puede ser ineficiente. En el siguiente nivel aprenderás a controlar cuándo se ejecuta usando el array de dependencias.