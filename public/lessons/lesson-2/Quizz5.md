# QUIZZ: Identifica errores

```jsx
function App() {
  function manejarSaludo() {
    alert("Hola!");
  }

  return <Boton onClick={manejarSaludo()} />;
}

function Boton({ onClick }) {
  return <button onClick={onClick}>Saludar</button>;
}
```
