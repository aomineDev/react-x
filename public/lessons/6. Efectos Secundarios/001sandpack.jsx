import React, { useState } from 'react';

function App() {
  const [clicks, setClicks] = useState(0);
  const [mensaje, setMensaje] = useState('Haz clic en el botón');
  
  // Implementa aquí el useEffect
  
  return (
    <div>
      <h2>Contador de Clicks</h2>
      <p>{mensaje}</p>
      <button onClick={() => setClicks(clicks + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default App;
