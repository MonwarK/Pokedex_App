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
      <Tab.Screen name="About" component={() => <AboutScreen detail={detail} />} />
      <Tab.Screen name="BaseStats" options={{ title: "Base Stats" }} component={() => <BaseStatsScreen detail={detail} />} />
      <Tab.Screen name="Evolution" component={() => <EvolutionScreen detail={detail} />} />
      <Tab.Screen name="Moves" component={() => <MovesScreen detail={detail} />} />
    </Tab.Navigator>
  )
}

export default PokemonNavigation
