import React from 'react';
import styled from 'styled-components';
import Containers from '../elements/Containers';

// Para poder pasar estilos debemos pasar un objeto className al componente:
const Header = ({ className }) => {
  return (
    <Containers>
      <header className={className}>
        <div>
          <h1>Bienvenid@s, mi nombre es Alfredo Sánchez</h1>
        </div>
        <img src="/imgs/avatar.png" alt="imagen Alfredo Sánchez" />
      </header>
    </Containers>
  );
}

// Asi damos estilos al componente usando styled components:
export default styled(Header)`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    width: 250px;
    height: 250px;
  }

`