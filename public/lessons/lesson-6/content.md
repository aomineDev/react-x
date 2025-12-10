--
# Challenge: Historial de Cambios

¡Pon en práctica lo que aprendiste sobre `useEffect`! Crearás un contador que registra su historial de cambios.

## ~1~ Introducción

Vas a construir un **Contador con Historial** que:
- Incrementa un contador
- Registra cada cambio en un historial
- Muestra un mensaje al montar el componente

Este desafío usa los conceptos clave del módulo: efectos con dependencias y efectos que se ejecutan una sola vez.

## ~2~ Reglas del Desafío

### Estados ya creados
Ya tienes dos estados:
- `contador`: Número que se incrementa
- `mensajes`: Array de strings con el historial

### Efectos que debes implementar

**Efecto 1: Mensaje al montar**
- Debe ejecutarse solo una vez cuando el componente se monta
- Debe agregar el mensaje: `"Componente montado"` al array de mensajes
- Usa el array de dependencias vacío `[]`

**Efecto 2: Registrar cambios del contador**
- Debe ejecutarse cada vez que cambie `contador`
- Debe agregar un mensaje: `"Contador cambió a: X"` (donde X es el valor actual)
- Usa `[contador]` como dependencia

### Cómo agregar mensajes al array

Usa esta sintaxis para agregar al array:
```javascript showLineNumbers
setMensajes([...mensajes, "nuevo mensaje"]);
```

## ~3~ Ejemplo de Resultado
> [!important]
> Contador: 0
> [Incrementar]
> 
> Historial:
> - Componente montado
> 
> --- Después de 2 clicks ---
> 
> Contador: 2
> [Incrementar]
> 
> Historial:
> - Componente montado
> - Contador cambió a: 1
> - Contador cambió a: 2

## ~4~ Pistas

1. Importa `useEffect` desde React
2. El primer efecto debe tener array vacío `[]`
3. El segundo efecto debe tener `[contador]` como dependencia
4. Para agregar al array: `setMensajes([...mensajes, "texto"])`
5. Recuerda usar template strings: `` `Contador cambió a: ${contador}` ``

## ~5~ Criterios de Evaluación

Tu solución debe:
- Mostrar "Componente montado" al cargar
- Mostrar "Componente montado" solo una vez
- Registrar cada cambio del contador
- Incrementar correctamente el contador
- Usar `useEffect` correctamente

¡Buena suerte! 🚀