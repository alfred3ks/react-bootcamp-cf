import { useContext } from "react";
import styled from "styled-components";
import Article from "../blocks/Article";
import { UserContext } from "../context/UserContext";
import Containers from "../elements/Containers";
import Row from "../elements/Row";
// import devto from "../mocks/devto";

const Articles = ({ className }) => {

  // Vamos a leer los articulos desde el context, no directamente:
  let articlesFromDevTo = useContext(UserContext);
  console.log(articlesFromDevTo);

  return (
    <div className={className}>
      <Containers>
        <h2>Estos son mis artículos en DevTo:</h2>
        <Row>
          {
            articlesFromDevTo.map((article) => {
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

export default styled(Articles)`

  /* Pasamos propiedades via props */
  background-color: ${props => props?.theme?.colors?.backgronund || '#14213d'};
  color: ${props => props?.theme?.colors?.lightText || '#fff'};
  padding-top: 60px;
  padding-bottom: 60px;

`