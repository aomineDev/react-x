import React, { useState } from 'react';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TAREA: Implementa un useEffect que:
  // 1. Haga fetch a 'https://jsonplaceholder.typicode.com/users'
  // 2. Guarde los usuarios en el estado
  // 3. Maneje loading y error correctamente

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;