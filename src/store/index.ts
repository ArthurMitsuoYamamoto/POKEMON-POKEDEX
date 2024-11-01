import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import pokemonReducer from './pokemonSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    pokemons: pokemonReducer,
  },
});
