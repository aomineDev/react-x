# Buenas Prácticas: Tipado y Defaults

Cuando creas componentes reutilizables, es importante documentar qué props aceptan y qué tipo de datos esperan. Esto ayuda a prevenir errores y facilita el trabajo en equipo.

Para validar y documentar las props de un componente, React proporciona la librería `prop-types`.

En esta actividad aprenderás a usar propTypes para validar props.

PropTypes permite especificar el tipo de dato esperado para cada prop y si es requerida. Aquí un ejemplo:

## <span class='custom-order'>1</span>Definir el componente y recibir props

```javascript showLineNumbers
import PropTypes from 'prop-types'

function Boton({ texto, tipo, onClick, deshabilitado }) {
```

- El componente recibe varias props: texto, tipo, etc.
- PropTypes permitirá validar qué tipo debe tener cada una.

## <span class='custom-order'>2</span>Render del botón

```javascript showLineNumbers
  return (
    <button
      onClick={onClick}
      disabled={deshabilitado}
      style={{ backgroundColor: tipo === 'primario' ? '#3b82f6' : '#64748b' }} >
      {texto}
    </button>
    )
  }
```

- `onClick` ejecuta la función recibida.
- `disabled` usa la prop para deshabilitar el botón.
- Estilo cambia según el tipo de botón.
- `{texto}` muestra el texto enviado por props.

## <span class='custom-order'>3</span>Validación de props con PropTypes

```javascript showLineNumbers
Boton.propTypes = {
  texto: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(['primario', 'secundario']),
  onClick: PropTypes.func,
  deshabilitado: PropTypes.bool,
}
```

- texto: debe ser string y obligatorio.
- tipo: solo puede ser `"primario"` o `"secundario"`.
- onClick: debe ser una función.
- deshabilitado: debe ser booleano.
  > Esto ayuda a evitar errores al usar el componente.

## <span class='custom-order'>4</span>Valores por defecto

```javascript showLineNumbers
Boton.defaultProps = {
  tipo: 'primario',
  deshabilitado: false,
}
```

- Si el componente no recibe esas props, usará estos valores.
- Garantiza consistencia y evita errores.

---

## Agregar propTypes a Tarjeta

Para el componente `Tarjeta`, define propTypes que especifiquen:

- `titulo`: string requerido
- `descripcion`: string requerido
- `imagen`: string opcional
- `destacado`: boolean opcional

```javascript showLineNumbers
Tarjeta.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string,
  destacado: PropTypes.bool,
}

Tarjeta.defaultProps = {
  destacado: false,
}
```

## Agregar propTypes a Badge

Para el componente `Badge`, define propTypes que especifiquen:

- `texto`: string requerido
- `color`: debe ser uno de ['azul', 'verde', 'rojo', 'gris']
- `tamaño`: debe ser uno de ['pequeño', 'mediano', 'grande']

> [!warning]
> Observar las advertencias

Intenta pasar props de tipo incorrecto y observa las advertencias en la consola del navegador.

---

Implementa el código. Observa cómo propTypes te ayuda a detectar errores antes de que causen problemas.

Has aprendido a validar props. A continuación aprenderás las reglas de cuándo usar cada patrón de reutilización.
