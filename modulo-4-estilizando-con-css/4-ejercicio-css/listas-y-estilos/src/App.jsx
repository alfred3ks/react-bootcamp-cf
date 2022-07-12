import React from "react";
import { Container } from "./components/Container";
import { Input } from "./components/Input";
import "./components/global.css";
import { HeadingH1 } from "./components/Heading";
import styled from "styled-components";
import { Comment } from "./components/Comment";
import { comments } from './data';

export const App = () => {
  return (
    <div className="App">
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
