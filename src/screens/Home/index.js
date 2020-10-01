import React from 'react';
import Header from '../../components/Header';
import { Container, Content, Card, CardText } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const { navigate } = useNavigation();
  
  return(
    <>
      <Header />

      <Container>

        <Content>
          <Card onPress={() => navigate('Playlist')}>
            <CardText>Playlists</CardText>
            <MaterialCommunityIcons name="apps" size={50} color="#1DB954" />
          </Card>

          <Card onPress={() => navigate('Music')}>
            <CardText>Músicas</CardText>
            <MaterialCommunityIcons name="library-music" size={50} color="#1DB954" />
          </Card>
        </Content>
      </Container>
    </>
  );
};

export default Home;