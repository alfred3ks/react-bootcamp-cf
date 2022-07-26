import React from 'react';
import ThemeContext from './context/ThemeContext';
import ColorPicker from './ColorPicker';
import { useState } from 'react';

/*

Dentro de nuestro componente creamos el elemento ThemeContent.Provider, osea encerramos nuestro componente dentro de ese contexto.

*/

function AppModValorContext() {

  // Vamos a cambiar el estado del color:
  let [color, setColor] = useState('red');

  const style = {
    backgroundColor: color,
    width: 100,
    height: 100
  }

  return (

    <ThemeContext.Provider value={[color, setColor]}>
      <div>
        <h1>Color Picker React Context</h1>
        <ColorPicker />
        <div style={style}></div>
      </div>
    </ThemeContext.Provider>

  )
}

export default AppModValorContext
