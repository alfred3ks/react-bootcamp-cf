import React, { useContext } from 'react';
import styled from 'styled-components';
import { LinkPrimaryButton, LinkSecondaryButton } from '../collections/Buttons';
import { titleStyles } from '../collections/styles';
import CircleImage from '../elements/CircleImage';
import Containers from '../elements/Containers';
import StyledSpan from '../elements/StyledSpan';
import Row from '../elements/Row';
// import { UserContext } from '../context/UserContext';
import { UserContextObject } from '../context/UserContextObject';

// Para poder pasar estilos debemos pasar un objeto className al componente:
const HeaderObject = ({ className }) => {

  // Ahora vamos a leer tambien desde el contexto: Asi compartimos la informacion entre distintos componentes:
  let [user] = useContext(UserContextObject);

  return (
    <Containers>
      <header className={className}>
        <InfoContainer>
          <H1Title>Bienvenid@s, mi nombre es <StyledSpan>Alfredo Sánchez</StyledSpan> desarrollador web</H1Title>
          <Row>
            <LinkPrimaryButton>Mis proyectos</LinkPrimaryButton>
            <LinkPrimaryButton>Descarga mi CV</LinkPrimaryButton>
          </Row>
          <LinkSecondaryButton>lee mis artìculos ({user.articlesFromDevTo.length})</LinkSecondaryButton>
        </InfoContainer>
        <CircleImage src="/imgs/avatar.png" alt="imagen Alfredo Sánchez" />
      </header>
    </Containers >
  );
}

// Asi damos estilos al componente usando styled components:
export default styled(HeaderObject)`
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
  display: flex;
  flex-direction: column;
  gap:2rem;
`

/*
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

*/