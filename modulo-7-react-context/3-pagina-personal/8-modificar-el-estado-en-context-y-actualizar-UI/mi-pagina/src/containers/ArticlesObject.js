import { useContext } from "react";
import styled from "styled-components";
import Article from "../blocks/Article";
import DevChanger from "../blocks/DevChanger";
// import { UserContext } from "../context/UserContext";
import { UserContextObject } from "../context/UserContextObject";
import Containers from "../elements/Containers";
import Row from "../elements/Row";

const ArticlesObject = ({ className }) => {

  // Vamos a leer los articulos desde el context:
  let [user] = useContext(UserContextObject);

  return (
    <div className={className}>
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
    </div>
  );
}

export default styled(ArticlesObject)`

  /* Pasamos propiedades via props */
  background-color: ${props => props?.theme?.colors?.backgronund || '#14213d'};
  color: ${props => props?.theme?.colors?.lightText || '#fff'};
  padding-top: 60px;
  padding-bottom: 60px;

`