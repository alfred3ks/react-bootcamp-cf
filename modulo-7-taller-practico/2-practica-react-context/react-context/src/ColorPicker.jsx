import React from 'react';
import ThemeContext from './context/ThemeContext';
import { useContext } from 'react';

const ColorPicker = () => {

  let color = useContext(ThemeContext)

  return (
    <p>El color: {color.color} </p>
  );
}

export default ColorPicker;

/*

La variable {color} se obtiene del contexto que es donde esta definida.

*/