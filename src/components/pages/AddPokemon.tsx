import React, { useEffect } from 'react';
import { GetPokemonsFromAPI } from '../../api/pokemon';
import AddPokemonTemplate from '../templates/AddPokemonTemplate';
import { AddPokemon as AddPokemonInterface } from '../../interfaces/pokemon.interface';

function AddPokemon() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [pokemons, setPokemons] = React.useState<AddPokemonInterface[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonsFetch = await GetPokemonsFromAPI();
        setPokemons(pokemonsFetch);
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <AddPokemonTemplate
      isLoading={isLoading}
      pokemons={pokemons}
      error={error}
    />
  );
}

export default AddPokemon;
