import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Playlist from '../screens/Playlist';
import Music from '../screens/Music';
import DrawerRoutes from './drawer.routes';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../screens/Profile';

const TabNavigator = createBottomTabNavigator();

const tabOptions = {
  tabStyle: { backgroundColor: '#444'},
  showLabel: false,
  activeTintColor: '#1DB954',
  inactiveTintColor: '#ddd',
}

const screenOptions = {
  cardStyle: {
    backgroundColor: '#191414'
  }
}

const TabRoutes = () => {
  return(
    <TabNavigator.Navigator 
      tabBarOptions={tabOptions}
    >
      <TabNavigator.Screen 
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={28} color={color}/>
          )
        }} 
        name="Home" component={DrawerRoutes} 
    />

      <TabNavigator.Screen 
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={28} color={color}/>
          )
        }} 
        name="Profile" component={Profile} 
      />

    </TabNavigator.Navigator>
  );
};

export default TabRoutes;