# Controlando la Ejecución

Ejecutar un efecto después de cada render puede ser ineficiente o causar comportamientos no deseados. Muchas veces solo necesitas ejecutar el efecto cuando cambian valores específicos o incluso solo una vez cuando el componente se monta.

Para controlar cuándo se ejecuta un efecto, React utiliza el **array de dependencias**.

_En esta actividad aprenderás a controlar la ejecución de efectos._

El array de dependencias es el segundo argumento de `useEffect`. Permite controlar exactamente cuándo se ejecuta el efecto. Aquí un ejemplo:

## **Paso 1 - Definir estados**

```javascript
export default function App() {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState(0)
```

- El efecto dependerá de este estado.

## **Paso 2 - Anadir dependencia**

```javascript
  useEffect(() => {
    console.log('El nombre cambió:', nombre)
  }, [nombre])

  return <div>...</div>
}
```

- El array `[nombre]`controla cuándo se ejecuta el efecto.
- Solo corre cuando `nombre` cambia.

> Tres casos importantes a tener en cuenta:

- **Sin array**: El efecto se ejecuta después de cada render
- **Array vacío []**: El efecto se ejecuta solo una vez al montar el componente
- **Con dependencias [valor]**: El efecto se ejecuta solo cuando ese valor cambia

---

## Agregar el efecto que observa el nombre

Implementa un `useEffect` que se ejecute solo cuando cambie `nombre`. Actualiza el saludo con:

```javascript
setSaludo(`Hola ${nombre}!`)
```

El array de dependencias debe ser `[nombre]`.

## Agregar el efecto que se ejecuta una vez

Implementa un `useEffect` que se ejecute solo al montar el componente. Actualiza el mensaje de bienvenida con:

```javascript
setMensajeBienvenida('Componente montado correctamente')
```

El array de dependencias debe ser `[]`.

---

Agrega tu código para completar ambos efectos. Observa en la consola cómo cada efecto se ejecuta en momentos diferentes.

Has aprendido a controlar la ejecución de efectos. A continuación aprenderás a limpiar recursos cuando un componente se desmonta.
