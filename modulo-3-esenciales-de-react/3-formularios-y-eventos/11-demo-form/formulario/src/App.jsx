import React from 'react';

export const App = () => {

  // Vamos a crear una funcion para evitar el comportamiento del formulario de ser enviado:
  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log('Metodo onSubmit del formulario.');
  }

  // Funcion para segundo boton:
  const handleClick = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    console.log("Hello guys!. Desde mi boton");
  }

  const msj = () => {
    console.log('Mensaje ejecutado: Hello');
  }

  return (
    <div>
      <form action="" onSubmit={(e) => {
        // Paso las funciones que desee:
        onSubmit(e);
        msj();
      }}>

        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Apellidos</label>
          <input type="text" />
        </div>

        <button>Enviar</button>

        <button onClick={(e) => { handleClick(e) }}>Send</button>
      </form>
    </div>
  )
}
