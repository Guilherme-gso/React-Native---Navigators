import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #191414;

  padding: 0 15px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-family: 'Poppins_600SemiBold';
  margin-top: 50px;
`;

export const ListMusic = styled(FlatList)`
  flex: 1;
`;

export const Card = styled.View`
  flex: 1;
  margin-bottom:40px;
`;

export const ImageContent = styled.View`
  height: 240px;
  width: 100%;
`;

export const Image = styled.Image`
  height: 100%;
  border-radius: 8px;
`;

export const DataContent = styled.View`
  margin-top: 24px;
`;

export const MusicName = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins_500Medium';
`;

export const MusicAuthor = styled.Text`
  font-size: 14px;
  color: #ccc;
  font-family: 'Poppins_400Regular';
`;