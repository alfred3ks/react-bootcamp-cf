import React, { useEffect } from 'react';
import useFetchPokemons from '../../hooks/useFetchPokemons';


const ViewOneCopy = () => {

  // Aqui implementamos nuestro custom hook:
  const { pokemons, error, isLoading, onFetchPokemons } = useFetchPokemons()

  // Con useEffect() cargamos el pokemon al cargar el componente:
  useEffect(() => {
    onFetchPokemons().catch(null);
  }, [])

  return (

    <div>
      <h1>Pokemons</h1>
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

export default ViewOneCopy;
