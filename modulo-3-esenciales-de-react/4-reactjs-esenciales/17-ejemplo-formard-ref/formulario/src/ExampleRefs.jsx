import React from 'react';
// Importamos este hooks llamado useRefs:
import { useRef } from 'react';

/*

Con el hook ref podemos usar metodos y propiedades del DOM, como este caso para el focus del input. Recuerda que react trabaja con virtual dom.

Las referencias solo las debemos usar cuando un comportamiento react no lo proporcione.

Para el caso del input y del focus react no lo proporciona.

OJO:

Usaremos una referencia solo cuando necesitemos de forma imperativa llamar a una funcion para dar un comportamiento que React no nos proporcione.

*/

export const ExampleRefs = () => {

  const inputRef = useRef(null);

  const handleFocusInput = () => {
    console.log(inputRef);

    if (inputRef) { // Si el elemento existe has el focus.
      inputRef.current.focus();
    }
  }

  return (
    <>
      <p>Example Refs</p>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocusInput}>Focus Input</button>
    </>);
}
