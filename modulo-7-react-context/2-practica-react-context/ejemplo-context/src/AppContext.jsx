import React from 'react';
import ColorPicker from './ColorPicker';
import ThemeContext from './ThemeContext';

/*
Lo primero para usar context debemos importar createContex de react. Lo vemos en la cabecera. Con el es con lo que vamos a generar el contexto.
*/

// Vamos a crear un contexto:
// ThemeContext es un nombre arbitrario.

// const ThemeContext = createContext(); Lo importamos desde ThemeContext.js

/*
Para utilizar ese contexto ya creado dentro del componente o app tenemos que utilizar un componente que es parte del objeto que hemos creado ThemeContext. Envolvemos nuestro componente:

  <ThemeContext.Provider>

    Aqui nuestro componente que ahora tiene un contexto...

  </ThemeContext.Provider>

Con esto todos los componentes que esten dentro tienen un contexto a traves del Provider.

Ahora por medio del atributo value podemos pasar los valores que quereamos, bien sea un string o elelentos mas complejos como un objeto. etc.

mmmm esto del provider debemos verlo mejor en la documentacion ya que no se profundiza mucho aqui.
*/

const AppContext = () => {

  // Pasamos un valor por defecto string
  return (
    <ThemeContext.Provider value="red">
      <div>
        <ColorPicker />
      </div>
    </ThemeContext.Provider>
  )

}

export default AppContext

/*

Al pasarle un atributo como el caso value = "red", el valor que esta guardando el contexto es ese string que le estamos pasando.

Para leer ese valor desde un componente. En el caso de un componente debemos usar el hook useContext. Lo vemos en el componente ColorPicker.js

Veremos que hemos creado un archivo para ahi agregar el contexto y asi poderlos importar a cualquier componente.

El valor que enviamos e por context puede ser como en primera instancia un string:

<ThemeContext.Provider value="red">

*/