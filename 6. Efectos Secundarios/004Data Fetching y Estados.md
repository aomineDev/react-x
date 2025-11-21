# Data Fetching y Estados

Obtener datos de una API es una de las tareas más comunes en aplicaciones React. Generalmente quieres cargar datos cuando el componente se monta y mostrar diferentes estados mientras esperas la respuesta.

Para manejar peticiones correctamente, necesitas gestionar tres estados: cargando, error y datos.

En esta actividad aprenderás a hacer peticiones HTTP con `useEffect`.

El patrón para hacer fetch con useEffect maneja múltiples estados. Aquí un ejemplo:
```javascript
useEffect(() => {
  const obtenerDatos = async () => {
    // ...
  };

  obtenerDatos();
}, []);
```
- El código dentro de `useEffect` se ejecuta solo una vez, cuando el componente se monta.
- Perfecto para realizar peticiones a una API.
---
## Función interna asíncrona
```javascript
const obtenerDatos = async () => {
```
- Define una función donde se colocará toda la lógica del `fetch`.
- Se usa dentro del efecto porque `useEffect` no puede ser declarado como `async`.
## Pedir datos a la API
```javascript
try{
  const res = await fetch("https://PETICION_A_TU_API");
  const data = await res.json();
  setDatos(data);
}

```
- Llama a la API con fetch.
- Convierte la respuesta a JSON.
- Guarda los datos en el estado (setDatos).
## Manejo de errores y finalizacion del proceso
```javascript
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
}
```
- Si ocurre un error (sin internet, URL incorrecta, etc.), guarda el mensaje de error en el estado.
- Se ejecuta siempre, haya error o no.
- Marca que la carga terminó (loading = false), para mostrar la data o el mensaje adecuado.

Tres estados importantes:

- **loading**: Indica que la petición está en proceso
- **error**: Almacena cualquier error que ocurra
- **datos**: Contiene la información obtenida de la API


## Implementar el efecto para obtener usuarios

Implementa un `useEffect` que:
1. Establecer los estados, usuarios([]), loading(true) y error(null)
2. Haga fetch a  `'https://thesimpsonsapi.com/api/characters
'` o tambien puedes intentar con `'https://jsonplaceholder.typicode.com/users'`
3. Convierta la respuesta a JSON
4. Actualice el estado `usuarios` con los datos
5. Cambie `loading` a `false` al terminar
6. Maneje errores con `.catch()` actualizando el estado `error`

El array de dependencias debe ser `[]` para que solo se ejecute una vez.

---

Implementa el código. Observa cómo primero muestra "Cargando...", luego la lista de usuarios o un mensaje de error si algo falla.

Has aprendido a obtener datos de APIs. A continuación aprenderás a evitar errores comunes y optimizar efectos.