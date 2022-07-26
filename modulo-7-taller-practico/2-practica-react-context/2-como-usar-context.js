/*

Vamos a ver en este ejemplo como usar context:

Debemos importar createContext.

En este ejemplo vemos como hemos creado un componente llamado ThemContext.jsx, ese componente lo podriamos guardar en una carpeta llamada context para organizar mejor la informacion.

Ese componente lo debemos exportr e importar en donde se use el contexto. Lo vemos en ColorPicker.jsx y App.jsx

Para declarar o crear un contexto:

importamos desde react createContext asi nos quedaria:

import { createContext } from 'react';

const ThemeContext = createContext();

export default ThemeContext;

Luego lo importamos en los componente donde usemos el contexto, veamos App.jsx:

import React from 'react';
import ThemeContext from './context/ThemeContext';
import ColorPicker from './ColorPicker';

Creamos la etiqueta ThemeContext.provider y emvolvemos nuestro componente:

    <ThemeContext.Provider value={{ color: 'red' }}>
      <div>
        <h1>Hello React JS</h1>
        <ColorPicker />
      </div>
    </ThemeContext.Provider>

A ese contexto le pasamos unas props que los componentes dentro podran acceder: Lo vemos como el componente ColorPicker puede acceder a esas props.

El valor que recibe value puede ser un objeto, una variable, etc. Para el caso un objeto.

*/