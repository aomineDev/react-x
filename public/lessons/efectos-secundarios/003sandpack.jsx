import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  
  // Implementa aquí el useEffect con el intervalo y su limpieza

  
  return (
    <div style={{ padding: '20px', border: '2px solid #3b82f6', borderRadius: '8px' }}>
      <h3>Cronómetro Activo</h3>
      <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>
        {segundos} segundos
      </p>
    </div>
  );
}

function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <h2>Limpieza de Recursos</h2>
      
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Detener' : 'Iniciar'} Cronómetro
      </button>
      
      <div style={{ marginTop: '20px' }}>
        {mostrar && <Cronometro />}
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#64748b' }}>
        Al detener el cronómetro, el intervalo se limpia automáticamente
      </p>
    </div>
  );
}

export default App;
