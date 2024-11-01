import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  EditProfile: undefined;
  AddPokemon: undefined;
  Tabs: undefined;
};

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditProfile',
  'AddPokemon'
>;

export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tabs'
>;
