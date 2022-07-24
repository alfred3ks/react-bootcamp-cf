import React from 'react';

const Authentication = () => {
  const posts = [
    {
      id: 1,
      title: "First Post"
    },
    {
      id: 2,
      title: "Second Post"
    },
  ]
  return (

    <div>
      <h1>Posts</h1>
      <section>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              {post.id} - {post.title}
            </article>
          )
        })}
      </section>
    </div>
  );
}

export default Authentication;