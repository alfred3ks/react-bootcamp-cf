import React from 'react';
import useFetchPokemons from '../../hooks/useFetchPokemons';

const ViewTwoCopy = () => {

  // Aqui llamamos a nuestro custom hook:
  const { pokemons, error, isLoading, onFetchPokemons } = useFetchPokemons()

  return (

    <div>
      <h1>Pokemons View Two</h1>
      {isLoading && <p>Cargando....</p>}
      {!isLoading && pokemons?.map(pokemon => {
        return (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        )
      })}
      {error && <p>Someting went wront!!</p>}
      <button onClick={onFetchPokemons}>Fetch pokemons</button>
    </div>
  );
}

export default ViewTwoCopy;