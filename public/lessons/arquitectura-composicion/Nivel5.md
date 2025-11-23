# Arquitectura: Reglas de Reutilización

En React moderno tienes múltiples formas de reutilizar lógica: Custom Hooks, Higher-Order Components (HOC), Render Props, y Composición con children. Saber cuándo usar cada patrón es clave para escribir código mantenible.

Para elegir el patrón correcto de reutilización, necesitas entender las fortalezas de cada uno.

En esta actividad aprenderás las reglas para elegir el patrón adecuado.

## Cuándo usar cada patrón

**Composición con children (props.children)**

- Cuando necesitas reutilizar estructura visual
- Para layouts y componentes contenedores
- Cuando el componente es principalmente presentacional
- Ejemplo: Card, Modal, Layout, Button

**Custom Hooks (useNombreDelHook)**

- Cuando necesitas reutilizar lógica de estado
- Para efectos secundarios compartidos
- Cuando no hay UI involucrada directamente
- Ejemplo: useForm, useFetch, useAuth, useLocalStorage

**Render Props**

- Cuando necesitas compartir lógica pero dar control total del renderizado
- Para componentes que manejan comportamiento complejo
- Menos común en React moderno (Custom Hooks son preferidos)

**Higher-Order Components (HOC)**

- Patrón más antiguo, menos usado ahora
- Custom Hooks suelen ser mejor opción
- Útil para agregar props o comportamiento a componentes existentes

Regla general moderna:

1. ¿Reutilizar UI? → Composición con children
2. ¿Reutilizar lógica? → Custom Hooks
3. ¿Casos especiales? → Considera Render Props o HOC

---

## Identificar el patrón correcto

Para cada caso, identifica qué patrón usarías:

1. Un componente que muestre datos en un formato de tabla
2. Lógica para manejar formularios con validación
3. Un componente que agregue autenticación a cualquier página
4. Una barra lateral reutilizable para diferentes secciones

## Implementar ejemplos

Implementa:

- Un Custom Hook `useContador` que maneje incremento/decremento
- Un componente `Panel` que use composición para mostrar contenido
- Combina ambos en la aplicación

Estructura del Custom Hook:

```javascript
function useContador(inicial = 0) {
  const [valor, setValor] = useState(inicial)

  const incrementar = () => setValor((v) => v + 1)
  const decrementar = () => setValor((v) => v - 1)
  const reset = () => setValor(inicial)

  return { valor, incrementar, decrementar, reset }
}
```

---

Implementa el código. Observa cómo combinar patrones te permite crear aplicaciones flexibles y mantenibles.

Has completado el módulo de Arquitectura y Composición. Ahora dominas los patrones fundamentales para estructurar aplicaciones React escalables.
