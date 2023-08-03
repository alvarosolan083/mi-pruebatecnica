import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FavoritosContext } from '../context/FavoritosContext';

const DetalleLibro = () => {
  const [libro, setLibro] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarFavorito } = useContext(FavoritosContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.anapioficeandfire.com/api/books/${id}`) 
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setLibro(data);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, [id]); 

  if (cargando) {
    return <div className="flex justify-center items-center h-screen text-2xl font-bold">Cargando...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-2xl font-bold text-red-500">Error al cargar los detalles del libro: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl mb-4">{libro.name}</h1>
      <p className="mb-2">Autor: {libro.authors.join(', ')}</p>
      <p className="mb-2">Número de páginas: {libro.numberOfPages}</p>
      <p className="mb-2">Fecha de publicación: {libro.released}</p>
      <p className="mb-2">Editor: {libro.publisher}</p>
      <button 
        onClick={() => agregarFavorito(libro)} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        Agregar a favoritos
      </button>
      <button 
        onClick={() => navigate('/')} 
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        Volver a la lista de libros
      </button>
    </div>
  );
};

export default DetalleLibro;
