import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'

const DropdownItem = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <ListItem.Accordion
      isExpanded={expanded}
      content={
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
        </ListItem.Content>
      }
      onPress={() => setExpanded(!expanded)}
    >
      <View style={{ marginLeft: 20 }}>
        {children}
      </View>
    </ListItem.Accordion>
  )
}

export default DropdownItem
