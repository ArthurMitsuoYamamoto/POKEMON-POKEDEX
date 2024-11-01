import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../interfaces/pokemon.interface';

const initialState: Pokemon[] = [];

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
