import styled from 'styled-components';
import { LinkSecondaryButton } from '../collections/Buttons';

const Article = ({ className, article }) => {
  return (
    <div className={className}>
      <img src={article.social_image} alt={article.title} />
      <div>
        <h3>{article.title}</h3>
        <LinkSecondaryButton href={article.url}>Leer más...</LinkSecondaryButton>
      </div>
    </div>
  )

}

export default styled(Article)`

  box-shadow: 0px 0px 12px rgba(0,0,0,0.1);
  border: 1px solid #e6e6e6;
  width: min(300px, 100%);

  img {
    width: 100%;
  }

  div {
    padding: 1.5rem;
  }

  h3 {
    margin: 0;
    margin-bottom: 0.5rem;
  }

`