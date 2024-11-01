import React from 'react';
import { FlatList } from 'react-native';
import { AddPokemon } from '../../interfaces/pokemon.interface';
import { AddPokemonFlatListStyles } from '../../interfaces/organisms.interface';
import AddPokemonCard from './AddPokemonCard';

function AddPokemonFlatList({ pokemons }: { pokemons: AddPokemon[] }) {
  const styles: AddPokemonFlatListStyles = {
    contentContainer: {
      rowGap: 24,
      padding: 12,
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
  };
  return (
    <FlatList
      data={pokemons}
      renderItem={pokemon => <AddPokemonCard pokemon={pokemon} />}
      keyExtractor={pokemon => pokemon.name}
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
}

export default AddPokemonFlatList;
