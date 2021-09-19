import React from 'react'
import { View, Text } from 'react-native'
import { types } from '../../../infrastructure/colors/types'
import styled from "styled-components/native"
import { Avatar } from 'react-native-elements';
import PokemonNavigation from '../../../infrastructure/navigation/PokemonNavigation';
import { Ionicons } from '@expo/vector-icons';

const Container = styled(View)`
  min-height: 200px;
  height: 35%;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled(Ionicons)
.attrs({
  name: "arrow-back-sharp",
  size: 24,
  color: "white"
})`
  position: absolute;
  top: 30px;
  left: 10px;
`;

const PokemonInfoScreen = ({ navigation, route }) => {
  const { detail } = route.params;
  navigation.setOptions({
    headerShown: false
  })

  return (
    <View style={{ flex: 1 }}>
      <Container style={{ backgroundColor: types[detail.types[0].type.name] }}>
        <BackButton onPress={() => navigation.goBack()} />
        <Avatar size="xlarge" source={{ uri: detail?.sprites?.front_default}} />
        <Text>{detail.name.toUpperCase()}</Text>
      </Container>
      <PokemonNavigation detail={detail} />
    </View>
    
  )
}

export default PokemonInfoScreen
