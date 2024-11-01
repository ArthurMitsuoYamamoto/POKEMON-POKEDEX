import React from 'react';
import { FlatList } from 'react-native';
import { AddPokemonFlatListStyles } from '../../interfaces/organisms.interface';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { useSelector } from 'react-redux';

function PokemonFlatList() {
  const pokemons: Pokemon[] = useSelector((state: any) => state.pokemons);
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
      renderItem={pokemon => <PokemonCard pokemon={pokemon.item} />}
      keyExtractor={pokemon => pokemon.name}
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
}

export default PokemonFlatList;
