import React, { useEffect } from 'react';
import {
  Alert,
  Dimensions,
  ListRenderItemInfo,
  Text,
  TouchableHighlight,
  View,
  useColorScheme,
} from 'react-native';
import { AddPokemon, Pokemon } from '../../interfaces/pokemon.interface';
import { AddPokemonCardStyles } from '../../interfaces/organisms.interface';
import CustomModal from './CustomModal';
import IconButton from '../molecules/IconButton';
import AddIcon from '../../assets/icons/add.svg';
import { SavePokemon, GetPokemonInfoFromAPI } from '../../api/pokemon';
import { useDispatch } from 'react-redux';
import { setPokemons } from '../../store/pokemonSlice';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProp } from '../../types/navigation.type';

function AddPokemonCard({
  pokemon,
}: {
  pokemon: ListRenderItemInfo<AddPokemon>;
}) {
  const { height, width } = Dimensions.get('window');
  const isDarkMode = useColorScheme() === 'dark';
  const [pokemonInfo, setPokemonInfo] = React.useState<Pokemon | null>(null);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeNavigationProp>();

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      const response = await GetPokemonInfoFromAPI(pokemon.item.url);
      setPokemonInfo(response as Pokemon);
    };
    fetchPokemonInfo();
  }, [pokemon]);

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

  if (!pokemonInfo) {
    return <View style={style.card} />;
  }

  return (
    <>
      <TouchableHighlight style={style.card} onPress={handleModal}>
        <View style={style.pokemonNameContainer}>
          <Text style={style.pokemonName}>{pokemonInfo.name}</Text>
        </View>
      </TouchableHighlight>
      <CustomModal modalVisible={modalOpen} handleModal={handleModal}>
        <View style={style.modalContainer}>
          <View style={style.modalElement}>
            <Text style={style.pokemonName}>Name:</Text>
            <Text style={style.modalText}>{pokemonInfo.name}</Text>
          </View>
          <View style={style.modalElement}>
            <Text style={style.pokemonName}>Types:</Text>
            {pokemonInfo.types.map((type, index) => (
              <Text key={index} style={style.modalText}>
                {type}
              </Text>
            ))}
          </View>
          <View style={style.modalElementColumn}>
            <Text style={style.pokemonName}>Moves:</Text>
            {pokemonInfo.moves.map((move, index) => (
              <Text key={index} style={style.modalText}>
                {move}
              </Text>
            ))}
          </View>
          <View style={style.modalButtonContainer}>
            <IconButton
              Image={AddIcon}
              onPress={async () => {
                try {
                  const pokemons: Pokemon[] = await SavePokemon(pokemonInfo);
                  await dispatch(setPokemons(pokemons));
                  await handleModal();
                  navigation.navigate('Tabs');
                } catch (error: any) {
                  Alert.alert('Error', error.toString().split(': ')[1]);
                }
              }}
              title="Add pokemon"
            />
          </View>
        </View>
      </CustomModal>
    </>
  );
}

export default AddPokemonCard;
