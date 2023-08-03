import React, { useState } from 'react';

const BuscadorLibros = ({ setFiltro }) => {
  const [consulta, setConsulta] = useState('');

  const manejarCambio = (e) => {
    setConsulta(e.target.value);
    setFiltro(e.target.value);
  };

  return (
    <div className="flex items-center justify-center my-5">
      <input 
        type="text" 
        value={consulta} 
        onChange={manejarCambio} 
        placeholder="Buscar libros..." 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default BuscadorLibros;
