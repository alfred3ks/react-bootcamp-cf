import React from 'react';
import useCounter from '../../hooks/useCounter';

const Counter = () => {

  // Aqui inplemntamos nuestro hooks:
  const { count, onIncrement, onDecrement } = useCounter();

  return (
    <div>
      <h2>Counter custom hooks</h2>
      <div>
        <p>{count}</p>
        <button onClick={onIncrement}>Sumar</button>
        <button onClick={onDecrement}>Restar</button>
      </div>


    </div>);
}

export default Counter;

