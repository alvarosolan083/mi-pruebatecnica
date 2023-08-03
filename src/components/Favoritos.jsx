
import React, { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritosContext';  

const Favoritos = () => {
  const { favoritos, eliminarFavorito } = useContext(FavoritosContext);  

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Mis libros favoritos</h1>
      {favoritos.map(libro => (
        <div key={libro.id} className="mb-4 p-4 border border-gray-200 rounded">
          <h2 className="text-xl font-bold mb-2">{libro.name}</h2>
          <p className="mb-1"><span className="font-bold">Autores: </span>{libro.authors}</p>
          <p className="mb-1"><span className="font-bold">Número de páginas: </span>{libro.numberOfPages}</p>
          <p className="mb-1"><span className="font-bold">Fecha de lanzamiento: </span>{new Date(libro.released).toLocaleDateString()}</p>
          <p className="mb-1"><span className="font-bold">Editorial: </span>{libro.publisher}</p>
          <button 
            onClick={() => eliminarFavorito(libro.id)} 
            className="mt-2 py-2 px-4 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors duration-200"
          >
            Eliminar de favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
