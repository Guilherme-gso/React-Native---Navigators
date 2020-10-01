import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.error ? '#f00' : '#1DB954'};
  margin-bottom: 20px;
  height: 45px;
`;

