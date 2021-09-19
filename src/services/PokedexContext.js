import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const PokedexContext = createContext();

export const PokedexContextProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => setPokedex(res))
  }, [])

  return (
    <PokedexContext.Provider
      value={{
        pokedex,
      }}
    >
      {children}
    </PokedexContext.Provider>
  )
} 