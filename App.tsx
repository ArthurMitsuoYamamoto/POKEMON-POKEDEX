import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import StackNavigator from './src/components/system/StackNavigator';
import { store } from './src/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
