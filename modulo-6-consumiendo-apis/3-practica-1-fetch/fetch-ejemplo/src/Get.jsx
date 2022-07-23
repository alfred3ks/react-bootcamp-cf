import React from 'react';

// Aqui tenemos nuestro primer ejemplo como hacer una peticion get:
// Esta es la base la peticion la hacemos sobre un objeto.

const Get = () => {
  const posts = [
    {
      id: 1,
      title: "First Post"
    },
    {
      id: 2,
      title: "Second Post"
    }
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

export default Get; <div></div>