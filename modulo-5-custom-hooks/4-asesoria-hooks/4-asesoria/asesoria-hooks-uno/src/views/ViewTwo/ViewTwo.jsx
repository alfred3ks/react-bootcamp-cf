import React, { useState } from 'react';

const ViewTwo = () => {

  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Este no se carga cuando se carga el componente: Lo hace cuando el usuario se lo pide:
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

  return (

    <div>
      <h1>View One</h1>
      {isLoading && <p>Cargando....</p>}
      {!isLoading && pokemons?.map(pokemon => {
        return (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        )
      })}
      {error && <p>Someting went wront!!</p>}
      <button onClick={fetchPokemons}>Fetch pokemons</button>
    </div>
  );
}

export default ViewTwo;