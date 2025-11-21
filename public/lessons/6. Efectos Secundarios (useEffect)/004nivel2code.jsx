import React, { useState } from 'react';

function FormularioUsuario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);

  // TAREA 1: Implementa un useEffect que se ejecute solo cuando cambie 'nombre'
  // Debe hacer: console.log('Nombre cambió a:', nombre)

  // TAREA 2: Implementa un useEffect que se ejecute solo una vez al montar
  // Debe hacer: console.log('Componente montado')

  return (
    <div>
      <h2>Formulario de Usuario</h2>
      
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

      <p>Abre la consola para ver los efectos en acción</p>
    </div>
  );
}

export default FormularioUsuario;