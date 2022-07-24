import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Podriamos tener esta configuracion externa en un archivo: axiosconfig.js
axios.defaults.baseURL = ("https://api.thecatapi.com/v1");
axios.defaults.headers.common["X-Api-Key"] = "27a5c999-8a4d-4085-951a-bbdc0c23fb6e";

/*

La API usada en este ejemplo la encontramos en:
https://api.thecatapi.com
https://docs.thecatapi.com/
https://docs.thecatapi.com/api-reference/categories/categories-list

*/

const AuthenticationAxiosHeader = () => {

  const [status, setStatus] = useState("Loading");
  const [cats, setCats] = useState([]);


  useEffect(() => {

    async function loadCats() {

      try {
        const response = await axios.get("/categories");

        // const newCats = await response.json();
        const newCats = response.data;
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
      <h1>CATS AXIOS</h1>
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

export default AuthenticationAxiosHeader;
