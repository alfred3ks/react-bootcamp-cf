import styled from "styled-components";
import Article from "../blocks/Article";
import Containers from "../elements/Containers";
import devto from "../mocks/devto";

const Articles = ({ className }) => {
  return (
    <div className={className}>
      <Containers>
        <h2>Estos son mis artículos en DevTo:</h2>
        {
          devto.map((article) => {
            return (
              <Article key={article.id} article={article}></Article>
            )
          })
        }
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