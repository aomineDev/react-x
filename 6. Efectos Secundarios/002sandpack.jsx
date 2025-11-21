import React, { useState, useEffect } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [saludo, setSaludo] = useState('');
  const [mensajeBienvenida, setMensajeBienvenida] = useState('Cargando...');
  
  // Implementa aquí el useEffect que observa 'nombre'
  
  // Implementa aquí el useEffect que se ejecuta solo una vez
  
  return (
    <div>
      <h2>Control de Efectos</h2>
      <p>{mensajeBienvenida}</p>
      
      <div>
        <label>Nombre: </label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
      </div>
      
      <div>
        <label>Edad: </label>
        <input 
          type="number" 
          value={edad} 
          onChange={(e) => setEdad(Number(e.target.value))} 
        />
      </div>
      
      <p>{saludo}</p>
      <p style={{ fontSize: '14px', color: '#64748b' }}>
        Escribe tu nombre y observa cómo solo ese efecto se ejecuta
      </p>
    </div>
  );
}

export default App;
