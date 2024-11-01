import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import IconButton from '../molecules/IconButton';
import AddIcon from '../../assets/icons/add.svg';
import { CatalogueTemplateStyles } from '../../interfaces/templates.interface';
import CircularProgress from '../atoms/CircularProgress';
import { useSelector } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../../types/navigation.type';
import PokemonFlatList from '../organisms/PokemonFlatList';

function CatalogueTemplate({ isLoading }: { isLoading: boolean }) {
  const isDarkMode = useColorScheme() === 'dark';
  const pokemons = useSelector((state: any) => state.pokemons);
  const navigation = useNavigation<ScreenNavigationProp>();

  const styles: CatalogueTemplateStyles = {
    page: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1,
      gap: 12,
    },
    buttoncontainer: {
      alignItems: 'flex-end',
    },
    nopokemons: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000',
    },
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <View style={styles.page}>
      <View style={styles.buttoncontainer}>
        <IconButton
          title="Add Pokemon"
          onPress={() => navigation.navigate('AddPokemon')}
          Image={AddIcon}
        />
      </View>
      {pokemons.length > 0 ? (
        <PokemonFlatList />
      ) : (
        <View style={styles.nopokemons}>
          <Text style={styles.text}>No Pokemons</Text>
        </View>
      )}
    </View>
  );
}

export default CatalogueTemplate;
