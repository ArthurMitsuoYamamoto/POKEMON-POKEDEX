import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../pages/Profile';
import Catalogue from '../pages/Catalogue';
import Counter from '../pages/Counter';
import ProfileIcon from '../../assets/icons/profile.svg';
import PokeballIcon from '../../assets/icons/pokeball.svg';
import CounterIcon from '../../assets/icons/counter.svg';
import { Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

export default function Tabs(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = {
    text: {
      fontSize: 12,
      marginBottom: 6,
    },
    textFocused: {
      fontSize: 12,
      fontWeight: '600',
      color: '#2c6bed',
      marginBottom: 6,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: isDarkMode
          ? Colors.darker
          : Colors.lighter,
        tabBarInactiveBackgroundColor: isDarkMode
          ? Colors.darker
          : Colors.lighter,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 2,
        },
      }}>
      <Tab.Screen
        name="Tabs.profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textFocused : styles.text}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              width={24}
              height={24}
              fill={focused ? '#2c6bed' : isDarkMode ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tabs.catalogue"
        component={Catalogue}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textFocused : styles.text}>
              Catalogue
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <PokeballIcon
              width={24}
              height={24}
              fill={focused ? '#2c6bed' : isDarkMode ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tabs.counter"
        component={Counter}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textFocused : styles.text}>
              Counter
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <CounterIcon
              width={24}
              height={24}
              fill={focused ? '#2c6bed' : isDarkMode ? '#fff' : '#000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
