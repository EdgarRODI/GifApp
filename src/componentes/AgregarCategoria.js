import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AgregarCategoria = ({setCategorias}) => {

  const [input, setInput] = useState('');

  const cambiaInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim().length > 2){
      setCategorias(cats => [input, ...cats]);
      setInput('');
    }
    
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type = 'text'
        value = { input }
        onChange = { cambiaInput }
      />
    </form>
  )
}

AgregarCategoria.propTypes = {
  setCategorias: PropTypes.func.isRequired
}

export default AgregarCategoria;