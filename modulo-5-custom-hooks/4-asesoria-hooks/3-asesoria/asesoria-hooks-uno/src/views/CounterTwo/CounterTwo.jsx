import React from 'react';
import useCounter from '../../hooks/useCounter';

const CounterTwo = () => {

  // Ahora en este contador vemos como implementamos nuestro custom hook:
  // OJO las variables tienen que ser las mismas del custom hook:
  const { count, onIncrement, onDecrement } = useCounter();

  /*
  Puede darse el caso que queramos por ejemplo poner 2 contadores, pues no podriamos hacer el destructoring lo tendriamos que hacer asi:

  const counter1 = useCounter()
  const counter2 = useCounter()

  Y cuando vayamos a usar las variables del count, onIncrement, onDecrement lo hariamos:

  counter1.count, counter1.onIncrement, counter1.onDecrement
  counter2.count, counter2.onIncrement, counter2.onDecrement

  */

  return (

    <div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eaque sint rerum, quam voluptas tenetur facilis odit dolores molestias reiciendis sit itaque minima libero, natus perferendis dolor repellat dignissimos facere.</p>
        <img src="https://dummyimage.com/600x400/000/fff" alt="" />
      </div>

      <div>
        <h2>{count}</h2>
        <button onClick={onIncrement}>Previous</button>
        <button onClick={onDecrement}>Next</button>
      </div>

    </div>

  );
}

export default CounterTwo;