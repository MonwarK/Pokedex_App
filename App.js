import React from 'react';
import Navigation from "./src/infrastructure/navigation"
import { PokedexContextProvider } from './src/services/PokedexContext';
import { PokemonContextProvider } from './src/services/PokemonContext';

export default function App() {
  return (
    <PokedexContextProvider>
      <PokemonContextProvider>
        <Navigation />
      </PokemonContextProvider>
    </PokedexContextProvider>
  );
}