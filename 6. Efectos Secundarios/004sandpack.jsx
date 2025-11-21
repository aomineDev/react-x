
//no te olvides de importar el hook
import React, { useState } from "react";

export default function App() {
  // estados iniciales


  /* implementar useEffect con Fetch
     recuerda obtener el array de objetos de la peticion con data.results */
  

  if (loading) return <h2>Cargando personajes...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Personajes de Los Simpsons</h2>
      <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "15px" }} >
        { 
          usuarios.map( (u) => (
            <li 
              key={u.id} 
              style={{ width: "120px", backgroundColor: "#f1f5f9", borderRadius: "8px", textAlign: "center", border:"2px dashed black" }}>
              <img 
                src={`https://cdn.thesimpsonsapi.com/500${u.portrait_path}`} 
                alt={u.name} 
                style={{ width: "80px", borderRadius: "8px", marginBottom: "10px" }} 
              />
              <p>{u.name}</p>
            </li>
          ) )
        }
      </ul>
    </div>
  );
}