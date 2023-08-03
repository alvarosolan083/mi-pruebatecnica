import React from 'react';
import { useFormik } from 'formik';

const AgregarLibro = () => {
  const formik = useFormik({
    initialValues: {
      titulo: '',
      autor: '',
      genero: '',
      fechaPublicacion: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col">
      <label htmlFor="titulo" className="my-1">Título</label>
      <input
        id="titulo"
        name="titulo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.titulo}
        className="my-1 p-2 border-2 rounded"
      />

      <label htmlFor="autor" className="my-1">Autor</label>
      <input
        id="autor"
        name="autor"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.autor}
        className="my-1 p-2 border-2 rounded"
      />

      <label htmlFor="genero" className="my-1">Género</label>
      <input
        id="genero"
        name="genero"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.genero}
        className="my-1 p-2 border-2 rounded"
      />

      <label htmlFor="fechaPublicacion" className="my-1">Fecha de Publicación</label>
      <input
        id="fechaPublicacion"
        name="fechaPublicacion"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.fechaPublicacion}
        className="my-1 p-2 border-2 rounded"
      />

      <button type="submit" className="my-1 p-2 bg-blue-500 text-white rounded">Enviar</button>
    </form>
  );
};

export default AgregarLibro;
