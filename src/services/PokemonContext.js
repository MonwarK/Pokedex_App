import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [detail, setDetail] = useState()

  const getDetail = async (url) => {
    const data = await axios.get(url).then((res) => res.data);
  }

  return (
    <PokemonContext.Provider
      value={{
        getDetail,
        detail
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}