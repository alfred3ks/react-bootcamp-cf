import React, { useState } from 'react';
import axios from 'axios';

// Podriamos tener esta configuracion externa en un archivo: axiosconfig.js
axios.defaults.baseURL = ("https://jsonplaceholder.typicode.com");
axios.defaults.headers.post["Content-type"] = "application/json; charset=UTF-8"

const PostAxios = () => {

  const [isLoading, setIsLoading] = useState(false);

  async function createPost(e) {
    e.preventDefault();
    setIsLoading(true);

    // Asi capturamos valores del formulario:
    try {
      const form = e.currentTarget;
      const newPost = {
        title: form.title.value,
        body: form.body.value,
        iserId: 1
      }

      // Asi lo enviamos usando el metodo POST:
      const response = await axios.post("/posts", newPost);
      console.log(response);

      form.reset(); // reset al contenido del formulario

    } finally {
      setIsLoading(false) // Esto lo que hace es habilitar/desabilitar el boton durante la consulta.
    }
  }

  return (

    <div>
      <h1>Create a new POST</h1>
      <form onSubmit={createPost}>
        <div>
          <label htmlFor="title">Titulo</label>
          <input id='title' name='title' type="text" />
        </div>
        <div>
          <label htmlFor="body">Contenido</label>
          <textarea id='body' name='body' />
        </div>
        <button disabled={isLoading}>Crear</button>
      </form>
    </div>

  );
}

export default PostAxios;