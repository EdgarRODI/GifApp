import React, { useState } from 'react';
import AgregarCategoria from './componentes/AgregarCategoria';
import { GifGrid } from './componentes/GifGrid';

const GifExpertApp = () => {

  const [categorias, setCategorias] = useState(['Chivas']);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AgregarCategoria setCategorias = { setCategorias } />
      <hr></hr> 

      <ol>
        {
          categorias.map( categoria => (
            <GifGrid 
              key = { categoria }
              categoria = { categoria }
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;