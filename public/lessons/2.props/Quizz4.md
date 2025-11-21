# QUIZZ : Predecir el Output

```jsx
function TarjetaUsuario({
  nombre,
  profesion,
  ubicacion = "No especificado",
  experiencia = 0,
}) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{profesion}</p>
      <p>{ubicacion}</p>
      <p>{experiencia} años de experiencia</p>
    </div>
  );
}

export default function App() {
  return (
    <TarjetaUsuario
      nombre="Lucía Torres"
      profesion="Analista QA"
      experiencia={3}
    />
  );
}
```

OPCIONES:

A) "Ubicación no especificada"

B) "No especificado"

C) "undefined"

D) Nada, da error
