import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { moveFromApi, typeFromApi } from '../types/pokemon.type';
import { Pokemon } from '../interfaces/pokemon.interface';

export const GetPokemons = async () => {
  try {
    const pokemons = await AsyncStorage.getItem('pokemons');
    if (pokemons !== null) {
      const pokemonsData = JSON.parse(pokemons);
      return pokemonsData;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
};

export const GetPokemonsFromAPI = async () => {
  try {
    const reponse = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20',
    );
    return reponse.data.results;
  } catch (error) {
    return error;
  }
};

export const GetPokemonInfoFromAPI = async (url: string) => {
  try {
    const response = await axios.get(url);
    const lastFiveMoves = response.data.moves
      .slice(-5)
      .map((move: moveFromApi) => move.move.name);
    const types = response.data.types.map(
      (type: typeFromApi) => type.type.name,
    );
    const pokemon: Pokemon = {
      name: response.data.name,
      types,
      moves: lastFiveMoves,
    };
    return pokemon;
  } catch (error) {
    return error;
  }
};

export const SavePokemon = async (pokemon: Pokemon) => {
  const pokemons = await GetPokemons();

  if (pokemons !== null) {
    if (
      pokemons.filter((poke: Pokemon) => poke.name === pokemon.name).length > 0
    ) {
      throw new Error('Pokemon already saved!');
    } else {
      const newPokemons = [...pokemons, pokemon];
      await AsyncStorage.setItem('pokemons', JSON.stringify(newPokemons));
    }
  } else {
    await AsyncStorage.setItem('pokemons', JSON.stringify([pokemon]));
  }

  const pokemonsSaved = await GetPokemons();
  return pokemonsSaved;
};

export const DeletePokemon = async (pokemon: Pokemon) => {
  const pokemons = await GetPokemons();
  if (pokemons !== null) {
    const newPokemons = pokemons.filter(
      (poke: Pokemon) => poke.name !== pokemon.name,
    );
    await AsyncStorage.setItem('pokemons', JSON.stringify(newPokemons));
  }
  const pokemonsSaved = await GetPokemons();
  return pokemonsSaved;
};
