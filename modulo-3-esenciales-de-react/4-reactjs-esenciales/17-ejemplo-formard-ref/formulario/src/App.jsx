import React from 'react';
import { useState, useRef } from 'react';
import { ExampleRefs } from './ExampleRefs';
import ExampleForwardRef from './ExampleForwardRef';

export const App = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  // Ahora vamos a hacer la referencia sobre el input:
  const nameInputRef = useRef(null);


  // Vamos a crear una funcion para evitar el comportamiento del formulario de ser enviado:
  const onSubmit = (e) => {
    // console.log(e);
    e.preventDefault();
    console.log(`onSubmit: nombre: ${name}, apellido: ${lastName}`);
    nameInputRef.current.focus(); // Aqui enfocamos al input, gracias a la referencia.
    console.log(nameInputRef);
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

        <ExampleForwardRef
          // asignamos la referencias:
          ref={nameInputRef}
          label="Nombre"
          id="name"
          value={name}
          name={name}
          onChange={(e) => { setName(e.target.value) }}
        />

        <ExampleForwardRef
          label="Apellido"
          id="lastName"
          value={lastName}
          name={lastName}
          onChange={(e) => { setLastName(e.target.value) }}
        />

        <button>Enviar</button>

        <button onClick={(e) => { handleClick(e) }}>Send</button>
      </form>
      <ExampleRefs />
    </div>
  )
}
