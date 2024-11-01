import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import CircularProgress from '../atoms/CircularProgress';
import AddPokemonFlatList from '../organisms/AddPokemonFlatList';
import { AddPokemon } from '../../interfaces/pokemon.interface';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function AddPokemonTemplate({
  isLoading,
  pokemons,
  error,
}: {
  isLoading: boolean;
  pokemons: AddPokemon[];
  error: boolean;
}) {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = {
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
  };

  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Text>There was an error fetching the pokemons.</Text>;
  }

  return (
    <View style={styles.container}>
      <AddPokemonFlatList pokemons={pokemons} />
    </View>
  );
}

export default AddPokemonTemplate;
