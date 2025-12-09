# Controlando la Ejecución

Ejecutar un efecto después de cada render puede ser ineficiente o causar comportamientos no deseados. Muchas veces solo necesitas ejecutar el efecto cuando cambian valores específicos o incluso solo una vez cuando el componente se monta.

Para controlar cuándo se ejecuta un efecto, React utiliza el **array de dependencias**.

_En esta actividad aprenderás a controlar la ejecución de efectos._

El array de dependencias es el segundo argumento de `useEffect`. Permite controlar exactamente cuándo se ejecuta el efecto. Aquí un ejemplo:

## <span class='custom-order'>1</span> Definir estados

```javascript showLineNumbers {2-3}
export default function App() {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState(0)
```

- El efecto dependerá de este estado.

## <span class='custom-order'>2</span>Anadir dependencia

```javascript showLineNumbers {3}
  useEffect(() => {
    console.log('El nombre cambió:', nombre)
  }, [nombre])

  return <div>...</div>
}
```

- El array `[nombre]`controla cuándo se ejecuta el efecto.
- Solo corre cuando `nombre` cambia.

> [!important]
> Tres casos importantes a tener en cuenta:

- **Sin array**: El efecto se ejecuta después de cada render
- **Array vacío []**: El efecto se ejecuta solo una vez al montar el componente
- **Con dependencias [valor]**: El efecto se ejecuta solo cuando ese valor cambia

---

## Agregar el efecto que observa el nombre

Implementa un `useEffect` que se ejecute solo cuando cambie `nombre`. Actualiza el saludo con:

```javascript showLineNumbers
setSaludo(`Hola ${nombre}!`)
```

El array de dependencias debe ser `[nombre]`.

## Agregar el efecto que se ejecuta una vez

Implementa un `useEffect` que se ejecute solo al montar el componente. Actualiza el mensaje de bienvenida con:

```javascript showLineNumbers
setMensajeBienvenida('Componente montado correctamente')
```

> [!important]
> El array de dependencias debe ser `[]`.

---

Agrega tu código para completar ambos efectos. Observa en la consola cómo cada efecto se ejecuta en momentos diferentes.

Has aprendido a controlar la ejecución de efectos. A continuación aprenderás a limpiar recursos cuando un componente se desmonta.
