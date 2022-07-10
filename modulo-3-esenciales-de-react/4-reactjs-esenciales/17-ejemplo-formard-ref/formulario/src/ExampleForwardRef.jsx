import React, { forwardRef } from 'react';

// Aqui a parte de las props debemos recibir las referencia: ref
const ExampleForwardRef = (props, ref) => {

  const { label, name, id, value, onChange } = props;

  // Aqui traemos el label del formulario que esta en App() Aislamos el componente
  return (
    <div >
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// Aqui exportamos encapsulando el componente:
export default forwardRef(ExampleForwardRef);

