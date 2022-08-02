import { useContext } from "react";
import styled from "styled-components";
import Article from "../blocks/Article";
import DevChanger from "../blocks/DevChanger";
import { ThemeContext } from "../context/ThemeContext";
import { UserContextObject } from "../context/UserContextObject";
import Containers from "../elements/Containers";
import Row from "../elements/Row";

const InnerContainer = styled.div`
  background-color: ${props => props?.theme?.colors?.darkBackground || '#14213d'};
  color: ${props => props?.theme?.colors?.lightText || '#fff'};
  padding-top: 60px;
  padding-bottom: 60px;
`;

const ArticlesObject = () => {

  // Vamos a leer los articulos desde el context:
  let [user] = useContext(UserContextObject);

  // Aqui importamos el contexto del thema:
  let [theme] = useContext(ThemeContext);

  return (
    <InnerContainer theme={theme}>
      <Containers>
        <h2>Estos son mis artículos en DevTo:</h2>
        <p>{user.devToUsername}</p>
        <DevChanger />
        <Row>
          {
            user.articlesFromDevTo.map((article) => {
              return (
                <Article key={article.id} article={article}></Article>
              )
            })
          }
        </Row>
      </Containers>
    </InnerContainer>
  );
}

export default ArticlesObject;