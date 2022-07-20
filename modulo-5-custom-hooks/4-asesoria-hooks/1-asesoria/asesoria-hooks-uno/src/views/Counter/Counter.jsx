import React, { useState } from 'react';

const Counter = () => {

  // Aqui implementamos el hooks de useState():
  const [value, setValue] = useState(0);

  // Funciones para incrementar y disminuir:
  const increment = () => {
    setValue(value + 1);
  }
  const decrement = () => {
    setValue(value > 0 ? value - 1 : setValue(0));
  }

  return (

    <div>
      <h2>Counter</h2>
      <div>
        <p>{value}</p>
        <button onClick={increment}>Sumar</button>
        <button onClick={decrement}>Restar</button>
      </div>


    </div>);
}

export default Counter;

