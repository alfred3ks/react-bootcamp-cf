import React from "react";
import { Container } from "./components/Container";
import { Input } from "./components/Input";
import "./components/Global.css";
import { HeadingH1 } from "./components/Heading";
import styled, { css } from "styled-components";
import { Comment } from "./components/Comment";
import { comments } from './data';

// Otra forma de inyectar css inline:
const GlobalStyles = css`
  margin-top: 32px;
`;

export const App = () => {
  return (
    <div className="App" css={GlobalStyles}>
      <Container>
        <HeadingH1>Comments</HeadingH1>
        <Input />
        <CommentsBody>
          {comments.map((comment, id) => {
            // return <Comment key={id} name={comment.name} body={comment.body} />
            return <Comment key={id} {...comment} />
          })}
        </CommentsBody>
      </Container>
    </div>
  );
};

const CommentsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
