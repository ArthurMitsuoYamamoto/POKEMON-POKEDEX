import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import AddPokemon from '../pages/AddPokemon';
import EditProfile from '../pages/EditProfile';
import { useColorScheme } from 'react-native';

const Stack = createStackNavigator();

function StackNavigator() {
  const isDarkMode = useColorScheme() === 'dark';
  const arrowColor = isDarkMode ? '#fff' : '#333';
  const styles = {
    headerStyle: {
      backgroundColor: isDarkMode ? '#333' : '#fff',
    },
    headerTitleStyle: {
      fontSize: 18,
      color: isDarkMode ? '#fff' : '#333',
    },
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddPokemon"
        component={AddPokemon}
        options={{
          headerTitle: 'Add pokemon',
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          headerTintColor: arrowColor,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: 'Edit profile',
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          headerTintColor: arrowColor,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
