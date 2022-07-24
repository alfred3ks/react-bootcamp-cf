import React, { useState, useEffect } from 'react';

/*

Ahora veremos como hacer una peticion a jsonplaceholder:
https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/posts

Para usar fetch no necesitamos importar nada, ya es nativo.
Para usar fetch tenemos que tener un estado, debemos importar useState()

Usaremos async await para las peticiones con la API.

*/

const GetPlaceHolder = () => {

  // Con useState validamos los estados del componente:
  const [posts, setPost] = useState([]);
  const [status, setStatus] = useState("Loading");

  // Con el useEffect cargamos la peticion a la API: Cuando cargue el componente hara la peticion
  useEffect(() => {

    async function loadPosts() {

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const newPost = await response.json()
        setPost(newPost);
        setStatus("Success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }

    loadPosts();

  }, []);

  if (status === "Loading") {
    return <div>Loading...</div>
  }
  if (status === "error") {
    return <div>Error con la conexion...</div>
  }

  return (
    <div>
      <h1>Posts Place Holder</h1>
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

export default GetPlaceHolder;