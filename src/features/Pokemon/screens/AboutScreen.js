import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeArea } from '../../../components/SafeArea'
import { types } from '../../../infrastructure/colors/types'
import DropdownItem from '../components/DropdownItem'

const AboutScreen = ({ detail }) => {

  return (
    <SafeArea>
      <ScrollView>
        <DropdownItem title="Abilities">
          {detail.abilities.map(({ability}) => 
            <ListItem>
              <ListItem.Title>{ability.name.toUpperCase()}</ListItem.Title>
            </ListItem>
          )}
        </DropdownItem>
        <DropdownItem title="Size">
          <ListItem>
            <ListItem.Title>Height: {detail.height / 10}m</ListItem.Title>
          </ListItem>
          <ListItem>
            <ListItem.Title>Weight: {detail.weight / 10}kg</ListItem.Title>
          </ListItem>
        </DropdownItem>
        <DropdownItem title="Types">
          {detail.types.map(({type}) => 
            <ListItem>
              <ListItem.Title>{type.name.toUpperCase()}</ListItem.Title>
            </ListItem>
          )}
        </DropdownItem>
      </ScrollView>
    </SafeArea>
  )
}

export default AboutScreen
