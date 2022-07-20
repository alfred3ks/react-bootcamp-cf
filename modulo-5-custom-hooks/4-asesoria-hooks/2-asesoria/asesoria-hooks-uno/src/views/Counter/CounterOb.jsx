import React, { useState } from 'react'

const CounterObj = () => {
  // Podemos tambien a useState() pasarle un objeto:
  const [value, setValue] = useState(
    {
      count: 0,
      name: 'Contador usando useState',
      dev: {
        pais: '',
        calle: '',
        piso: ''
      }
    }
  )

  // Funciones para incrementar y disminuir con el objeto:
  const increment = () => {
    setValue({ count: value.count + 1 });
  }
  const decrement = () => {

    if (value.count > 0) {
      setValue({ count: value.count - 1 })
    } else {
      setValue({ count: 0 })
    }
  }

  return (
    <div>
      <h2>Contador usando useState()</h2>
      <div>
        <p>{value.count}</p>
        <button onClick={increment}>Sumar</button>
        <button onClick={decrement}>Restar</button>
      </div>

    </div>);
}

export default CounterObj;

/*

Notas:
El condicional if tambien lo podemos hacer usando el operador ternario:
setValor(valor.count > 0 ? setValor({ count: valor.count - 1 }) : setValor({ count: 0 }));

Cuando trabajamos con objetos {}, react solo actualiza los datos de primer nivel, si tenemos mas objetos anidados estos no se actualizaran. Osea el estado de esas propiedades no se modificara. Solo lo hara de las de primer nivel. React solo revisa los keys principales. Asi si trabajamos con objetos lo recomendable es usar solo un nivel.

*/