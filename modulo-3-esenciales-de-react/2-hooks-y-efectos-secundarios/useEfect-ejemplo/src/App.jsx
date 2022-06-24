import { useState, useEffect } from 'react';
import { Clock } from './Clock';

/*
Uso de useEfect()
*/

// Este es un hook personalizado:
function useTime() {
  const [time, setTime] = useState(() => new Date());

  {/* Aqui vemos el use efect. */ }

  useEffect(() => {
    console.log("useEfect ejecutado.");
    const id = setInterval(() => {
      console.log("setinterval ejecutado.");
      setTime(new Date());
    }, 1000);

    // Esto es necesario cada vez que se usa un setInterval()
    return () => clearInterval(id);
  }, []);

  return time;
}

// Aqui tenemos nuestro componente App:
export function App() {
  const time = useTime(); { /* Esto es un hook personalizado. */ }
  const [color, setColor] = useState('lightcoral');

  // Aqui vemos como usar useEfect() el log se ejecutara cada vez que se ejecute la funcion, se lo decimos en el arrays de dependecias: Como vemos cada ves que cambia el tiempo emite un msg.
  useEffect(() => {
    // console.log(time);
  }, [time])

  // Ahora vamos a ver con el color cada vez que cambiemos el color nosotros:
  useEffect(() => {
    // console.log(color);
  }, [color, time])


  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />

      <SelectorColor />
    </div>
  );
}

function SelectorColor() {

  const time = useTime(); { /* Esto es un hook personalizado. */ }
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}

