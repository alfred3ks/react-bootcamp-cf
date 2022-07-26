import React, { useContext } from 'react'
import styled from 'styled-components';
import Article from '../blocks/Article';
import { UserContext } from '../contexts/UserContext';
import Container from '../elements/Container';
import Row from '../elements/Row';
// import devto from '../mocks/devto'

const ArticlesContext = ({ className }) => {
  // console.log(devto);

  let articlesFromDevTo = useContext(UserContext);
  return (
    <div className={className}>
      <Container>
        <h2>Estos son mis articulos en Dev.to:</h2>
        <Row>
          {
            articlesFromDevTo.map((article) => {
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

export default styled(ArticlesContext)`

  background-color: ${(props) => {
    return props?.theme?.colors?.background || "#14213d"
  }};
  color: ${(props) => {
    return props?.theme?.colors?.lightText || "#fff"
  }};

  padding-top: 60px;
  padding-bottom: 60px;

`;
