import React, { useState } from 'react';

function Cronometro() {
  const [segundos, setSegundos] = useState(0);

  // TAREA: Implementa un useEffect que:
  // 1. Cree un setInterval que incremente 'segundos' cada 1000ms
  // 2. Retorne una función de limpieza que haga clearInterval

  return (
    <div>
      <h1>Tiempo: {segundos}s</h1>
    </div>
  );
}

function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'} Cronómetro
      </button>
      
      {mostrar && <Cronometro />}
      
      <p>Observa que al ocultar el cronómetro, el intervalo se limpia correctamente</p>
    </div>
  );
}

export default App;