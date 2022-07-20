import React, { useEffect, useState } from 'react';

const ViewOne = () => {

  // Implementamos el hook de useState()
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Con useEffect() cargamos el pokemon al cargar el componente:
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemons(data.results);
      }
      catch (error) {
        console.error(error);
        setPokemons([]);
        setError(error);
      }
      finally {
        setIsLoading(false);
      }
    }

    // Llamamos la funcion:
    fetchPokemons().catch(null);

  }, [])

  return (

    <div>
      <h1>View One Pokemons</h1>
      {isLoading && <p>Cargando....</p>}
      {!isLoading && pokemons?.map(pokemon => {
        return (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        )
      })}
      {error && <p>Someting went wront!!</p>}
    </div>
  );
}

export default ViewOne;
