import React, { useState } from 'react';  // Asegúrate de importar useState desde 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import DetalleLibro from './components/DetalleLibro';
import Favoritos from './components/Favoritos';
import AgregarLibro from './components/AgregarLibro'; 
import BuscadorLibros from './components/BuscadorLibros';
import { FavoritosProvider } from './context/FavoritosContext'; 

function App() {
  const [filtro, setFiltro] = useState('');  

  return (
    <FavoritosProvider>
      <Router>
        <nav>
          <Link to="/">Inicio</Link>
          <span> | </span>
          <Link to="/favoritos">Favoritos</Link>
          <span> | </span>
          <Link to="/agregar">Agregar libro</Link> 
          <BuscadorLibros setFiltro={setFiltro} />  
        </nav>
        <Routes>
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/libro/:id" element={<DetalleLibro />} />
          <Route path="/agregar" element={<AgregarLibro />} /> 
          <Route path="/" element={<Inicio filtro={filtro} />} />

        </Routes>
      </Router>
    </FavoritosProvider>
  );
}

export default App;
