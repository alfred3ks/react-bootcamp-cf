import { useState } from 'react';
/*

Creamos nuestro hooks personalizado. Como una funcion, que puede devolver esta funcion:
- Un componente,
- funciones,
- valores,
- arreglos,.

Como decido que y como voy a regresar? dependera de que deseamos devolver y que valores.
Para nuestro caso necesitamos que useCounter() maneje el estado:
Este hook si lo podemos usar con extension .js

*/

const useCounter = () => {

  const [value, setValue] = useState(0);

  // Funciones para incrementar y disminuir:
  const increment = () => {
    setValue(value + 1);
  }
  const decrement = () => {
    setValue(value > 0 ? value - 1 : 0);
  }

  return {
    count: value,
    onIncrement: increment,
    onDecrement: decrement
  }
}

export default useCounter;