import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import PokedexListScreen from '../../features/Pokedex/screens/PokedexListScreen';
import PokemonInfoScreen from '../../features/Pokedex/screens/PokemonInfoScreen';

const AppNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
      }}
    >
      <Stack.Screen 
        name="Pokedex"
        component={PokedexListScreen} 
        options={{
          headerTintColor: "#fff"
        }}
       />
      <Stack.Screen 
        name="PokemonInfo" 
        component={PokemonInfoScreen} 
        options={{
          headerTitle: null,
          headerBackTitle: null,
        }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigation
