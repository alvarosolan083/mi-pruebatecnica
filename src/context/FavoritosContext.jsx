// FavoritosContext.jsx
import React, { createContext, useState } from 'react';

export const FavoritosContext = createContext();  // Asegúrate de exportar el contexto

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (libro) => {
    setFavoritos((prev) => [...prev, libro]);
  };

  const eliminarFavorito = (id) => {
    setFavoritos((prev) => prev.filter((libro) => libro.url !== id));  
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, agregarFavorito, eliminarFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosContext;
