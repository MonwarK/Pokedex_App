import React from 'react';
import Navigation from "./src/infrastructure/navigation"
import { PokedexContextProvider } from './src/services/PokedexContext';

export default function App() {
  return (
    <PokedexContextProvider>
      <Navigation />
    </PokedexContextProvider>
  );
}