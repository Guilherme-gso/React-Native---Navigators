import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Playlist from '../screens/Playlist';
import Music from '../screens/Music';
import StackRoutes from './stack.routes';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';

const DrawerNavigator = createDrawerNavigator();

const drawerStyle = {
  backgroundColor: '#444',
  
}

const drawerOptions = {
  activeTintColor: '#1DB954',
  inactiveTintColor: '#fff',
  labelStyle: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
  }

}

const DrawerRoutes = () => {
  return(
    <DrawerNavigator.Navigator 
      drawerContentOptions={drawerOptions}  
      drawerStyle={drawerStyle} 
      drawerContent={CustomDrawer}
    >
      <DrawerNavigator.Screen 
        options={{ title: 'Início' }}
        name="Home" 
        component={Home} 
      />
      
      <DrawerNavigator.Screen 
        options={{ title: 'Playlists' }}
        name="Playlist" 
        component={Playlist} 
      />

      <DrawerNavigator.Screen 
        options={{ title: 'Músicas' }}
        name="Music" 
        component={Music} 
      />

      <DrawerNavigator.Screen 
        options={{ title: 'Perfil' }}
        name="Profile" 
        component={Profile} 
      />

    </DrawerNavigator.Navigator>
  );
};

export default DrawerRoutes;