import React, { useEffect, useState } from 'react';

/*

La API usada en este ejemplo la encontramos en:
https://app.fakejson.com

Para acceder debemos darnos de alta asi no dara un enlace con nuestro token de autentificacion.

*/

const Authentication2 = () => {

  const [status, setStatus] = useState("Loading");
  const [posts, setPosts] = useState([]);

  const URL = "https://app.fakejson.com/q/RkTmawC7?token=YgPfXWGNZrZYPBa9TmPVkA";

  useEffect(() => {

    async function loadPost() {

      try {
        // Servicio para traer data falsa con un token de autentificacion:
        const response = await fetch(URL);

        const newPosts = await response.json();
        setPosts(newPosts);
        setStatus("Success")
      } catch (error) {
        console.error(error);
        setStatus(error)
      }
    }

    loadPost();

  }, []);

  if (status === "Loading") return <div>Loading!!!</div>;
  if (status === "error") return <div>Error</div>;

  return (

    <div>
      <h1>Posts - Authentification FAKEJSON</h1>
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

export default Authentication2;