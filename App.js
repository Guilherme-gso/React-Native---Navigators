import 'react-native-gesture-handler';
import { View } from 'react-native';
import React from 'react';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_300Light, 
  Poppins_500Medium, 
  Poppins_600SemiBold 
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import LoginRoutes from './src/routes/login.routes';
import { StatusBar } from 'expo-status-bar';

const Main = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_300Light, 
    Poppins_500Medium, 
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return(
    <NavigationContainer>
      <StatusBar
        style="light"
        backgroundColor="#191414"
      />
      <LoginRoutes />
    </NavigationContainer>
  );
};

export default Main;