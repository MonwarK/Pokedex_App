import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AboutScreen from '../../features/Pokemon/screens/AboutScreen';
import EvolutionScreen from '../../features/Pokemon/screens/EvolutionScreen';
import MovesScreen from '../../features/Pokemon/screens/MovesScreen';
import BaseStatsScreen from '../../features/Pokemon/screens/BaseStatsScreen';

const PokemonNavigation = ({ detail }) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10
        },
      }}
    >
      <Tab.Screen name="About">
        {() => <AboutScreen detail={detail} /> }
      </Tab.Screen>
      <Tab.Screen name="BaseStats"  options={{ title: "Base Stats" }}>
        {() => <BaseStatsScreen detail={detail} /> }
      </Tab.Screen>
      <Tab.Screen name="Evolution">
        {() => <EvolutionScreen detail={detail} /> }
      </Tab.Screen>
      <Tab.Screen name="Moves">
        {() => <MovesScreen detail={detail} /> }
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default PokemonNavigation
