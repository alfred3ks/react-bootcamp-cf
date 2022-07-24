import React, { useEffect, useState } from 'react';
import axios from 'axios';

/*

La API usada en este ejemplo la encontramos en:
https://app.fakejson.com

Para acceder debemos darnos de alta asi no dara un enlace con nuestro token de autentificacion.

*/

const AuthenticationAxios = () => {

  const [status, setStatus] = useState("Loading");
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    async function loadPost() {

      try {
        // Servicio para traer data falsa con un token de autentificacion:
        const response = await axios.get(
          "https://app.fakejson.com/q/RkTmawC7",
          { params: { token: "YgPfXWGNZrZYPBa9TmPVkA" } }
        );

        // const newPosts = await response.json();
        const newPosts = response.data;
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
      <h1>Posts - Authentification Axios</h1>
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

export default AuthenticationAxios;
