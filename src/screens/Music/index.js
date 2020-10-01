import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import { 
  Container, 
  Title, 
  ListMusic,
  Card,
  ImageContent,
  DataContent,
  MusicName,
  MusicAuthor,
  Image
} from './styles';

import { musics } from '../../utils/musics';

const Music = () => {
  return(
    <>
      <Header />

      <Container>
        <Title>Músicas</Title>

        <ListMusic
          showsVerticalScrollIndicator={false}
          data={musics}
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
                <MusicName>{item.songname}</MusicName>
                <MusicAuthor>{item.songauthor}</MusicAuthor>
              </DataContent>
            </Card>
          )}
        />

      </Container>
    </>
  );
};

export default Music;