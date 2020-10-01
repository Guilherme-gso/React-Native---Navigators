import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
`;

export const FormContent = styled.View`
  width: 100%;
`;

export const Title = styled.View`
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  background: #1DB954;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'Poppins_500Medium';

  margin-right: 12px;
`;

export const TextInput = styled.TextInput`
  width: 80%;
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins_400Regular';
`;