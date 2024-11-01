import { TextStyle, ViewStyle } from 'react-native';

export interface CustomModalStyles {
  modal: ViewStyle;
  centeredView: ViewStyle;
  iconButton: ViewStyle;
  childrenContainer: ViewStyle;
}

export interface AddPokemonFlatListStyles {
  contentContainer: ViewStyle;
  columnWrapper: ViewStyle;
}

export interface AddPokemonCardStyles {
  card: ViewStyle;
  pokemonNameContainer: ViewStyle;
  pokemonName: TextStyle;
  modalContainer: ViewStyle;
  modalText: TextStyle;
  modalElement: ViewStyle;
  modalElementColumn: ViewStyle;
  modalButtonContainer: ViewStyle;
}
