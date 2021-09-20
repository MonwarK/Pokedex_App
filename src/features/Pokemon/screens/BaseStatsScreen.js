import React from 'react'
import { FlatList, View } from 'react-native'
import { LinearProgress, Text } from 'react-native-elements'

const BaseStatsScreen = ({ detail }) => {
  return (
    <View style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={detail.stats}
        renderItem={({ item }) => (
          <View>
            <Text h4 h4Style={{ marginVertical: 10 }}>{item.stat.name.toUpperCase()}: {item.base_stat}</Text>
            <LinearProgress variant="determinate" color={item.base_stat >= 50 ? "green" : "red" } value={item.base_stat / 100} />
          </View>
        )}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  )
}

export default BaseStatsScreen
