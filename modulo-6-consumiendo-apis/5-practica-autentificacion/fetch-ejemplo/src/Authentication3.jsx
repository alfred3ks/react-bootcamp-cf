import React, { useEffect, useState } from 'react';

/*

La API usada en este ejemplo la encontramos en:
https://api.thecatapi.com
https://docs.thecatapi.com/
https://docs.thecatapi.com/api-reference/categories/categories-list

*/

const Authentication3 = () => {

  const [status, setStatus] = useState("Loading");
  const [cats, setCats] = useState([]);

  const URL = "https://api.thecatapi.com/v1/categories";
  // Esto lo normal es tenerlo en una variable de entorno: OJO.
  const API_TOKEN = "27a5c999-8a4d-4085-951a-bbdc0c23fb6e";

  useEffect(() => {

    async function loadCats() {

      try {
        // Servicio para traer data falsa con un token de autentificacion:
        const response = await fetch(URL, {
          method: "GET",
          headers: {
            "X-Api-Key": API_TOKEN // Aqui enviamos nuestro token
          }
        });

        const newCats = await response.json();
        setCats(newCats);
        setStatus("Success")
      } catch (error) {
        console.error(error);
        setStatus(error)
      }
    }

    loadCats();

  }, []);

  if (status === "Loading") return <div>Loading!!!</div>;
  if (status === "error") return <div>Error</div>;

  return (

    <div>
      <h1>Authentification CATS</h1>
      <section>
        {cats.map((cat) => {
          return (
            <article key={cat.id}>
              {cat.id} - {cat.name}
            </article>
          )
        })}
      </section>
    </div>
  );
}

export default Authentication3;