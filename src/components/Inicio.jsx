import React, { useState, useEffect } from 'react';
import ListaLibros from './ListaLibros';

const Inicio = ({ filtro }) => { // añadir "filtro" como prop
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.anapioficeandfire.com/api/books')
      .then(res => {
        if (!res.ok) {
          throw new Error('Hubo un error al obtener los libros');
        }
        return res.json();
      })
      .then(data => {
        setLibros(data);
        setCargando(false);
      })
      .catch(error => {
        setError(error.message);
        setCargando(false);
      });
  }, []);

  // Filtrar libros en base a la prop "filtro"
  const librosFiltrados = libros.filter(libro =>
    libro.name.toLowerCase().includes(filtro.toLowerCase())
  );

  if (cargando) {
    return <div className="flex justify-center items-center h-screen text-2xl font-bold">Cargando...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-2xl font-bold text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-5">
      <ListaLibros libros={librosFiltrados} /> 
    </div>
  );
};

export default Inicio;
