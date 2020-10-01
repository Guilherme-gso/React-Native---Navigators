import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Music from '../screens/Music';
import Playlist from '../screens/Playlist';
import Home from '../screens/Home';

const StackNavigator = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: '#191414',
  }
}

const StackRoutes = () => {
  return (
    <StackNavigator.Navigator screenOptions={screenOptions}>
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="Music" component={Music} />
      <StackNavigator.Screen name="Playlist" component={Playlist} />
    </StackNavigator.Navigator>
  );
};

export default StackRoutes;

