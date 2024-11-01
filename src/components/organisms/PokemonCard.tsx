import React from 'react';
import {
  Alert,
  Dimensions,
  Text,
  TouchableHighlight,
  View,
  useColorScheme,
} from 'react-native';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { AddPokemonCardStyles } from '../../interfaces/organisms.interface';
import CustomModal from './CustomModal';
import IconButton from '../molecules/IconButton';
import DeleteIcon from '../../assets/icons/delete.svg';
import { useDispatch } from 'react-redux';
import { setPokemons } from '../../store/pokemonSlice';
import { DeletePokemon } from '../../api/pokemon';

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const { height, width } = Dimensions.get('window');
  const isDarkMode = useColorScheme() === 'dark';
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const style: AddPokemonCardStyles = {
    card: {
      backgroundColor: isDarkMode ? '#333' : '#fff',
      elevation: 4,
      borderRadius: 12,
      height: height / 4 - 24,
      width: width / 2 - 24,
    },
    pokemonNameContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pokemonName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      flexDirection: 'column',
      gap: 12,
    },
    modalElement: {
      flexDirection: 'row',
      gap: 4,
    },
    modalElementColumn: {
      flexDirection: 'column',
      gap: 4,
    },
    modalText: {
      fontSize: 18,
    },
    modalButtonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  };

  if (!pokemon) {
    return <View style={style.card} />;
  }

  return (
    <>
      <TouchableHighlight style={style.card} onPress={handleModal}>
        <View style={style.pokemonNameContainer}>
          <Text style={style.pokemonName}>{pokemon.name}</Text>
        </View>
      </TouchableHighlight>
      <CustomModal modalVisible={modalOpen} handleModal={handleModal}>
        <View style={style.modalContainer}>
          <View style={style.modalElement}>
            <Text style={style.pokemonName}>Name:</Text>
            <Text style={style.modalText}>{pokemon.name}</Text>
          </View>
          <View style={style.modalElement}>
            <Text style={style.pokemonName}>Types:</Text>
            {pokemon.types.map((type, index) => (
              <Text key={index} style={style.modalText}>
                {type}
              </Text>
            ))}
          </View>
          <View style={style.modalElementColumn}>
            <Text style={style.pokemonName}>Moves:</Text>
            {pokemon.moves.map((move, index) => (
              <Text key={index} style={style.modalText}>
                {move}
              </Text>
            ))}
          </View>
          <View style={style.modalButtonContainer}>
            <IconButton
              Image={DeleteIcon}
              onPress={async () => {
                try {
                  const newPokemons = await DeletePokemon(pokemon);
                  dispatch(setPokemons(newPokemons));
                  handleModal();
                } catch (error) {
                  console.error(error);
                  Alert.alert('Error', 'Something went wrong');
                }
              }}
              title="Delete Pokemon"
            />
          </View>
        </View>
      </CustomModal>
    </>
  );
}

export default PokemonCard;
