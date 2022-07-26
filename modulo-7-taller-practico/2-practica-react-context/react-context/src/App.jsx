import React from 'react';
import ThemeContext from './context/ThemeContext';
import ColorPicker from './ColorPicker';

/*

Dentro de nuestro componente creamos el elemento ThemeContent.Provider, osea encerramos nuestro componente dentro de ese contexto.

*/

function App() {

  return (

    <ThemeContext.Provider value={{ color: 'red' }}>
      <div>
        <h1>Hello React JS</h1>
        <ColorPicker />
      </div>
    </ThemeContext.Provider>

  )
}

export default App
