import React, { useState } from 'react';

const Post = () => {

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
        iserId: 1 // Este id ahora a pelo recuerda que se puede hacer dinamico.
      }
      console.log(data);

      // Asi lo enviamos usando el metodo POST:
      const response = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(newPost), // Transforma el Objeto a string, las comunicacion HTPP deben ser de texto
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        });
      console.log(await response.json()); // Aqui vemos lo que se envia.
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

export default Post;