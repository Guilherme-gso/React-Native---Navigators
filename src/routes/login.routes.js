import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './tab.routes';
import Login from '../screens/Login';

const StackNavigator = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: '#191414',
  }
}

const AppRoutes = () => {
  return (
    <StackNavigator.Navigator screenOptions={screenOptions}>
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Home" component={TabRoutes} />
    </StackNavigator.Navigator>
  );
};

export default AppRoutes;

