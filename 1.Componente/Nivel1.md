# Componenete

## ¿Que es un componenete?

Un componente es una función que devuelve una parte de la interfaz gráfica de usuario (UI). Cada boton, carta o pagina puede ser un componente

## Ventajas

- Cada componenete puede ser reutilizado en diferentes partes de tu aplicacion
- Reduce lineas de codigo

### Sintaxis basica de un componenetes

```js
export default function Saludo() {
  return (
    <div>
      <h1> Hola mundo, usando react </h1>
    </div>
  );
}
```

Clave:

- El nombre del componenete empieza con mayuscula
- Tienen el export porque seran reutilizados en otra parte de la aplicacion
