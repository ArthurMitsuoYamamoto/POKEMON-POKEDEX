import * as React from 'react';

import { Alert, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Card } from '../../components/Card';
import { Load } from '../../components/Load';
import pokeballImage from '../../assets/img/pokeball.png';
import api from '../../services/api';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

type PokemonType = {
  type: {
    name: string;
  };
};

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
}

export interface Request {
  id: number;
  types: PokemonType[];
}

export function Home() {
  const { navigate } = useNavigation();
  const [load, setLoad] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      try {
        const storedPokemons = await AsyncStorage.getItem('pokemons');
        if (storedPokemons) {
          setPokemons(JSON.parse(storedPokemons));
        } else {
          const response = await api.get('/pokemon');
          const { results } = response.data;

          const payloadPokemons = await Promise.all(
            results.map(async (pokemon: Pokemon) => {
              const { id, types } = await getMoreInfoAboutPokemonsByUrl(pokemon.url);
              return {
                name: pokemon.name,
                id,
                types,
              };
            }),
          );

          setPokemons(payloadPokemons as Pokemon[]);
          await AsyncStorage.setItem('pokemons', JSON.stringify(payloadPokemons)); // Salvar no AsyncStorage
        }
      } catch (err) {
        Alert.alert('Ops, algo de errado aconteceu, tente mais tarde');
      } finally {
        setLoad(false);
      }
    }

    getPokemons();
  }, []);

  async function getMoreInfoAboutPokemonsByUrl(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data as Request;
    return { id, types };
  }

  function handleNavigationPokemonDetail(pokemonId: number) {
    navigate('About', {
      pokemonId,
    });
  }

  return load ? (
    <S.LoadingScreen>
      <Load />
    </S.LoadingScreen>
  ) : (
    <>
      <S.Container>
        <FlatList
          ListHeaderComponent={
            <>
              <S.Header source={pokeballImage} />
              <S.Title> Pokédex</S.Title>
              <Button title="Gerenciar Pokémon" onPress={() => navigate('PokemonManager')} /> {/* Botão para gerenciar Pokémon */}
            </>
          }
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          data={pokemons}
          keyExtractor={pokemon => pokemon.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: pokemon }) => (
            <Card
              data={pokemon}
              onPress={() => {
                handleNavigationPokemonDetail(pokemon.id);
              }}
            />
          )}
        />
      </S.Container>
    </>
  );
}
