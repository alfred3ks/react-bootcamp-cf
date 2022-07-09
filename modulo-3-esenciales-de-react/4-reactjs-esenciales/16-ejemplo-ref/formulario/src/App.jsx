import React from 'react';
import { useState } from 'react';
import { ExampleRefs } from './ExampleRefs';

export const App = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  // Vamos a crear una funcion para evitar el comportamiento del formulario de ser enviado:
  const onSubmit = (e) => {
    // console.log(e);
    e.preventDefault();
    console.log(`onSubmit: nombre: ${name}, apellido: ${lastName}`);
    setName('');
    setLastName('');
  }

  // Funcion para segundo boton:
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Hello guys!. Desde mi boton");
  }

  return (
    <div>
      <form action="" onSubmit={(e) => {
        // Paso las funciones que desee:
        onSubmit(e);
      }}>

        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>

        <div>
          <label htmlFor="">Apellidos</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </div>

        <button>Enviar</button>

        <button onClick={(e) => { handleClick(e) }}>Send</button>
      </form>
      <ExampleRefs />
    </div>
  )
}
