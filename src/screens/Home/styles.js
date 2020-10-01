import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background: #191414;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.TouchableOpacity`
  padding: 40px;
  background: #444;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const CardText = styled.Text`
  font-size: 22px;
  color: #1DB954;
  font-family: 'Poppins_500Medium';
`;