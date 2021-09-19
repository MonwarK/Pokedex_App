import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const PokedexListItem = ({ pokemon, navigation }) => {
  const [pokemonDetail, setPokemonDetail] = useState()

  useEffect(() => {
    axios
    .get(pokemon.url)
    .then((res) => setPokemonDetail(res.data))
  }, [])

  return (
    <TouchableOpacity onPress={() => navigation.navigate("PokemonInfo", { detail: pokemonDetail })}>
      <ListItem bottomDivider>
        <Avatar size="large" source={{ uri: pokemonDetail?.sprites?.front_default}} />
        <ListItem.Content>
          <ListItem.Title>{pokemonDetail?.name.toUpperCase()}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
    
  )
  
}

export default PokedexListItem
