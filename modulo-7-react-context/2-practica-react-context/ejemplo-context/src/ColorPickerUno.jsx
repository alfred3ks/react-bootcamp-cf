import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ColorPickerUno = () => {

  // Agregando con useContext podemos leer lo que nos viene por el contexto creado. En el caso es un string.
  const color = useContext(ThemeContext)

  return (
    <div>
      <h1>Color picker Objeto</h1>
      <div>
        El Color: {color.color}
      </div>
    </div>
  );
}

export default ColorPickerUno;