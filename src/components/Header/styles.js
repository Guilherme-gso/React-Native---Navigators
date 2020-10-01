import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  width: 100%;
  background: #444;
  padding: 15px 5px;
  margin-top: ${Constants.statusBarHeight}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: transparent;
`;