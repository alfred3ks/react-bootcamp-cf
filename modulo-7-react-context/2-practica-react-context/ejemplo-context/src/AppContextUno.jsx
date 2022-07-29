import React from 'react';
import ColorPickerUno from './ColorPickerUno';
import ThemeContext from './ThemeContext';

/*

Pero podemos enviar un objeto con diferentes valores. Estructuras mas complejas:

    <ThemeContext.Provider value={{
      color: "red"
    }}>

*/

const AppContextUno = () => {
  // Pasamos un objeto
  return (
    <ThemeContext.Provider value={
      {
        color: "Blue"
      }
    }>
      <div>
        <ColorPickerUno />
      </div>
    </ThemeContext.Provider>
  )

}

export default AppContextUno;