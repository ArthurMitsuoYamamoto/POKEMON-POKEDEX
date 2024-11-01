import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface ProfileTemplateStyles {
  container: ViewStyle;
  profileImage: ImageStyle;
  h1: TextStyle;
  h2: TextStyle;
  button: ViewStyle;
}

export interface ProfileTemplateProps {
  isLoading: boolean;
}

export interface CatalogueTemplateStyles {
  page: ViewStyle;
  buttoncontainer: ViewStyle;
  text: TextStyle;
  nopokemons: ViewStyle;
}

export interface CounterTemplateStyles {
  container: ViewStyle;
  text: TextStyle;
}
