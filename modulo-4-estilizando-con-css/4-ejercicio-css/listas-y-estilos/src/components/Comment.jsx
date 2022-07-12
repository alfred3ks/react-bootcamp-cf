import styled from "styled-components";
import { HeadingH4 } from "./Heading";

export const Comment = (props) => {
  return (
    <StyleCommentWrapper>
      <HeadingH4>{props.name}</HeadingH4>
      <CommentBody>{props.body}</CommentBody>
      <span>Replies</span>
    </StyleCommentWrapper>
  )
};

// Aqui hacemos el estilo:
const StyleCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CommentBody = styled.p`
  line-height: 24px;
  color: #000;
`;
