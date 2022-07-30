import React from 'react';
import styled from 'styled-components';
import { titleStyles } from '../collections/styles';
import CircleImage from '../elements/CircleImage';
import Containers from '../elements/Containers';
import StyledSpan from '../elements/StyledSpan';

// Para poder pasar estilos debemos pasar un objeto className al componente:
const Header = ({ className }) => {
  return (
    <Containers>
      <header className={className}>
        <InfoContainer>
          <H1Title>Bienvenid@s, mi nombre es <StyledSpan>Alfredo Sánchez</StyledSpan> desarrollador web</H1Title>
          <Row>
            <button>Mis proyectos</button>
            <button>Descarga mi CV</button>
          </Row>
        </InfoContainer>
        <CircleImage src="/imgs/avatar.png" alt="imagen Alfredo Sánchez" />
      </header>
    </Containers >
  );
}

// Asi damos estilos al componente usando styled components:
export default styled(Header)`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;

`
//  Generamos un componentes style para el H1:
const H1Title = styled.h1`

  /* Asi podemos traer estilo globales para usarlos: */
  ${titleStyles}
  margin: 0;

`
const InfoContainer = styled.div`
  flex: 1;
`

const Row = styled.div`

  display: flex;
  flex-wrap: wrap;


`