import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import { CounterTemplateStyles } from '../../interfaces/templates.interface';

function CounterTemplate() {
  const pokemons = useSelector((state: any) => state.pokemons);
  const isDarkMode = useColorScheme() === 'dark';

  const styles: CounterTemplateStyles = {
    container: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      fontWeight: '800',
      color: isDarkMode ? Colors.white : Colors.black,
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {pokemons.length > 0
          ? `There are ${pokemons.length} pokemons in the catalogue.`
          : 'There are no pokemons in the catalogue.'}
      </Text>
    </View>
  );
}

export default CounterTemplate;
