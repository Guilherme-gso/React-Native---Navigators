import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Container, HeaderButton } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const Header = ({ page  }) => {
  const { dispatch, navigate } = useNavigation();

  const openDrawer = () => {
    dispatch(DrawerActions.openDrawer());
  };

  const navigateBack = () => {
    navigate('Home');
  }

  return(
    <Container>
      <StatusBar
        translucent
        style="light"
        backgroundColor="#191414"
      />

      <HeaderButton onPress={page === 'Profile' ? navigateBack : openDrawer}>
        {page === 'Profile' ? (
            <MaterialCommunityIcons size={35} color="#1DB954" name="keyboard-backspace" />
        ) : (
            <MaterialCommunityIcons size={25} color="#fff" name="menu" />
        )}
      
      </HeaderButton>
    </Container>
  );
};

export default Header;