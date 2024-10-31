import * as React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { PokemonManager } from '../pages/Manager/PokemonManager';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="PokemonManager" component={PokemonManager} />
    </Stack.Navigator>
  );
}
