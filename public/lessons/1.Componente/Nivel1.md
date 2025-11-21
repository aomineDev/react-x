# Componenete

## ¿Que es un componenete?

Un componente es una función que devuelve (return) una parte de la interfaz gráfica de usuario (UI). En react cada boton, carta o pagina puede ser un componente

## Ventajas

- Cada componenete puede ser reutilizado en diferentes partes de tu aplicacion
- Reduce lineas de codigo
- Dividir la aplicacion en partes organizadas

## Crea tu primer componenente

1. Define tu componenente

```js
export default funcion Saludo (){
}
```

Clave:

- El nombre del componenete empieza con mayuscula
- Tienen el export porque seran reutilizados en otra parte de la aplicacion

2. Retornar contenido

React exige que todo componente retorne un único elemento contenedor.
Si quieres mostrar varios elementos, debes envolverlos dentro de un contenedor.

- Existe 3 formas de retornar contenido de un componenente

1. Usando una etiqueta `div`

```js
return (
  <div>
    <h1>Bienvenido a React </h1>
  </div>
)
```

2. Usando un fragmento

```js
return (
  <>
    <h1>Bienvenido a React </h1>
  </>
)
```

3. En una sola linea

```js
return <h1>Bienvenido a React </h1>
```

Nota

```
Si no agregas ninguna de estas 3 opciones React marcara con error el componenete
```
