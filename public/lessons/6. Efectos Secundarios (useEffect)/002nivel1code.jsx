import React, { useState} from "react";

function ContadorColorFondo() {
  const [clicks, setClicks] = useState(0);

  // TAREA: Implementa aquí un useEffect que cambie el color de fondo del body
  // Usa: document.body.style.backgroundColor = ...

  return (
    <div>
      <h1>Contador: {clicks}</h1>
      <button onClick={() => setClicks(clicks + 1)}>
        Incrementar
      </button>
      <p>El fondo de la página cambia automáticamente con cada clic.</p>
    </div>
  );
}

export default ContadorColorFondo;
