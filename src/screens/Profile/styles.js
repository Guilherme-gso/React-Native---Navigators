import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191414;

  align-items: center;

  padding: 0 20px;
`;

export const ProfilePhoto = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  margin-top: 120px;
`;

export const ProfileName = styled.Text`
  font-size: 22px;
  color: #fff;
  font-family: 'Poppins_600SemiBold';
  margin-top: 12px;
`; 

export const ProfileEmail = styled.Text`
  font-size: 18px;
  color: #ccc;
  font-family: 'Poppins_500Medium';
`;

export const ButtonLogout = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  
  background: #f00;
  align-items: center;
  justify-content: center;

  margin-top: 200px;
  border-radius: 8px;
`;

export const ButtonLogoutText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-family: 'Poppins_600SemiBold';
`;