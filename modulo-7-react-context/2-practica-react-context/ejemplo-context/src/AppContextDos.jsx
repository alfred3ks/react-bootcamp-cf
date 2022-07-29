import React, { useState } from 'react';
import ColorPickerDos from './ColorPickerDos';
import ThemeContext from './ThemeContext';

/*

Ahora vemos que ya podemos pasar un contexto global que leeran nuestros componentes ahora si quiseramos cambiar el contexto. Debemos que implementar useState(). Como lo vemos arriba:

// Para cambiar el valos del contexto usamos useState()
  const [color, setColor] = useState('red');

  Le pasamos el provider ambos valores:
  <ThemeContext.Provider value={ [ color, setColor] }>

*/

const AppContextDos = () => {

  // Para cambiar el valos del contexto usamos useState()
  const [color, setColor] = useState('red');

  return (
    <ThemeContext.Provider value={[color, setColor]}>
      {/* Guardamos ambos en es estado, el valor y el metodo */}
      <div>
        <ColorPickerDos />
      </div>
    </ThemeContext.Provider>
  )

}

export default AppContextDos;