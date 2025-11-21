# QUIZZ – Identifica el error

Pregunta

El siguiente componente intenta alternar si un `<div>` es editable, pero además ejecuta un “triple toggle” para demostrar cambios rápidos. Sin embargo, el comportamiento final NO es el esperado: a veces queda editable, a veces no, dependiendo del batching de React.

```js
export default function EditableTest() {
  const [isEditable, setIsEditable] = useState(true);

  function tripleToggle() {
    setIsEditable(!isEditable);
    setIsEditable(!isEditable);
    setIsEditable(!isEditable);
  }

  return (
    <div>
      <div contentEditable={isEditable}>Edita si está activo.</div>

      <button onClick={tripleToggle}>Triple toggle</button>

      <p>Estado final: {String(isEditable)}</p>
    </div>
  );
}
```

¿Cuál es el error y por qué el estado final es impredecible?
