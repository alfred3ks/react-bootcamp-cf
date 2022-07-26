import React from 'react';
import ThemeContext from './context/ThemeContext';
import { useContext } from 'react';

const ColorPicker = () => {

  let [color, setColor] = useContext(ThemeContext);

  return (
    <div>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value)
        }} />
      <p>El color: {color} </p>
      <div value={color}></div>
    </div>
  );
}

export default ColorPicker;

/*

La variable {color} se obtiene del contexto que es donde esta definida.

*/