import React, { useContext } from 'react';
import styled from 'styled-components';
import { LinkPrimaryButton, LinkSecondaryButton } from '../collections/Buttons';
import { titleStyles } from '../collections/Styles';
import { UserContext } from '../contexts/UserContext';
import CircleImage from '../elements/CircleImage';
import Container from '../elements/Container';
import Row from '../elements/Row';
import StyledSpan from '../elements/StyledSpan';

const H1Title = styled.h1`
  ${titleStyles}
  margin: 0;
`
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  `

// const Row = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap:1rem;
// `;

const Header = ({ className }) => {

  /*
  Al tener los articulos en constext los podriamos traer aqui: Compartivos con diferentes componentes la informacion.
  */
  let articlesFromDevTo = useContext(UserContext);

  return (
    <Container>
      <header className={className}>
        <InfoContainer>
          <H1Title>Bienvenid@s, soy <StyledSpan>Alfredo Sánchez</StyledSpan>
            desarrollador web
          </H1Title>

          <Row>
            <LinkPrimaryButton>Mis Proyectos</LinkPrimaryButton>
            <LinkPrimaryButton>Descargar mi CV</LinkPrimaryButton>
          </Row>

          {/* Asi obtenemos valores que estan en context */}
          <LinkSecondaryButton>Lee mis Artículos ({articlesFromDevTo.length})</LinkSecondaryButton>

        </InfoContainer>
        <CircleImage src="/imgs/avatar.png" alt="Avatar de Alfredo Sánchez" />
      </header>
    </Container>
  )
}

/* Aqui vemos otra forma de implementar styled components */
export default styled(Header)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;

`

