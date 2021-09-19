import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import { PokedexContext } from '../../../services/PokedexContext'
import PokedexListItem from '../components/PokedexListItem';

const PokedexListScreen = ({ navigation }) => {
  const { pokedex } = useContext(PokedexContext);

  if (pokedex) {
    return (
      <View>
        <FlatList
          data={pokedex.data?.results}
          renderItem={(pokemon) => <PokedexListItem navigation={navigation} key={pokemon.index + 1} pokemon={pokemon.item} />}
          keyExtractor={(_, i) => i}
        />
      </View>
    )
  }
  
}

export default PokedexListScreen
