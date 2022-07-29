import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ColorPickerDos = () => {

  // Agregando con useContext podemos leer lo que nos viene por el contexto creado. En el caso es un string.
  // Asi cuando recibimos el estado, desestructuring:
  const [color, setColor] = useContext(ThemeContext)

  return (
    <div>
      <h1>Color Picker cambiar estado</h1>
      <input type="color"
        onChange={
          (e) => {
            setColor(e.target.value)
          }
        } />
      <div>
        El color: {color}
      </div>
      <div
        style={
          {
            width: 100,
            height: 100,
            backgroundColor: color
          }
        }></div>
    </div>
  );
}

export default ColorPickerDos;