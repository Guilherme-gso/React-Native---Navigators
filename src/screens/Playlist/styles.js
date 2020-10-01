import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191414;

  padding: 0 15px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-family: 'Poppins_600SemiBold';
  margin-top: 50px;

`;

export const List = styled(FlatList)`
  flex: 1;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const ImageContent = styled.View`
  height: 50px;
  width: 50px;
`;

export const DataContent = styled.View`
  margin-left: 40px;
  margin-top: 12px;
`;

export const PlaylistName = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins_500Medium';
`;

export const PlaylistOwner = styled.Text`
  font-size: 14px;
  color: #ccc;
  font-family: 'Poppins_400Regular';
`;

export const Image = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 4px;
`;