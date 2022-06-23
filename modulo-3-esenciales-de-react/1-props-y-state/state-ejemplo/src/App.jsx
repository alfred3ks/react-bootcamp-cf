import { useState } from 'react';
import '../src/css/styles.css'

// Componente App:
export function App() {
  return (
    <div>
      <div className='flex'>
        <Counter />
        <Counter />
        <Counter />
      </div>

      <Agregar />
    </div>

  );
}


// Aqui implementamos el hooks de estado:
function Counter() {
  /*
  Asi implementamos el hook.
  const [score, setScore] = useState(0);

  El valor que le pasamos a useState() es el valor que tendra el estado por default, ahora es cero.
  Ahora del lado isquierdo const [score, setScore] tenemos lo que es un arrays destructuring.

  Por lo visto el valor que le pasamos al useState() por parametro es el que asigna al primer valor del array destructuring. En este caso score.

  Ahora el segundo valor de ese array sera una funcion que es la que hara que cambie el estado unicial.

  useState es una funcion que al invocarla tiene 2 valores: Es como esto:

function useState(score) {
    setScore(score);
};

let contador;
let setScore = (score) => {
    contador = score += 1;
}

Algo asi mas o menos.
A useState() puede recibir cualquier valor, on objeto, un array, un primitivo, etc. Como lo vemos en el ejemplo:
  const [fruits, setFruits] = useState([
    {
      id:1,
      text:manzana
    },
    {
      id:2,
      text:pera
    },
    {
      id:3,
      text:uva
    },
  ])

  Lo vemos en el componente creado Agregar.

  */

  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  // Esto tambien cambiamos el estado de css con el hook:
  let className = 'counter ';
  if (hover) {
    className += ' hover hover-h1';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add +
      </button>

    </div>
  );
}



// Me creo un componente para agregar a una lista otro elemento:
function Agregar() {
  const [hover, setHover] = useState(false);
  const [fruits, setFruits] = useState([
    {
      id: 1,
      text: "Manzana"
    },
    {
      id: 2,
      text: "Pera"
    },
    {
      id: 3,
      text: "Uva"
    },
  ])

  // Esto tambien cambiamos el estado de css con el hook:
  let className = 'counter ';
  if (hover) {
    className += ' hover hover-h1';
  }

  return (
    <div>
      <div
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <h1>Listado de frutas</h1>
        <button onClick={() => {
          const aux = [...fruits, { id: 4, text: "Durazno" }]
          setFruits(aux)
        }}>
          Add +
        </button>
      </div>
      <ul>
        {fruits.map(fruit => {
          return <li key={fruit.id}>{fruit.text}</li>
        })}
      </ul>

    </div>
  );
}

