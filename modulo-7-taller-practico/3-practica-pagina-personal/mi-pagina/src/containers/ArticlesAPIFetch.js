import React, { useContext } from 'react'
import styled from 'styled-components';
import Article from '../blocks/Article';
// import { UserContext } from '../contexts/UserContext';
import Container from '../elements/Container';
import Row from '../elements/Row';
import { UserContextFetch } from '../contexts/UserContextFetch';
import DevChanger from '../blocks/DevChanger';

// Estos articulos viene de hacer fetch a la API
const ArticlesAPIFetch = ({ className }) => {

  let [user] = useContext(UserContextFetch);
  console.log(user.articlesFromDevTo);
  return (
    <div className={className}>
      <Container>
        <h2>Estos son mis articulos en Dev.to:</h2>
        <p>{user.devToUsername}</p>
        <DevChanger />
        <Row>
          {
            user.articlesFromDevTo.map((article) => {
              return (
                <Article article={article} key={article.id} />
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default styled(ArticlesAPIFetch)`

  background-color: ${(props) => {
    return props?.theme?.colors?.background || "#14213d"
  }};
  color: ${(props) => {
    return props?.theme?.colors?.lightText || "#fff"
  }};

  padding-top: 60px;
  padding-bottom: 60px;

`;
