# Referencias y DOM

A veces necesitas acceder directamente a un elemento del DOM, como dar foco a un input o medir el tamaño de un elemento. También puedes necesitar almacenar valores que persistan entre renders sin causar re-renderizados.

Para estos casos, React proporciona el hook `useRef`.

En esta actividad aprenderás a usar `useRef` para acceder al DOM y almacenar valores.

`useRef` retorna un objeto con una propiedad `current` que persiste durante toda la vida del componente. Aquí un ejemplo:

## Paso 1 - Importación del hook
```javascript
import { useRef } from 'react';
```
- Se importa `useRef`, un hook que permite crear una referencia que no se pierde entre renders.
## Paso 2 - Crear una referencia
```javascript
const inputRef = useRef(null);
```
- `useRef` devuelve un objeto con una propiedad `.current`.
- Aquí `.current` comenzará como `null`.
- Esta referencia apuntará al `<input>` cuando React lo renderice.
## Paso 3 - Función que usa la referencia
```javascript
const enfocarInput = () => {
  inputRef.current.focus();
};
```
- Se accede al elemento DOM real mediante `inputRef.current`.
- Se llama al método `.focus()` para enfocar el input.

## Paso 4 - Asociar la referencia al elemento
```javascript
<input ref={inputRef} type="text" />
```
- El atributo `ref` conecta el input con `inputRef`.

- Después del render, `inputRef.current` será el input real del DOM.

## Paso 5 - Botón que activa la acción
```javascript
<button onClick={enfocarInput}>Enfocar</button>
```
- Al hacer clic, se ejecuta enfocarInput.
- Esto enfoca inmediatamente el campo de texto.

> ## Nota sobre `useRef`
> 
> - **Acceder al DOM**: Obtener referencia a elementos reales para manipularlos  
> - **Almacenar valores mutables**: Guardar valores que no causan re-render cuando cambian

---

Implementa el código. Observa cómo el contador de clicks persiste sin causar re-renders, mientras que el enfoque manipula el DOM directamente.

Has aprendido a usar useRef. A continuación aprenderás a optimizar componentes con useMemo y useCallback.