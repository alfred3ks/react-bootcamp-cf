import styled from "styled-components";
import { HeadingH4 } from "./Heading";

export const Comment = (props) => {
  console.log(props.flagged);
  return (
    <StyleCommentWrapper flagged={props.flagged}>
      <HeadingH4>{props.name}</HeadingH4>
      <CommentBody>{props.body}</CommentBody>
      <span>Replies</span>
    </StyleCommentWrapper>
  )
};

// Aqui hacemos el estilo: Tambien vemos que los style components tambien pueden recibir props.
const StyleCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${(props) => {
    return props.flagged ? 'yellow' : 'white'
  }};
  gap: 4px;

  &:hover{
    background-color: #ccc;
  }
`;

const CommentBody = styled.p`
  line-height: 24px;
  color: #000;
`;
