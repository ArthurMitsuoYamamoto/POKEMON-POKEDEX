import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './styles';

// URL da API Pokémon
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

// Definindo os tipos de dados para os Pokémon
type PokemonType = {
    name: string;
    url: string;
    id: number; // ID do Pokémon
    types: Array<{ type: { name: string; url: string } }>; // Tipos do Pokémon
};

export function PokemonManager() {
  const [pokemonName, setPokemonName] = useState<string>(''); 
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([]); 

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      const storedPokemons = await AsyncStorage.getItem('pokemons');
      if (storedPokemons) {
        setPokemonList(JSON.parse(storedPokemons));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addPokemon = async () => {
    if (!pokemonName) return;

    try {
      const response = await axios.get(`${POKE_API_URL}/${pokemonName.toLowerCase()}`);
      const newPokemon = response.data;

      // Verifica se o Pokémon já está na lista antes de adicioná-lo
      const pokemonExists = pokemonList.some(pokemon => pokemon.name === newPokemon.name);
      if (pokemonExists) {
        Alert.alert('Erro', 'Pokémon já adicionado!');
        return;
      }

      const updatedPokemons = [...pokemonList, newPokemon];
      setPokemonList(updatedPokemons);
      await AsyncStorage.setItem('pokemons', JSON.stringify(updatedPokemons));
      setPokemonName('');
    } catch (error) {
      Alert.alert('Erro', 'Pokémon não encontrado!');
    }
  };

  const removePokemon = async (name: string) => {
    const updatedPokemons = pokemonList.filter(pokemon => pokemon.name !== name);
    setPokemonList(updatedPokemons);
    await AsyncStorage.setItem('pokemons', JSON.stringify(updatedPokemons));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Pokémon"
        value={pokemonName}
        onChangeText={setPokemonName}
      />
      <TouchableOpacity style={styles.button} onPress={addPokemon}>
        <Text style={styles.buttonText}>Adicionar Pokémon</Text>
      </TouchableOpacity>

      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.pokemonItem}>
            <Text>{item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => removePokemon(item.name)}>
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
