import React, { useState, useRef } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');
  const [texto, setTexto] = useState('');
  
  // Crea aquí inputRef con useRef(null)
  
  // Crea aquí clicksRef con useRef(0)
  
  const manejarEnfoque = () => {
    // Implementa el enfoque del input usando inputRef.current.focus()
  };
  
  const manejarClick = () => {
    // Incrementa clicksRef.current
    // Actualiza el mensaje mostrando el total de clicks
  };
  
  return (
    <div>
      <h2>Referencias y DOM</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe algo aquí"
          style={{ padding: '10px', marginRight: '10px', width: '250px' }}
        />
        <button 
          onClick={manejarEnfoque}
          style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Enfocar Input
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={manejarClick}
          style={{ padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Contar Click
        </button>
        <p style={{ marginTop: '10px', color: '#64748b' }}>{mensaje}</p>
      </div>
      
      <p style={{ fontSize: '14px', color: '#64748b' }}>
        El contador de clicks no causa re-renders del componente
      </p>
    </div>
  );
}

export default App;
