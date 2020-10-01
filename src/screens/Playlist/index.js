import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

import { playlists } from '../../utils/playlists';

import { 
  Container, 
  List, 
  Title, 
  Card, 
  ImageContent, 
  DataContent,
  PlaylistName,
  PlaylistOwner,
  Image
} from './styles';

const Playlist = () => {
  return(
    <>
      <Header />
      
      <Container>
        <Title>Playlists</Title>

        <List
          showsVerticalScrollIndicator={false}
          data={playlists}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Card>
              <ImageContent>
                <Image source={{ uri: item.uri }} />
              </ImageContent>
              
              <DataContent>
                <PlaylistName>{item.name}</PlaylistName>
                <PlaylistOwner>by {item.owner}</PlaylistOwner>
              </DataContent>
            </Card>
          )}
        />
      </Container>
    </>
  );
};

export default Playlist;