import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAxios = () => {
  // Con useState validamos los estados del componente:
  const [posts, setPost] = useState([]);
  const [status, setStatus] = useState("Loading");

  useEffect(() => {

    async function loadPosts() {

      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

        if (response.status === 200) {
          /*
          Aqui a diferencia que con fetch() tenemos que hacer la respuesta en json()
          const newPost = await response.json()
          */
          const newPost = response.data; // con axios accedemos a la respuesta directamente.
          setPost(newPost);
          setStatus("Success");
        } else {
          setStatus("error");
        }


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
      <h1>Posts Place Holder with AXIOS</h1>
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

export default GetAxios;