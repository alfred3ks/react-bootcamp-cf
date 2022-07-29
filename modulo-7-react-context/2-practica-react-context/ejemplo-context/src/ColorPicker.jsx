import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ColorPicker = () => {

  // Agregando con useContext podemos leer lo que nos viene por el contexto creado. En el caso es un string.
  const color = useContext(ThemeContext)


  return (
    <div>
      <h1>Color picker string</h1>
      <div>
        El color: {color}
      </div>
    </div>
  );
}

export default ColorPicker;