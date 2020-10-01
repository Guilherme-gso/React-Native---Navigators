import React from 'react';
import Header from '../../components/Header';
import { 
  Container, 
  ProfilePhoto, 
  ProfileName, 
  ProfileEmail, 
  ButtonLogout,
  ButtonLogoutText
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <Header page="Profile" />
      <Container>
        <ProfilePhoto source={{ uri: 'https://github.com/guilherme-gso.png' }} />
        <ProfileName>Guilherme Gonçalves</ProfileName>
        <ProfileEmail>guilhermegso1019@gmail.com</ProfileEmail>

        <ButtonLogout onPress={() => navigate('Home')}>
          <ButtonLogoutText>Sair</ButtonLogoutText>
        </ButtonLogout>
      </Container>
    </>
  );
};

export default Profile;