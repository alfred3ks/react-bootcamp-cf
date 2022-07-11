import React from 'react';
import { useState, useRef } from 'react';
import { ExampleRefs } from './ExampleRefs';
import ExampleForwardRef from './ExampleForwardRef';
import { Slide, Slider } from './Slider';

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

  // Vamos a generar la referencia:
  const sliderRef = useRef(null);

  const handleSlider = (direction) => {
    console.log(direction);
    console.log(sliderRef);

    if (direction === 'next') {
      sliderRef.current.next()
    } else {
      sliderRef.current.prev()
    }
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

      <div style={{ marginTop: 50, background: "red", color: 'white' }}>
        <Slider
          ref={sliderRef}
          options={{
            slides: {
              perWiew: 1,
            }
          }}>
          <Slide>1</Slide>
          <Slide>2</Slide>
          <Slide>3</Slide>
        </Slider>
      </div>
      <button onClick={() => handleSlider('prev')}>previous</button>
      <button onClick={() => handleSlider('next')}>Next</button>
    </div>
  )
}
