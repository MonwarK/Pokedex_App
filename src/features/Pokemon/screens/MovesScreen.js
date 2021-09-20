import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { SafeArea } from '../../../components/SafeArea'

const MovesScreen = ({ detail }) => {
  return (
    <SafeArea>
      <FlatList
        data={detail.moves}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Title>{item.move.name.toUpperCase()}</ListItem.Title>
          </ListItem>
        )}
        keyExtractor={(_, i) => i.toString()}
      />
    </SafeArea>
  )
}

export default MovesScreen
